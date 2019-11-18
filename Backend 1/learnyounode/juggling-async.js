const http = require('http');

let shortPath = process.argv;

let urls = [shortPath[2],shortPath[3],shortPath[4]];

getData(urls);

async function getData(urls) {

    for(let url of urls) {
        await http.get(url, response => {
            let data ='';
            response.on('data', newData => {
                data += newData;
            });
            response.on('end', () => {
                console.log(
                    data.toString()
                );
            });
        });
    }

}