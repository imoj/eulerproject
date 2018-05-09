/**
  *
  */

class Factorizer {
  constructor (primes) {
    this.primesGenerator = primes
    this.primes = [2]
  }

  factorize(toFactorize) {

    let number = toFactorize
    if(toFactorize >= this.primes[this.primes.length-1]) {
      this.primes = this.primesGenerator(
        toFactorize * 10, this.primes
      );
    }
    let factors = []

    for(let p of this.primes) {
      while(number % p === 0) {
        number /= p
        factors.push(p)

        if(number === 1) {
          break
        }
      }
      if(number === 1) {
        break
      }
    }
    return factors
  }
}


module.exports = Factorizer
