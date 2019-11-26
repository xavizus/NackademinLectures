const net = require('net');
let port = 25566;
let address = 'minecraft2.xavizus.com';

const client = net.connect(port, address, () => {
    let handshake = Buffer.from([0x00, 0x04]);
    let serverAddressLenght = Buffer.from(String.fromCharCode(address.length));
    let serverAddress = Buffer.from(address);
    let portNumber = Buffer.from((25566).toString(16), 'hex');
    console.log(portNumber);
    let statusRequest = Buffer.from([0x01]);
    let settings = [handshake, serverAddressLenght, serverAddress, portNumber, statusRequest];
    let buff = Buffer.concat(settings);
    console.log(buff);
    client.write(buff);
});

client.setTimeout(5 * 1000);

client.on('data', (data) => {
    if (data != null && data != ``) {
        let something = data.toString().split('\x00\x00\x00');
        console.log(something[2].replace(/\u0000/g, ''));
    } else {
        console.log(data);
    }


    client.end();
});

client.on('timeout', () => {
    console.log("timedOut");
    client.end();
    process.exit();
})

client.on('error', (err) => {
    console.log(err);
});