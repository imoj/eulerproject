/**
  * Finde größtes Palindrom das Produkt zweier 3 stelliger Zahlen ist
  */

function range(min, max=null, step=1) {
  if(max == null) {
    max = min;
    min = 0
  }
  return Array.apply(null, Array(Math.floor((max-min)/Math.abs(step)))).map(
    (x, i) => min + i*step
  )
}
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
