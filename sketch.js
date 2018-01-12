var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
					 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368,
					 75025, 121393, 196418, 317811, 514229, 832040, 1346269,
					 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
					 39088169, 63245986, 102334155];
console.log(fib.length);

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CORNERS);
}

function draw() {
	background(255);
	translate(width/2, height/2);
	scale(1.0, -1.0);
	var first = createVector(0, 1);
	var second = createVector(0, 1);
	for(var i = 1; i < 41; i++) {
		var len = fib[i] / mouseX * 2;
		var rem = i % 4;
		if(rem == 0) {
			second.x += len;
			second.y -= len;
		}
		if(rem == 1) {
			second.x += len;
			second.y += len;
		}
		if(rem == 2) {
			second.x -= len;
			second.y += len;
		}
		if(rem == 3) {
			second.x -= len;
			second.y -= len;
		}
		rect(first.x, first.y, second.x, second.y);
		line(first.x, first.y, second.x, second.y);
		first.x = second.x;
		first.y = second.y;
	}
}