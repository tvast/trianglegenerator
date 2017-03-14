function drawTriangle() {

  		var canvas = document.getElementById('canvas');
  		canvas.width = document.documentElement.offsetWidth/2
  		canvas.height = document.documentElement.offsetHeight/2

  		var ctx = canvas.getContext('2d');

  		ctx.globalCompositeOperation = 'overlay';

  		var colors = [	'rgba(26, 188, 156,1.0)', 
  		'rgba(46, 204, 113,1.0)',
  		'rgba(52, 152, 219,1.0)',
  		'rgba(155, 89, 182,1.0)',
  		'rgba(52, 73, 94,1.0)',
  		'rgba(241, 196, 15,1.0)',
  		'rgba(230, 126, 34,1.0)',
  		'rgba(189, 195, 199,1.0)',
  		'rgba(230, 126, 34,1.0)'


  		]

// will make a feasable amount of triangles to fit the screen
var amount = Math.floor((canvas.width * canvas.height) / 25000);


for (var i = 0; i < amount; i++) {
	makeTriangle(colors[randomInt(0, colors.length - 1)]);
}


function makeTriangle(fillColor) {
	var coordinates = getStart();
	ctx.fillStyle = fillColor;
	ctx.beginPath();
	drawLines(coordinates);
	ctx.closePath();
	ctx.fill();
}

function getStart() {
	startArray = {};
	startArray.x = Math.floor((Math.random() * canvas.width) + 1);
	startArray.y = Math.floor((Math.random() * canvas.height) + 1);
	return startArray
}

function drawLines(coordinates) {
	ctx.moveTo(coordinates.x, coordinates.y);
	ctx.lineTo(coordinates.x + randomInt(-500, 400), coordinates.y + randomInt(-400, 500));
	ctx.lineTo(coordinates.x + randomInt(-500, 400), coordinates.y + randomInt(-400, 500));
	ctx.lineTo(coordinates.x, coordinates.y);
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

}



  	
