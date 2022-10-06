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

const init = async () => {
  const contents = await readFile("./txt/in1.txt");
  const contents2 = await readFile("./txt/in2.txt");

  try {
    const contents = await readFile("./txt/in10.txt");
    console.log(contents);
  } catch (error) {
    console.log(error);
  }

  console.log(contents);
  console.log(contents2);

  const contents3 = await readFile("./txt/in4.txt");
  const contents4 = await readFile("./txt/in5.txt");
  return String(contents3) + "\n" + String(contents4);
};

init().then((contents) => console.log(contents));

console.log("init", init());
