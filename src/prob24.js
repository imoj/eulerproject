/**
 * Find the millionth lexicogrphaic permutation of all digits.
 */

const factorial = require('./factorial');

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let target = 1000000;

const targetDigits = [];

while (target > 0 && digits.length > 0) {
  const permutationsPerDigit = factorial(digits.length - 1);
  let counter = 0;

  while (target - permutationsPerDigit > 0) {
    counter += 1;
    target -= permutationsPerDigit;
  }
  targetDigits.push(digits[counter]);
  digits.splice(counter, 1);
}

console.log(targetDigits.join(''));
