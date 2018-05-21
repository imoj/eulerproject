module.exports = function longAdd(longNumber, factor = 2) {
  let carry = 0;
  const number = (`${longNumber}`).split('');

  for (let index = number.length - 1; index >= 0; index -= 1) {
    let digit = (number[index] * factor) + (carry % 10);
    carry = Math.floor(carry / 10);
    if (digit >= 10) {
      carry += Math.floor(digit / 10);
      digit %= 10;
    }
    number[index] = digit;
  }

  while (carry > 0) {
    number.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return number.join('');
};
