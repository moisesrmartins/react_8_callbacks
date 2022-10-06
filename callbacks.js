const fs = require("fs");

console.log(1);
console.log(2);
console.log(3);

fs.readFile("./txt/in1.txt", (one, first) => {
  fs.readFile("./txt/in2.txt", (two, second) => {
    fs.readFile("./txt/in3.txt", (three, third) => {
      fs.readFile("./txt/in4.txt", (four, fourth) => {
        fs.readFile("./txt/in5.txt", (five, fifth) => {
          fs.readFile("./txt/in6.txt", (six, sixth) => {
            fs.readFile("./txt/in7.txt", (seven, seventh) => {
              fs.readFile("./txt/in8.txt", (eight, eighth) => {
                fs.readFile("./txt/in9.txt", (nine, ninth) => {
                  console.log(one, String(first));
                  console.log(two, String(second));
                  console.log(three, String(third));
                  console.log(four, String(fourth));
                  console.log(five, String(fifth));
                  console.log(six, String(sixth));
                  console.log(seven, String(seventh));
                  console.log(eight, String(eighth));
                  console.log(nine, String(ninth));
                });
              });
            });
          });
        });
      });
    });
  });
});
