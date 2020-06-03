var x=50;
var speed=10;
var y=350;
var speed2=10
var w=50;
var speed3=10
var z=350;
var speed4=10;
function setup() {
  createCanvas(400, 400);
}
function draw() {
 background(0);
  
  stroke(255);
  strokeWeight(5);
  fill("yellow");
  ellipse(200, z, 100, 100);
  
  if (z > 350) {
    speed4 = -10
  }
   
  if (z < 50) {
   speed4 = 10
  }

  stroke(255);
  strokeWeight(5);
  fill("green");
  ellipse(200, w, 100, 100);
  
  if (w > 350) {
    speed3 = -10
  }
  if (w < 50) {
    speed3 = 10
  }
  
  stroke(255);
  strokeWeight(5);
  fill("blue");
  ellipse(y, 200, 100, 100);
  
  if (y > 350) {
    speed2 = -10
  } if (y < 50) {
    speed2 = 10
  }
  
  stroke(255);
  strokeWeight(5);
  fill("red");
  ellipse(x, 200, 100, 100);
  
  if (x > 350) {
  speed = -10
  }
  
  if (x < 50) {
    speed = 10
  }

  x = x + speed;
  y = y + speed2;
  w = w + speed3;
  z = z + speed4;
}
