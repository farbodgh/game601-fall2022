let tankImage;
let birdImage;
let invading = true;

class Circle {
	constructor(Xposition, Yposition, size, red, green, blue, velocity) {
		this._Xposition = Xposition;
		this._Yposition = Yposition;
		this._size = size;
		this._red = red;
		this._green = green;
		this._blue = blue;
		this._velocity = velocity;
	}
}

class Tank {
	constructor(Xposition, Yposition, size, velocity) {
		this._Xposition = Xposition;
		this._Yposition = Yposition;
		this._size = size;
		this._velocity = velocity;
	}
}

let xvel = 1;
let yvel = 2;
let numberOfCirlces = 756;
let numberOfTanks = 30;
let Circles = [];
let Tanks = [];

function preload() {
	for (let i = 0; i < numberOfCirlces; i++) {
		Circles[i] = new Circle(random(0, windowWidth - 100), random(0, windowHeight - 100), random(10, 45), random(0, 255), random(0, 255), random(0, 255), random(1, 5));
	}
	for (let i = 0; i < numberOfTanks; i++) {
		Tanks[i] = new Tank(random(0, windowWidth - 50), random(0,windowHeight - 200), 350, random(1, 3));
	}
	tankImage = loadImage("Tank2.png");
	birdImage = loadImage("Bird.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);

	slider = createSlider(0, numberOfCirlces, 2);
	slider.position(windowWidth / 2 + 200, 20);
	slider.style('width', '200px');

	button = createButton('Reverse Velocity');
	button.mousePressed(ReverseVelocity);
	button.position(windowWidth / 2, 0);
	button.style('font-size', '20px');
	button.style('background-color', "#FFCE99");
	button.style('border-radius', '12px');
	button.style('border', '2px solid #783608');

	button = createButton('Stop/ Start War');
	button.mousePressed(StartStopWar);
	button.position(windowWidth / 3, 0);
	button.style('font-size', '20px');
	button.style('background-color', "#FFCE99");
	button.style('border-radius', '12px');
	button.style('border', '2px solid #783608');

}

function draw() {
	background(128, 178, 242);
	numberOfCirlces = slider.value();
	circlemotions();
	MoveTanks();
}

function circlemotions() {

	for (let i = 0; i < numberOfCirlces; i++) {
		if (i % 2 === 0) {
			// print("if");
			Circles[i]._Xposition = Circles[i]._Xposition + Circles[i]._velocity;

			fill(Circles[i]._red, Circles[i]._green, Circles[i]._blue);
			ellipse(Circles[i]._Xposition, Circles[i]._Yposition, Circles[i]._size);
		} else {
			// print("ELSE");

			Circles[i]._Xposition = Circles[i]._Xposition - Circles[i]._velocity;
			Circles[i]._Yposition = Circles[i]._Yposition + Circles[i]._velocity;

			fill(Circles[i]._red, Circles[i]._green, Circles[i]._blue);
			ellipse(Circles[i]._Xposition, Circles[i]._Yposition, Circles[i]._size);
		}
	}
}

function ReverseVelocity() {
	for (let i = 0; i < numberOfCirlces; i++) {
		Circles[i]._velocity *= -1;
	}
	for (let i = 0; i < numberOfTanks; i++) {
		Tanks[i]._velocity *= -1;
	}
}

function MoveTanks() {

	if (invading) {

		for (let i = 0; i < numberOfTanks; i++) {

			Tanks[i]._Xposition = Tanks[i]._Xposition + Tanks[i]._velocity;
			Tanks[i]._Yposition = Tanks[i]._Yposition + Tanks[i]._velocity;
			image(tankImage, Tanks[i]._Xposition, Tanks[i]._Yposition, Tanks[i]._size,Tanks[i]._size);
		}
	} else {
		for (let i = 0; i < numberOfTanks; i++) {
			Tanks[i]._Xposition = Tanks[i]._Xposition + Tanks[i]._velocity;
			Tanks[i]._Yposition = Tanks[i]._Yposition + Tanks[i]._velocity;
			image(birdImage, Tanks[i]._Xposition, Tanks[i]._Yposition, 200,200);
		}
	}
}

function StartStopWar() {
	if (invading)
		invading = false;
	else
		invading = true;
}