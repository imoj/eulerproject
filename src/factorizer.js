/**
  *
  */

function factorial(n) {
  if(n <= 1) {
    return 1;
  }
  return n*factorial(n-1);
}

module.exports = class Factorizer {
  constructor (sieve) {
    this.sieve = sieve;
  }

  primeFactorize(toFactorize) {
    let number = toFactorize;
    let factors = [];

    for(let p of this.sieve) {
      while(number % p === 0) {
        number /= p;
        factors.push(p);

        if(number === 1) {
          break;
        }
      }
      if(number === 1) {
        break;
      }
    }
    return factors;
  }

  getExponents (toFactorize) {
    let primeFactors = this.primeFactorize(toFactorize);
    let exponents = {};
    for(let p of primeFactors) {
      if(exponents[p]) {
        exponents[p] += 1;
      }
      else {
        exponents[p] = 1;
      }
    }
    return exponents;
  }

  allFactors(toFactorize) {
    let primeFactors = this.primeFactorize(toFactorize);

    let factors = new Set([1]);
    let toAdd = new Set();
    for(let p of primeFactors) {
      for(let f of factors) {
        toAdd.add(f*p);
      }

      for(let f of toAdd) {
        factors.add(f);
      }
      toAdd.clear();
    }
    return Array.from(factors.values());
  }

  countFactors(toFactorize) {
    let factors = this.allFactors(toFactorize);
    return factors.length;
  }
};
