/**
 * Find the first fibonacci number with 1000 digits
 */


const fibonacci = require('./fibonacci');


const limit = x => x.length >= 1000;
fibonacci.stop = limit;

fibonacci.plus = require('./longadd');

const fibs = Array.from(fibonacci);

/* eslint-disable-next-line no-console */
console.log(fibs.length + 1);

