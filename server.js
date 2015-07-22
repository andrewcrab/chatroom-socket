var http = require("http");
var express = require("express");

var app = express();

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);//To work on c9.io

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

process.on('SIGINT',function(){
    console.log("Existed from web server.");
});
