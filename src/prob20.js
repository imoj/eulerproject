/**
  * Find the sum of the digits f 100!
  */
const factorial = require('./factorial');

function crossSum(number) {
  if (typeof number === 'number') {
    return number.toString().split('').reduce((sum, digit) =>
      sum + Number.parseInt(digit, 10), 0);
  }
  return number.split('').reduce((sum, digit) =>
    sum + Number.parseInt(digit, 10), 0);
}

const fac = factorial(100);
const result = crossSum(fac);
console.log(result);
