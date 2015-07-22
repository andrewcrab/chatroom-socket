var http = require("http");
var express = require("express");

var app = express();

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);//To work on c9.io

var io = require("socket.io")(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log(msg)
    io.emit('message',msg);
  });
});



process.on('SIGINT',function(){
    console.log("\nExisted from web server.");
    process.exit();
});


