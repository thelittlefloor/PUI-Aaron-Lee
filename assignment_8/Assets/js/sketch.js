var numFrames = 500;

var SEED = 33.3;
var m = 2000;
var rad = 1.5;
var nperiod = 4.0;

var canvas;

function setup() {
	canvas = createCanvas(1920, 1080);
	canvas.position(0,0);
	canvas.elt.style.position = "fixed"
	canvas.style('z-index', '-2');
	frameRate(60);
}

function draw() {
	background(241);
	stroke(210);
	var t = 1.0*(frameCount - 1)/numFrames;
	noiseDetail(1, 0.5);
	for(var i = 0; i < m; i++){
		var p = 1.0*i/m;

		var dx1 = 100*noise(13.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy1 = 100*noise(2*13.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx1, height/5 + dy1);

		var dx2 = 100*noise(23.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy2 = 100*noise(2*23.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx2, 2*height/5 + dy2);

		var dx3 = 100*noise(33.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy3 = 100*noise(2*33.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx3, 3*height/5 + dy3);

		var dx4 = 100*noise(43.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy4 = 100*noise(2*43.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx4, 4*height/5 + dy4);
	}
}

