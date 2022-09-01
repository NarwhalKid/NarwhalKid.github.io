function ree(){
	setTimeout(function(){
		if (window.screen.width < 1660){
			if (window.screen.width < 1330) {
			if (window.screen.width < 1002) {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "1.2em")
			} else {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "1.5em")
			}
			} else {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "2em")
			}
			} else {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "2.5em")
		}
		ree();
	},100)
}

ree();