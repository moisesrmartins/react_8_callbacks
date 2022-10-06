const fs = require("fs");

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

readFile("./txt/in1.txt")
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in2.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in3.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in4.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in5.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in6.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in7.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in8.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
    return readFile("./txt/in9.txt");
  })
  .then((contents) => {
    console.log(contents);
    console.log(String(contents));
  });
