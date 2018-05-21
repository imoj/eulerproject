const { expect } = require('chai');
const mult = require('../src/longmultiply');

describe('Long Mulitplication', () => {
  it('can multiply integers', () => {
    expect(mult(2, 3)).to.be.equal('6');
    expect(mult(2, 12)).to.be.equal('24');
    expect(mult(2, 100)).to.be.equal('200');
    expect(mult(10, 100)).to.be.equal('1000');
    expect(mult(12, 100)).to.be.equal('1200');
    expect(mult(999, 999)).to.be.equal('998001');
    expect(mult(11, 11111)).to.be.equal('122221');
    expect(mult(10001, 99)).to.be.equal('990099');

    const fact10 = mult(mult(
      mult(mult(2, 3), mult(4, 5)),
      mult(mult(6, 7), mult(8, 9)),
    ), 10);
    const realFact10 = '3628800';
    expect(fact10).to.be.equal(realFact10);
    expect(mult(fact10, 11)).to.be.equal((
      Number.parseInt(realFact10, 10) * 11)
      .toString());

    expect(mult(999, 123)).to.be.equal('122877');
    expect(mult(123, 999)).to.be.equal('122877');
  });
  it('can multiply long numbers encoded as string', () => {
    expect(mult('1124000727777607680000', 23)).to.be
      .equal('25852016738884976640000');
  });
});
