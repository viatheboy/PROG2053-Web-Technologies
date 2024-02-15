const path = require("path");
let myPath = '/home/user/dir/file.txt';

console.log(path.basename(myPath)); // file.txt
console.log(path.dirname(myPath));  // /home/user/dir
console.log(path.extname(myPath));  // .txt
console.log(path.isAbsolute(myPath));   // true
console.log(path.parse(myPath));    // root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file'

