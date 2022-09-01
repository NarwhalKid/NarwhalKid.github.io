function ree(){
	setTimeout(function(){
		if (window.screen.width < 150){
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "2em")
		} else {
			document.querySelectorAll('h2').forEach(element => element.style.fontSize = "2.5em")
		}
		ree();
	},100)
}

ree();