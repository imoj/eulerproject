/**
  * Sum of all prims below 10**6
  */

let primes = require('./primeSieve')(2000000)

let sum = primes.reduce((acc, val) => acc+val)

console.log(sum)
