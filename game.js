let canvas, ctx, w, h;

window.onload = function() {
  canvas = document.querySelector("#gameCanvas");
	gameArea = document.querySelector("#gameArea");
	ctx = canvas.getContext('2d');
  
  resizeGame();
	
	addEventListener('resize', resizeGame, false);
	addEventListener('orientationchange', resizeGame, false);
  
  test();
};

function resizeGame() {
	let widthToHeight = 5/2.5;
	let newWidth = window.innerWidth -10;
	let newHeight = window.innerHeight - 10;
	let newWidthToHeight = newWidth / newHeight;
	
	if(newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		gameArea.style.height = newHeight + 'px';
		gameArea.style.width = newWidth + 'px';
	}
	else {
		newHeight = newWidth / widthToHeight;
		gameArea.style.height = newHeight + 'px';
		gameArea.style.width = newWidth + 'px';
	}
	
	gameArea.style.marginTop = (-newHeight/2) + 'px';
	gameArea.style.marginLeft = (-newWidth/2) + 'px';
	gameArea.style.fontSize = (newWidth/400) + 'em';
	
	canvas.width = newWidth;
	canvas.height = newHeight;
	
	w = canvas.width;
	h = canvas.height;
}

function test() {
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, w, h);
  }



