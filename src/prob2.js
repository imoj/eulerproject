/**
  * Finde die Summe der geraden Fibonacci Zahlen unter 4.000.000
  */


const fibonacci = require('./fibonacci');

fibonacci.limit = val => val > 4000000;


const result = Array.from(fibonacci).filter(x => x % 2 === 0)
  .reduce((acc, curr) => acc + curr);


console.log(result);
