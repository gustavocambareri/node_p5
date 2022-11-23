//create client connection to socket
let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse);

function otherMouse(dataReceived) {
  fill("red");
  circle(dataReceived.x, dataReceived.y, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
  };

  clientSocket.emit("mouseInfo", message);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("black");

  circle(mouseX, mouseY, 30);
  circle(mouseX + 30, mouseY, 30);
  circle(mouseX - 30, mouseY, 30);
  circle(mouseX - 60, mouseY, 30);
}
