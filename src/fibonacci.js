
const fibonacci = {};

fibonacci.plus = (x, y) => x + y;

fibonacci.stop = val => val >= 1000;

fibonacci[Symbol.iterator] = function* itertor() {
  if (typeof this.stop !== 'function') {
    throw new Error('Stop criteria required.');
  }

  let lower = 0;
  let higher = 1;
  let index = 1;
  let temp;
  while (!this.stop(higher, index)) {
    yield higher;
    temp = higher;
    higher = this.plus(lower, higher);
    lower = temp;
    index += 1;
  }
};

module.exports = fibonacci;
