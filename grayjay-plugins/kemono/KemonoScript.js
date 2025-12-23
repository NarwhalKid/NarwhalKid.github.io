// https://kemono.cr/documentation/api

const PLATFORM = "Kemono";

let config = {};
let _settings = {};
const baseUrl = 'https://kemono.cr';
const apiUrl = baseUrl + "/api/v1";
const imageUrl = "https://img.kemono.cr";
const userAgent = "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.153 Mobile Safari/537.36";

const postRegex = /\/[a-zA-Z]*\/user\/[0-9]*\/post\/[0-9]*/gm;
const userRegex = /\/[a-zA-Z]*\/user/gm;

let _channelCache = {};

let KEMONO_REQUEST_MODIFIER = {
    headers: {
        "Referer": baseUrl + "/",
        "Origin": baseUrl
    }
};

function dateToUnix(date) {
    return Math.floor(date.getTime() / 1000);
}

function isVideoUrl(url) {
    const videoUrl = new URL(url);
    if (videoUrl.origin !== baseUrl) return false;
    if (!videoUrl.pathname.match(postRegex)) return false;
    return true;
}
function infoToVideoUrl(service, userId, postId) {
    return `${baseUrl}/${service}/user/${userId}/post/${postId}`;
}
function getInfoFromVideoUrl(url) {
    const path = new URL(url).pathname.split('/').slice(1);
    return {
        service: path[0],
        userId: path[2],
        postId: path[4]
    };
}

function isUserUrl(url) {
    const userUrl = new URL(url);
    if (userUrl.origin !== baseUrl) return false;
    if (!userUrl.pathname.match(userRegex)) return false;
    return true;
}
function infoToUserUrl(service, userId) {
    return `${baseUrl}/${service}/user/${userId}`;
}
function getInfoFromUserUrl(url) {
    const path = new URL(url).pathname.split('/').slice(1);
    return {
        service: path[0],
        userId: path[2]
    };
}

function getVideos(posts) {
    return posts
        .filter(x => x.file.path?.endsWith(".mp4"))
        .map(x => videoToPlatformVideo(x));
}

function getUserInfo(service, userId) {
    if (_channelCache[service]?.[userId]) return _channelCache[service][userId];
    const dataResp = http.GET(`${apiUrl}/${service}/user/${userId}/profile`, {"Accept": "text/css"}, true);

    if (!dataResp.isOk)
        throw new ScriptException("Failed to get creator");
	
    const creator = JSON.parse(dataResp.body);
    const channel = new PlatformChannel({
        id: creator.id,
        name: creator.name,
        thumbnail: `${imageUrl}/icons/${creator.service}/${creator.id}`,
        banner: `${imageUrl}/banners/${creator.service}/${creator.id}`,
        subscribers: 0,
        description: "",
        url: infoToUserUrl(creator.service, creator.id)
    });
    if (!_channelCache[service]) _channelCache[service] = {};
    _channelCache[service][userId] = channel;
    return channel;
}

function videoToPlatformVideo(video) {
    const author = getUserInfo(video.service, video.user);
    return new PlatformVideo({
        id: new PlatformID(PLATFORM, video.id, config.id),
        name: video.title,
        datetime: dateToUnix(new Date(video.published)),
        url: infoToVideoUrl(video.service, video.user, video.id),

        thumbnails: new Thumbnails([
            new Thumbnail()
        ]),
        author: new PlatformAuthorLink(
            new PlatformID(PLATFORM, author.id, config.id), 
            author.name,
            author.url,
            author.thumbnail
        ),

        duration: 0,
        viewCount: 0,
        isLive: false
    });
}

//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
    _settings = settings ?? {};
}
source.getHome = function() {
	return new ContentPager([], false);
};

source.searchSuggestions = function(query) {
	return [];
};
source.getSearchCapabilities = () => {
	return {
		types: [],
		sorts: [],
		filters: []
	};
};
class SearchPager extends VideoPager {
	constructor(query) {
		super(...Object.values(search(query, 1)));
		this.query = query;
		this.page = 1;
	}
	nextPage() {
		this.page = this.page + 1;
        const searchResults = search(this.query, this.page + 1);
		this.results = searchResults.results;
		this.hasMore = searchResults.hasMore;
		return this;
	}
}
source.search = function (query, type, order, filters) {
    return new SearchPager(query);
};
function search(query, page) {
    let videos = [];
    let hasMore = true;
    const dataResp = http.GET(
        `${apiUrl}/posts?o=${(page-1)*50}&q=${encodeURIComponent(query) || ""}`, 
        {"Accept": "application/json"}, 
        true
    );
    if (!dataResp.isOk)
        throw new ScriptException("Failed to get videos");
    posts = JSON.parse(dataResp.body).posts;
    videos.push(...getVideos(posts));
    if (posts.length < 50) hasMore = false;
    return {
        results: videos, 
        hasMore
    };
}
source.getSearchChannelContentsCapabilities = function () {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};

class ChannelContentsSearchPager extends VideoPager {
	constructor(query) {
		super(...Object.values(search(query, 1)));
		this.query = query;
		this.page = 1;
	}
	nextPage() {
		this.page = this.page + 1;
        const searchResults = channelContentsSearch(this.query, this.page + 1);
		this.results = searchResults.results;
		this.hasMore = searchResults.hasMore;
		return this;
	}
}
source.searchChannelContents = function (channelUrl, query, type, order, filters) {
    return new ChannelContentsSearchPager(query);
};
function channelContentsSearch(query, page) {
    let hasMore = true;
    const info = getInfoFromUserUrl(channelUrl);
    const dataResp = http.GET(
        `${apiUrl}/${info.service}/user/${info.userId}/posts?o=${(page-1)*50}&q=${encodeURIComponent(query) || ""}`, 
        {"Accept": "text/css"}, 
        true
    );
    if (!dataResp.isOk)
        throw new ScriptException("Failed to search creator's posts");
    const response = JSON.parse(dataResp.body);
    const videos = getVideos(response);
    if (response.length < 50) hasMore = false;
    return {
        results: videos,
        hasMore
    };
}

source.searchChannels = function (query) {
    const dataResp = http.GET(`${apiUrl}/creators`, {"Accept": "text/css"}, true);

    if (!dataResp.isOk)
        throw new ScriptException("Failed to get creators");
    let creators = JSON.parse(dataResp.body);
    creators = creators.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
    console.log(creators);
    creators = creators.map(x => 
        new PlatformAuthorLink(
            new PlatformID(PLATFORM, x.id, config.id), 
            x.name,
            infoToUserUrl(x.service, x.id),
            `${imageUrl}/icons/${x.service}/${x.id}`
        ),
    );

	return new ChannelPager(creators, false);
};

//Channel
source.isChannelUrl = function(url) {
	return isUserUrl(url);
};
source.getChannel = function(url) {
    const info = getInfoFromUserUrl(url);
    const dataResp = http.GET(
        `${apiUrl}/${info.service}/user/${info.userId}/profile`, 
        {"Accept": "text/css"}, 
        true
    );

    if (!dataResp.isOk)
        throw new ScriptException("Failed to get creator");
	
    const creator = JSON.parse(dataResp.body);
    return new PlatformChannel({
        // Use PlatformID, not string
        id: new PlatformID(PLATFORM, creator.id, config.id),
        name: creator.name,
        description: "",
        url: infoToUserUrl(creator.service, creator.id),
        subscribers: 0,
        banner: `${imageUrl}/banners/${creator.service}/${creator.id}`,
        thumbnail: `${imageUrl}/icons/${creator.service}/${creator.id}`
    });
};
class ChannelContentsPager extends VideoPager {
	constructor(url) {
		super(...Object.values(getChannelContents(url, 1)));
		this.url = url;
		this.page = 1;
	}
	nextPage() {
		this.page = this.page + 1;
        const searchResults = getChannelContents(this.url, this.page + 1);
		this.results = searchResults.results;
		this.hasMore = searchResults.hasMore;
		return this;
	}
}
source.getChannelContents = function(url) {
    return new ChannelContentsPager(url);
};
function getChannelContents(url, page) {
    let hasMore = true;
    const info = getInfoFromUserUrl(url);
    const dataResp = http.GET(
        `${apiUrl}/${info.service}/user/${info.userId}/posts?o=${(page-1)*50}`, 
        {"Accept": "text/css"}, 
        true
    );

    if (!dataResp.isOk)
        throw new ScriptException("Failed to get creator's posts");
	
    const response = JSON.parse(dataResp.body);
    const videos = getVideos(response);
    if (response.length < 50) hasMore = false;
    return {
        results: videos,
        hasMore
    };
}

//Video
source.isContentDetailsUrl = function(url) {
    return isVideoUrl(url);
};
source.getContentDetails = function(url) {
    const info = getInfoFromVideoUrl(url);
    const dataResp = http.GET(
        `${apiUrl}/${info.service}/user/${info.userId}/post/${info.postId}`,
        {"Accept": "text/css"}, 
        true
    );
    if (!dataResp.isOk)
        throw new ScriptException("Failed to get video details");
	
    const video = JSON.parse(dataResp.body);
	const author = getUserInfo(video.post.service, video.post.user);
    return new PlatformVideoDetails({
        id: new PlatformID(PLATFORM, video.id, config.id),
        name: video.post.title,
        thumbnails: new Thumbnails([
            new Thumbnail()
        ]),
        author: new PlatformAuthorLink(
            new PlatformID(PLATFORM, author.id, config.id), 
            author.name,
            author.url,
            author.thumbnail
        ),
        datetime: dateToUnix(new Date(video.post.published)),
        duration: 0,
        viewCount: 0,
        url: url,
        isLive: false,

		description: video.post.content || "",
        video: new VideoSourceDescriptor([
            new VideoUrlSource({
                name: video.videos[0].name,
                container: "video/mp4",
                url: `${video.videos[0].server}/data${video.videos[0].path}`
            })
        ]),
        live: null,
        rating: new RatingLikes(0)
	});
};

//Comments
source.getComments = function (url) {
    const info = getInfoFromVideoUrl(url);
    const dataResp = http.GET(
        `${apiUrl}/${info.service}/user/${info.userId}/post/${info.postId}/comments`,
        {"Accept": "text/css"}, 
        true
    );
    if (!dataResp.isOk)
        throw new ScriptException("Failed to get comments");
	
    const response = JSON.parse(dataResp.body);
    const comments = response.map(x => new Comment({
        contextUrl: url,
        author: new PlatformAuthorLink(
            new PlatformID(PLATFORM, x.commenter, config.id), 
            x.commenter_name,
            "",
            ""
        ),
        message: x.content,
        rating: new RatingLikes(0),
        date: dateToUnix(new Date(x.published)),
        replyCount: 0
    }));
	return new CommentPager(comments, false);

}
source.getSubComments = function (comment) {
	return new CommentPager([], false);
}

log("LOADED");
