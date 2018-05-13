"use strict";

module.exports = function (longNumber, factor) {
  let carry = 0;
  longNumber = (""+longNumber).split('');

  for(let index=longNumber.length-1; index >= 0; index--) {
    let digit = longNumber[index] * 2 + carry;
    carry = 0;
    if(digit >= 10) {
      carry = Math.floor(digit / 10);
      digit = digit % 10;
    }
    longNumber[index] = digit;
  }
  if(carry > 0) {
    longNumber.unshift(carry);
  }
  return longNumber.join("");
};
