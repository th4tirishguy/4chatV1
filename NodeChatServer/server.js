var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var currentUsers = 0;

io.on('connection', function(socket) {
	console.log('A user connected to the chat');
	currentUsers += 1;
	io.emit('update user count', currentUsers);

	socket.on('disconnect', function() {
		console.log('A user disconnected from the chat');
		currentUsers -= 1;
		io.emit('update user count', currentUsers);
	});
	socket.on('chat message', function(msg) {
		io.emit('chat message', {message: msg.Message, lat: msg.Lat, lng: msg.Lng});
		console.log('Message: ' + msg.Message + ' ' + msg.Lat + ' ' + msg.Lng);
	});
});

http.listen(3000, function() {
	console.log('Listening on port: 3000');
});