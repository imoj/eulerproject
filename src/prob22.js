/**
  * Read a file with names, sorth them, calculate the 'alphabetical value' of
  * the names, multiply by the position and sum up the resulting array
  */


const fs = require('fs');
const path = require('path');

const letterValues = new Map([
  ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7],
  ['h', 8], ['i', 9], ['j', 10], ['k', 11], ['l', 12], ['m', 13],
  ['n', 14], ['o', 15], ['p', 16], ['q', 17], ['r', 18], ['s', 19],
  ['t', 20], ['u', 21], ['v', 22], ['w', 23], ['x', 24],
  ['y', 25], ['z', 26],
]);

fs.readFile(path.join(__dirname, '../data/p022_names.txt'), {
  encoding: 'utf-8',
}, (err, data) => {
  let names = [...data].join('');
  names = names.split(',').map(name => name.replace(/"/g, ''));
  names = names.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  names = names.map(name =>
    name.split('').reduce((sum, letter) =>
      sum + letterValues.get(letter.toLowerCase()), 0));
  console.log(names.map((x, i) => x * (1 + i)).reduce((sum, val) => sum + val, 0));
});
