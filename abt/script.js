function ree(){
	setTimeout(function(){
		if (window.screen.width < 1150){
			if (window.screen.width < 200) {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "1.5em")
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