const net = require('net');
let port = process.argv[2];

const server = net.createServer((socket)=> {
    let date = new Date();
    let formatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    socket.write(formatedDate);
    socket.write('\n');
    socket.end();
});

server.listen(port);