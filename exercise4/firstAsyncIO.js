let fs = require('fs');

// function cb (err, data) {
//     if (!err) console.log(data.split("\n").length - 1);
// }

// fs.readFile(process.argv[2], 'utf-8', cb);

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
    if (!err) console.log(data.split("\n").length - 1);
});