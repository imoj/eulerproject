/**
  * Find the 10001 st prime number
  */
primes = require('./primes')
let counter = 0;

for(p of primes()) {
  counter ++
  if(counter === 10001) {
    console.log(p)
    break
  }
}
