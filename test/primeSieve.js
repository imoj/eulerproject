

const expect = require('chai').expect;
const PrimeSieve = require('../src/primeSieve');


describe('PrimeSieve', () => {
  it('should give a sequence of primes', () => {
    let sieve = new PrimeSieve(100);
    let computed = [];
    for(let p of sieve) {
      computed.push(p);
      if(computed.length === 11) {
        break;
      }
    }
    expect(computed).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  });
});
