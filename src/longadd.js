module.exports = function longAddition(summand1, summand2) {
  let carry = 0;
  const number1 = (`${summand1}`).split('').reverse();
  const number2 = (`${summand2}`).split('').reverse();
  const maxIndex = Math.max(number1.length, number2.length);
  const result = [];
  for (let index = 0; index < maxIndex; index += 1) {
    let digit = Number.parseInt(number1[index] || 0, 10) +
      Number.parseInt(number2[index] || 0, 10) + carry;
    carry = Math.floor(carry / 10);
    if (digit >= 10) {
      carry += Math.floor(digit / 10);
      digit %= 10;
    }
    result[index] = digit;
  }
  while (carry > 0) {
    result.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return result.reverse().join('');
}
