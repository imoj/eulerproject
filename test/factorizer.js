
const expect = require('chai').expect;
const Factorizer = require('../src/factorizer');
const PrimeSieve = require('../src/primeSieve');

describe('Factorizer', () => {
  let fact = new Factorizer(new PrimeSieve());
  it('Should prime factorize 2 to just 2', () => {
    let factors = fact.primeFactorize(2);
    expect(factors).be.deep.equal([2]);
  });
  it('Should prime factorize 4 to 2, 2', () => {
    let factors = fact.primeFactorize(4);
    expect(factors).be.deep.equal([2, 2]);
  });
  it('Should prime factorize 10 to 2, 5', () => {
    let factors = fact.primeFactorize(10);
    expect(factors).to.be.deep.equal([2, 5]);
  });

  it('Should give the number of Factors of 1 as 1', () => {
    let factors = fact.countFactors(1);
    expect(factors).to.be.equal(1);
  });
  it('Should return an array factors for 28', () =>{
    let factors = fact.allFactors(28);
    expect(factors).to.be.deep.equal([1, 2, 4, 7, 14, 28]);
  });
  it('Should return an array factors for 100', () =>{
    let factors = fact.allFactors(100);
    expect(factors).to.be.deep.equal([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });
  it('Should return an array factors for 28', () =>{
    let factors = fact.allFactors(18);
    expect(factors).to.be.deep.equal([1, 2, 3, 6, 9, 18]);
  });
  it('Should give the number of factors of 28 as 6', () => {
    let factors = fact.countFactors(28);
    expect(factors).to.be.equal(6);
  });
  it('Should give the number of Factors of 2 as 2', () => {
    let factors = fact.countFactors(2);
    expect(factors).to.be.equal(2);
  });
  it('Should give the number of Factors of 4 as 3', () => {
    let factors = fact.countFactors(2);
    expect(factors).to.be.equal(2);
  });
  it('Should give a list of factors for 5984', () => {
    let f3 = fact.allFactors(5985);
    let f2 = fact.allFactors(5984);
    expect(f3.length).to.equal(24);
    expect(f2.length).to.equal(24);
  });

  describe('getExponents', () => {
    it ('should return {} for the number 1', () => {
      let exponents = fact.getExponents(1);
      expect(exponents).to.be.deep.equal({});
    });
    it ('should return {2:1} for the number 2', () => {
      let exponents = fact.getExponents(2);
      expect(exponents).to.be.deep.equal({2: 1});
    });
    it ('should return {2:2} for the number 4', () => {
      let exponents = fact.getExponents(4);
      expect(exponents).to.be.deep.equal({2: 2});
    });
    it ('should return {2:1, 3:1} for the number 6', () => {
      let exponents = fact.getExponents(6);
      expect(exponents).to.be.deep.equal({2: 1, 3: 1});
    });
  });
});
