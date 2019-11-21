const http = require('http');

let port = process.argv[2];

http.createServer((req,res)=> {
    if(req.method == 'POST') {

        let body = '';
        req.on('data', (data)=> {
            body += data;
        });

        req.on('end', ()=> {
            res.end(body.toLocaleUpperCase());

        });
    }
}).listen(port);