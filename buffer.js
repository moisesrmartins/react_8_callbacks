const fs = require("fs");

function callback(error, content) {
  console.log(error, content);
}

fs.readFile("./txt/in1.txt", callback);

function callbacks(mistake, contents) {
  console.log(mistake, contents);
}

fs.readFile("./txt/in2.txt", callbacks);
fs.readFile("./txt/in3.txt", callbacks);
fs.readFile("./txt/in4.txt", callbacks);
fs.readFile("./txt/in5.txt", callbacks);
fs.readFile("./txt/in6.txt", callbacks);
fs.readFile("./txt/in7.txt", callbacks);
fs.readFile("./txt/in8.txt", callbacks);
fs.readFile("./txt/in9.txt", callbacks);
