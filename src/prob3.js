/**
  * Finde die Primfaktorisierung einer großen Zahl.
  */
let primes = require('./primes')

let number = 600851475143
for(let p of primes()) {
  if(p === number) {
    break;
  }
  while(number !== p && number % p === 0) {
    number /= p;
  }
}

console.log(number)
