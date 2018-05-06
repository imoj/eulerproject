/**
  * Liste alle Primfaktoren auf der Zahlen von 1-20;
  * Wähle jeweils den höchsten Exponenten als Anzahl der Vorkommen.
  */
let primeFactors = [
  2, 3, 2, 5, 7, 2, 3, 11, 13, 2, 17, 19
]


console.log(primeFactors.reduce(
  (acc, curr) => acc*curr, 1
))
