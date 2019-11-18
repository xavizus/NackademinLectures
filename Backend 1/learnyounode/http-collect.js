const http = require('http');

let url = process.argv[2];

http.get(url, response => {

    let data ='';

    response.on('data', newData => {
        data += newData;
    });

    response.on('end', () => {
        console.log(data.length);
        console.log(data.toString());
    });
})