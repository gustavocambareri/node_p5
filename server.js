console.log("kakakakakakakkakaka");
// we create our server with express
let express = require("express");

let app = express();

let port = process.env.PORT || 3000;

let server = app.listen(port);

console.log("running server on http://localhost:" + port);

app.use(express.static("public"));

// io is the connection between our server and the single clients
let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);

  newSocket.on("mouseInfo", mouseReceived);

  function mouseReceived(dataReceived) {
    console.log(dataReceived);
    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
