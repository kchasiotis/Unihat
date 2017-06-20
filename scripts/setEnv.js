let fs = require('fs');

console.log((process.argv[2] + ' mode').toUpperCase());

let arg = process.argv[2];

fs.createReadStream('./environment/' + arg + '.js').pipe(fs.createWriteStream('./environment/index.js'));