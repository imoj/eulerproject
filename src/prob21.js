/**
  * Find the sum of amicable numbers below 10000.
  */
const sumOfDivisors = new Map([]);
const Sieve = require('./primeSieve');
const Factorizer = require('./factorizer');

const fact = new Factorizer(new Sieve());


for (let i = 1; i < 10000; i += 1) {
  sumOfDivisors.set(i, fact.allFactors(i).reduce((sum, x) => sum + x, 0) - i);
}

const amicables = new Set();

sumOfDivisors.forEach((val, key, map) => {
  if (key === map.get(val) && key !== val) {
    amicables.add(val);
    amicables.add(key);
  }
});

console.log(Array.from(amicables.values()).reduce((sum, val) => sum + val, 0));
