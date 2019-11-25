let app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', msg);
        console.log('Message: ' + msg);
    });

    socket.on('new user', username => {
        socket.broadcast.emit('chat message', `User ${username} has joined the channel!`);
    });

    socket.on('isTyping', msg => {
        socket.broadcast.emit('isTyping', msg);
    });
});

http.listen(3000, () => {
    console.log('listening: on *:3000');
});