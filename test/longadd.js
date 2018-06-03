const { expect } = require('chai');
const add = require('../src/longadd');

describe('Long addition', () => {
  it('can add integers', () => {
    expect(add(1, 2)).to.be.equal('3');
  });
});
