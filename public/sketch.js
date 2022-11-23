function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("black");
  background(220);
  circle(mouseX, mouseY, 30);
  circle(mouseX + 30, mouseY, 30);
  circle(mouseX - 30, mouseY, 30);
  circle(mouseX - 60, mouseY, 30);
}
