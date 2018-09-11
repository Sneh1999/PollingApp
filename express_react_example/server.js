const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
 var server = app.listen(port);

// create a GET route
var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
    console.log("Connected: %s",socket.id)
})

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});


