let app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

let users = [];
io.on('connection', (socket) => {


    socket.on('test', (username) => {
        if (users.indexOf(username) != -1) {
            let newArray = users.filter((value, index) => {
                if (value == username) {
                    return false;
                }
                return true;
            });
            users = newArray;
        }
        socket.broadcast.emit('chat message', `${username} has disconnected`);
        socket.broadcast.emit('online users', users);
    });

    socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', msg);
        console.log(users);
    });

    socket.on('new user', username => {
        if (users.indexOf(username) == -1) {
            users.push(username);
            console.log(users);
        }
        socket.broadcast.emit('chat message', `User ${username} has joined the channel!`);
        socket.broadcast.emit('online users', users);
    });

    socket.on('isTyping', msg => {
        socket.broadcast.emit('isTyping', msg);
    });
});

http.listen(3000, () => {
    console.log('listening: on *:3000');
});