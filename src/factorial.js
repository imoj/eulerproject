const mult = require('./longmultiply');

module.exports = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return mult(factorial(n - 1), n);
};
