"use strict";
/**
  * Find the sum of
  */
const longmultiply = require('./multiply');

let number = "2";
// Start from 1 since number is already 2**1
for(let index=1; index< 1000; index++) {
  number = multiply(number, 2);
}

let sum = number.split('').reduce((acc, val) => acc+Number.parseInt(val), 0);

console.log(sum);
