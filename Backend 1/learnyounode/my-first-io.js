const fs = require('fs');
let path = process.argv[2];
let content = (fs.readFileSync(path)).toString();
let array = content.split('\n');

console.log((array.length)-1);