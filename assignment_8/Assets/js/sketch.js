//javascript code based on the Processing code provided by Etienne Jacob (https://necessarydisorder.wordpress.com/)

var numFrames = 400;

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

// The line animation is an extrapolation of a circular motion from left to right
// giving the effect of moving squiggly lines across the screen
// predetermined SEEDs are used to extract perlin noise profile instead of randomizing every refresh
function draw() {
	background(241);
	stroke(210);
	var t = 1.0*(frameCount - 1)/numFrames;
	noiseDetail(1, 0.5);
	for(var i = 0; i < m; i++){
		var p = 1.0*i/m;
		//squiggly line 1
		var dx1 = 100*noise(13.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy1 = 100*noise(2*13.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx1, dy1);
		//squiggly line 2
		var dx2 = 100*noise(23.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy2 = 100*noise(2*23.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx2, height/6 + dy2);
		//squiggly line 3
		var dx3 = 100*noise(33.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy3 = 100*noise(2*33.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx3, 2*height/6 + dy3);
		//squiggly line 4
		var dx4 = 100*noise(43.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy4 = 100*noise(2*43.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx4, 3*height/6 + dy4);
		//squiggly line 5
		var dx5 = 100*noise(53.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy5 = 100*noise(2*53.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx5, 4*height/6 + dy5);
		//squiggly line 6
		var dx6 = 100*noise(63.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		var dy6 = 100*noise(2*63.3 + rad*cos(TWO_PI*(nperiod*p - t)), rad*sin(TWO_PI*(nperiod*p - t)), 50.0*p);
		point(p*width + dx6, 5*height/6 + dy6);
	}
}

