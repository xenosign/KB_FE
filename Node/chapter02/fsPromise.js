const fs = require('fs').promises;

fs.readFile('./readme1.txt')
  .then(function (data) {
    console.log(data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log(data.toString());
    return fs.readFile('./readme3.txt');
  })
  .then((data) => {
    console.log(data.toString());
    return fs.readFile('./readme4.txt');
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch(function (err) {
    console.log(err);
  });
