class Circle {
	constructor(Xposition, Yposition, size, red, green, blue, velocity) {
		this._Xposition = Xposition;
		this._Yposition = Yposition;
		this._size = size;
		this._red = red;
		this._green = green;
		this._blue = blue;
	}
}
let distance;
// class Collider {
// 	constructor(Xposition, Yposition, radius) {
// 		this._Xposition = Xposition;
// 		this._Yposition = Yposition;
// 		this._radius = radius;
// 	}
//}
let Bullets = [];
class Bullet {
	constructor(Xposition, Yposition, velocity, size) {
		this._Xposition = Xposition;
		this._Yposition = Yposition;
		this._velocity = velocity;
		this._size = size;
	}
	
}

let rate = .3;
let angle = .1;
let isMoving = true;
let = radius = 30;




function setup() {
	createCanvas(windowWidth, windowHeight);
//	Collider = new Collider(windowWidth / 2, 200)

	Circle = new Circle(windowWidth/2, windowHeight/2, random(100, 200), random(0, 255), random(0, 255), random(0, 255), random(1, 5));

}

function draw() {
	background(167, 190, 219);
	fill(221, 0, 100);
	textSize(16);
	text("Click to Shoot at circle to stop or restart its movement!", width/2-170,80);
	
	BulletsMoving();
	CollisionDetection();
	if (isMoving) {
		angle += rate;
		Circle._Xposition += radius * cos(angle);
		Circle._Yposition += radius * sin(angle);
	}
	fill(Circle._red, Circle._green, Circle._blue);
	ellipse(Circle._Xposition, Circle._Yposition, Circle._size);
}

function mousePressed() {
	let tmpBullet = new Bullet(mouseX, mouseY, 10, 16);
	Bullets.push(tmpBullet);
}

function BulletsMoving()
{
	for(let i = 0; i < Bullets.length; i++)
	{
		Bullets[i]._Xposition += Bullets[i]._velocity;
		Bullets[i]._YPosition -= Bullets[i]._velocity;
	  fill(45,45,45);
	  ellipse(Bullets[i]._Xposition, Bullets[i]._Yposition, Bullets[i]._size);
		
		if(Bullets[i]._Xposition > windowWidth | Bullets[i]._YPosition < 0)
			Bullets.splice(i,1);
	}
}

function CollisionDetection()
{
	for(let i = 0; i < Bullets.length; i++)
	{
		
		distance = dist(Bullets[i]._Xposition,Bullets[i]._Yposition, Circle._Xposition, Circle._Yposition);
		print(distance);
		
		if(distance < 150)
		{
			StopMove();
			Bullets.splice(i,1);
			Circle._red = random (0,255);
			Circle._green = random (0,255);
			Circle._blue = random (0,255);
		}
	}
}

function StopMove()
{
	if(isMoving)
		isMoving = false;
	else
		isMoving = true;
}



