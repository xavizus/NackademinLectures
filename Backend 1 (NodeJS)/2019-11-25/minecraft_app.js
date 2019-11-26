const net = require('net');
let port = 25566;
let address = 'minecraft2.xavizus.com';
let completeData = "";

const client = net.connect(port, address, () => {
    /**
     * https://wiki.vg/Protocol#Packet_format
     * Packet format:
     *  Packet lenght (lenght of the data and lenght of the package id together)
     *  Packet ID
     *  Data
     */

    //https://wiki.vg/Protocol#Handshake

    //  Pack packet ID 0x00, with protocol Version
    let handshake = Buffer.from([0x00, 0x04]);

    //Pack length of server address.
    let serverAddressLenght = Buffer.from(String.fromCharCode(address.length));

    //Pack server address
    let serverAddress = Buffer.from(address);

    // pack port number
    let portNumber = Buffer.from((25566).toString(16), 'hex');

    // pack Next State (0x01 for status)
    let statusRequest = Buffer.from([0x01]);

    // Comapct the buffer to an array
    let settings = [handshake, serverAddressLenght, serverAddress, portNumber, statusRequest];

    // merge all buffers to one big buffer.
    let buff = Buffer.concat(settings);

    // get length of the buffer.
    let buffLength = Buffer.from((buff.length).toString(16), 'hex');

    // finally, pack the buff lengths, with the complete buffer.
    buff = Buffer.concat([buffLength,buff]);

    // Write the buffer to server.
    client.write(buff);

    // Lastly we need to send a pong message (0x01) and a payload
    let emptyPackage = Buffer.from([0x01, 0x00]);

    client.write(emptyPackage);
});

client.setTimeout(5 * 1000);

client.on('data', (data) => {
    completeData+= data;
    client.end();
});

client.on('end', ()=> {

    let jsonData =JSON.parse(completeData.slice(5,completeData.length));
    console.log(jsonData);
});

client.on('timeout', () => {
    console.log("timedOut");
    client.end();
    process.exit();
})

client.on('error', (err) => {
    console.log(err);
});