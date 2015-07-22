var http = require("http");
var express = require("express");

var app = express();

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);//To work on c9.io

app.get('/', function(req, res){
    res.send("<h1>Hello world!</h1>");
})

