//create client connection to socket
let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

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
