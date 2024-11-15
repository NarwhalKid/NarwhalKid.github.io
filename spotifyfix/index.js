(function (context, patcher, metro) {
    "use strict";
    
    const { before } = patcher;
    const { findByProps } = metro;
    const SpotifyStore = findByProps("dispatch", "getProfile");
    

    const unpatch = () => {
        before("dispatch", SpotifyStore, ([action]) => {
            if (
                action.type === "SPOTIFY_PROFILE_UPDATE" &&
                action.payload?.isPremium === undefined
            ) {
                action.payload.isPremium = true; // Force premium
            }
        })
    }

    context.onUnload = unpatch;

})({}, vendetta.patcher, vendetta.metro);
