const fs = require('fs');

let path = process.argv[2];

let extension = process.argv[3];

fs.readdir(path,(err,data) => {
    let filtered = data.filter((value)=>{
        if(value.indexOf(`.${extension}`) != -1){
            console.log(value);
            return true;
        }
    });
});