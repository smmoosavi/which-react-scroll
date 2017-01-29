let fs = require('fs');
let table = require('markdown-table');
let list = require('./pkgs.json');
let pkg2row = require('./pkg2row');

let rows = list.map(pkg2row);
let header = ["npm", "downloads", "github", "stars", "demo"];

let output = table([header, ...rows]);


let readme = fs.readFileSync('README.src.md', "utf-8");
readme = readme.replace('{{ __TABLE__ }}', output);
fs.writeFileSync('../which-react-scroll/README.md', readme);
