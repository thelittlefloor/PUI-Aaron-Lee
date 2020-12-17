var canvas;
let x = 0;
let y = 0;
var ease = 0.1;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
}

function draw() {
	background(150, 150, 150);

	var targetX = mouseX;
	var dx = targetX - x;
	x = x + dx*ease;

	var targetY = mouseY;
	var dy = targetY - y;
	y = y + dy*ease;

	fill(200, 200, 200);
	ellipse(x, y, 60, 60);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}