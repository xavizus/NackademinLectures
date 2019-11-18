const fs = require('fs');

let content = fs.readFile(process.argv[2], (err,data) => {
    if(err) throw err;
    let lines = ((data.toString()).split('\n')).length;

    console.log(lines-1);
});
