/**
  * Find the sum of all positive integers which can no be written as
  * the sum of two abundant numbers.
  */

const Sieve = require('./primeSieve');
const Factorizer = require('./factorizer');

const fact = new Factorizer(new Sieve());

const numbers = Array(...Array(28123)).map((x, i) => i + 1);

console.log(numbers);

const abundantNumbers = numbers.filter(x =>
  x < (fact.allFactors(x).reduce((acc, val) => acc + val, 0) - x));

console.log(abundantNumbers);

const abundantSums = new Set();

abundantNumbers.forEach((val1) => {
  abundantNumbers.forEach((val2) => {
    if (val1 + val2 <= 28123) {
      abundantSums.add(val1 + val2);
    }
  });
});

console.log(abundantSums);

const targetNumbers = Array(...(Array(28123))).map((x, i) => i + 1)
  .filter(val => !abundantSums.has(val));

console.log(targetNumbers.reduce((acc, val) => acc + val, 0));
