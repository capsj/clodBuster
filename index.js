/**
 * Created by nicolas on 26/10/16.
 */

var express = require('express');
var app = express();
app.use(express.static('www'));
app.use(express.static('node_modules'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


app.get('/', function(req, res){
  res.sendFile(path.resolve('www/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


