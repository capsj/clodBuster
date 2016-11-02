/**
 * Created by nicolas on 26/10/16.
 */

/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('' ), //url con js
  socket = require(''); //url de socket.js;
var app = module.exports = express().createServer();

//Hook socket into express
var io = require('socket.io').listen(app);



app.use(express.static('www'));
app.use(express.static('node_modules'));
var http = require('http').Server(app);

var path = require('path');


app.get('/', function(req, res){
  res.sendFile(path.resolve('www/index.html'));
});

// socket.io communication
io.on('connection', socket);

http.listen(3000, function(){
  console.log('listening on *:3000');
});


