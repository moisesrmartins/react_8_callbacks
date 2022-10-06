const fs = require("fs");

console.log(1);
console.log(2);
console.log(3);

function callback(error, content) {
  console.log(error, content);
}

fs.readFile("./in1.txt", callback);

function callbacks(mistake, contents) {
  console.log(mistake, String(contents));
}

fs.readFile("./in2.txt", callbacks);

function callbacks(mistake, contents) {
  console.log(mistake, String(contents));
}

fs.readFile("./in3.txt", callbacks);
