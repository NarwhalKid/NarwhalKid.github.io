const canvas = document.getElementById('canvas');
function draw() {
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgb(200, 0, 0)';
	ctx.fillRect(0, 0, 50, 50);
}






if (canvas.getContext) {
   draw();
} else {
  alert('there is an error with loading the canvas.');
}