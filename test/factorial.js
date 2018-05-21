const { expect } = require('chai');
const factorial = require('../src/factorial');

describe('Factorial', () => {
  it('computes the factoral', () => {
    expect(factorial(3)).to.be.equal('6');
    expect(factorial(20)).to.be.equal('2432902008176640000');
    expect(factorial(21)).to.be.equal('51090942171709440000');
    expect(factorial(22)).to.be.equal('1124000727777607680000');
    expect(factorial(23)).to.be.equal('25852016738884976640000');
    expect(factorial(25)).to.be.equal('15511210043330985984000000');
    expect(factorial(30)).to.be.equal('265252859812191058636308480000000');
    expect(factorial(35)).to.be.equal('10333147966386144929666651337523200000000');
    expect(factorial(50)).to.be
      .equal('30414093201713378043612608166064768844377641568960512000000000000');
  });
});
