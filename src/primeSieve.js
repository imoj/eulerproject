"use strict";
/**
  * Computing primes using Erastothenes sieve technique.
  */
module.exports = class PrimeSieve {
  constructor(max=100000, knownPrimes=[]) {
    this.max = max;
    this.sieve = new Set(
      Array.apply(null, Array(this.max+1)).map((x, i) => i)
    );
    this.sieve.delete(0);
    this.sieve.delete(1);
    for(let p of knownPrimes) {
      for(innerIndex=p*2; innerIndex <= max; innerIndex += p) {
        this.sieve.delete(innerIndex);
      }
    }
  }

  [Symbol.iterator]() {
    return this.primes();
  }

  * primes () {
    let index = 2;

    while(true) {
      if(index === this.max) {
        this.resize(this.max*2);
      }
      if(this.sieve.has(index)) {
        yield index;
        for(let innerRunner = 2*index; innerRunner< this.max;
            innerRunner += index) {
          this.sieve.delete(innerRunner);
        }
      }
      index += 1;
    }
  }

  resize (newSize) {
    console.log("resizing..." + this.max + " to " + newSize);
    let newSieve = new Set();
    for(let i=this.max; i<newSize; i++) {
      newSieve.add(i);
    }

    this.max = newSize;
    for(let prime of this.sieve) {
      for(let innerRunner = 2*prime; innerRunner< this.max;
        innerRunner += prime) {
          this.sieve.delete(innerRunner);
      }
      newSieve.add(prime);
    }
    this.sieve = newSieve;
    console.log("new size..." + this.sieve.size);
  }
};
