function proxy() {
	if (document.getElementById('proxyId').innerText == 'Proxy: On') {
    document.getElementById('subButton').innerHTML = '<button id=submitId onclick="submit(0)">Submit</button>';
  document.getElementById('proxyId').innerText = 'Proxy: Off';
  } else {
    document.getElementById('subButton').innerHTML = '<button id=submitId onclick="submit(1)">Submit</button>';
  document.getElementById('proxyId').innerText = 'Proxy: On';
  }
}

function submit(onStat) {
  var x = document.getElementById("link").value;
  document.getElementById("inside").innerHTML = '<iframe allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen id="ifrm" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="https://google.com/" width="1920" height="1080" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>;';
  
  

	var el = document.getElementById('ifrm');
  
	if (onStat == 1) {
	var x = "https://nkpydodge" + num + ".herokuapp.com/course/" + x
	}



	el.src = x; // assign url to src property
}

function chngBkmrk() {
	var bkLink = document.getElementById('bkmrkLink').value;
	document.getElementById('bookmarkletText').innerText = "Drag this text to your bookmarks bar (ctrl + shift + b to show bar) to get a bookmarklet. Click the bookmarklet if you get redirected awat from narwhalkid.com/history. It'll replace the link with " + bkLink + ". (right click and hit edit to rename it)"
	document.getElementById('bookmarkletText').href = 'javascript:(function()%7Bwindow.location.replace("' + bkLink + '")%7D)()%3B'
}

function subName() {
	document.getElementById('title').innerText = document.getElementById('tabName').value;
}

function iconChange() {
	document.getElementById('icon').href = document.getElementById('iconLink').value;
}