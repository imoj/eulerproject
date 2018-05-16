/**
  * Find the combined length of all letters of the numbers 1 to 1000
  * while ignoring whitespaces
  */
const digitMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};


const tennerMap = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const tenToTwentyMap = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const numberToWord = (number) => {
  let num = number;
  let result = '';
  if (number >= 1000) {
    result += `${digitMap[Math.floor(num / 1000)]} thousand`;
    num %= 1000;
  }

  if (number >= 100) {
    result += `${digitMap[Math.floor(num / 100)]} hundred`;
    num %= 100;
  }

  if (result !== '' && num !== 0) {
    result += ' and';
  }

  if (num > 10 && num < 20) {
    if (result !== '') {
      result += ' ';
    }
    result += tenToTwentyMap[num];
  } else if (num > 0) {
    if (num >= 20 || num === 10) {
      if (result !== '') {
        result += ' ';
      }
      result += tennerMap[Math.floor(num / 10)];
      num %= 10;
    }
    if (result !== '' && num > 0) {
      result += ' ';
    }
    if (num > 0) {
      result += digitMap[num];
    }
  }
  return result;
};


const range = Array(...Array(1000)).map((x, i) => i + 1);

const numbers = range.map(numberToWord);
const letters = numbers.map(num => num.replace(/\s/g, ''));

console.log(letters.reduce((acc, val) => acc + val.length, 0));
