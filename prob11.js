/**
  * Find the first triangle number with 500 or more factors
  */


var triangle_iterator = {}
triangle_iterator[Symbol.iterator] = function* () {
  let index = 1
  let current = 1
  while(true) {
    yield current
    current += index++
  }
}

const Factorizer = require('./factorizer')

function find_triangle_number_with_500_factors() {
  let factorizer = new Factorizer(require('./primeSieve'))
  for(let candidate of triangle_iterator) {
    factors = factorizer.factorize(candidate)
    console.log(candidate + ': ' + factors)
    if(factors != null && 
      Math.pow(factors.length, 2) - 1 > 500) {
      return candidate
    }
  }
}

console.log(find_triangle_number_with_500_factors())
