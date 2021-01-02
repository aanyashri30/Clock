function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  let h = hour();
text('Time Now:\n' + h, 5, 50);

let m = minute();
text('Time Now: \n' + m, 5, 50);

let s = second();
text('Time Now: \n' + s, 5, 50);

  let c = map(mouseX, 0, width, 0, 175);
  //Scale the mouseX value from 0 to 720 to a range between 40 and 300
  h = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, h, h);

  angleMode(DEGREES);

  scAngle = map(s, 0, 60, 0, 360);

  drawSprites();
}