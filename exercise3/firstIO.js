let fs = require('fs');

let contents = fs.readFileSync(process.argv[2]).toString();

console.log(contents.split('\n').length - 1);