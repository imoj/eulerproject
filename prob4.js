/**
  * Finde größtes Palindrom das Produkt zweier 3 stelliger Zahlen ist
  */

let range = require('./range')
let left = range(900, 1000)
let right = range(900, 1000)

let products = left.map(
  (x) => right.map((y) => x*y )
).reduce(
  (acc, current) => acc.concat(current),
  []
)

function isPalindrome(candidate) {
  return ""+candidate === (""+candidate).split('').reverse().join('')
}

let palindromes = products.filter(
  isPalindrome
)

console.log(palindromes)
