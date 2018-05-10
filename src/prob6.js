/**
  * Find the difference between the sum of the squares and
  * the square of the sum of the first 100 natural numbers
  */
let hundred = Array.apply(null, Array(100)).map((x, i) => i+1)

function sum(acc, val) {
  return acc+val
}

let sumOfSquares = hundred.map((x)=> x*x).reduce(sum)
let squareOfSum = Math.pow(hundred.reduce(sum), 2)
console.log(squareOfSum - sumOfSquares)
