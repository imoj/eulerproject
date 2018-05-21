/**
  *
  */

module.exports = class Factorizer {
  constructor(sieve) {
    this.sieve = sieve;
  }

  primeFactorize(toFactorize) {
    let number = toFactorize;
    const factors = [];

    // eslint-disable-next-line
    for(let p of this.sieve) {
      while (number % p === 0) {
        number /= p;
        factors.push(p);

        if (number === 1) {
          break;
        }
      }
      if (number === 1) {
        break;
      }
    }
    return factors;
  }

  getExponents(toFactorize) {
    const primeFactors = this.primeFactorize(toFactorize);
    const exponents = {};

    // eslint-disable-next-line
    for(let p of primeFactors) {
      if (exponents[p]) {
        exponents[p] += 1;
      } else {
        exponents[p] = 1;
      }
    }
    return exponents;
  }

  allFactors(toFactorize) {
    const primeFactors = this.primeFactorize(toFactorize);

    const factors = new Set([1]);
    const toAdd = new Set();

    // eslint-disable-next-line
    for(let p of primeFactors) {

      // eslint-disable-next-line
      for(let f of factors) {
        toAdd.add(f * p);
      }

      // eslint-disable-next-line
      for(let f of toAdd) {
        factors.add(f);
      }
      toAdd.clear();
    }
    return Array.from(factors.values());
  }
  countFactors(toFactorize) {
    const factors = this.allFactors(toFactorize);
    return factors.length;
  }
};
