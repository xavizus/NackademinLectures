module.exports = function (path, extension, callback) {

    const fs = require('fs');
    fs.readdir(path,(err,data) => {
        if(err) {return callback(err)}
        let filtered = data.filter((value)=>{
            if(value.indexOf(`.${extension}`) != -1){
                console.log(value);
                return true;
            }
        });

        return callback(null, filtered);
    });



};