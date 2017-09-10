let fs = require('fs');
let path = require('path');
let masterDir = process.argv[2];
let ext = "." + process.argv[3];

fs.readdir(masterDir, function(err, list) {
    if (!err) {
        let filteredFiles = list.filter(function(fileName) {
            return path.extname(fileName) === ext;
        });
        console.log(filteredFiles.join("\n"));
    }
});