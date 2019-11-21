const fs = require('fs');
const http = require('http');

let port = process.argv[2];

let path = process.argv[3];

http.createServer((req,res)=>{
    let stream = fs.createReadStream(path);
    
    stream.on('open', ()=> {
        stream.pipe(res);
    });
}).listen(port);