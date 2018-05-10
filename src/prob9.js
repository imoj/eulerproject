/**
  * Find pythagorean triplet which sums to 1000
  */

let a = 0
let b = 0
let c = 1000
let rest = 0

function isPythagoreanTriplet(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}
let running = true
while(c > 1 && running) {
  b = 1000 - c
  while(b > 0 && running) {
    a = 1000 - c - b
    if(isPythagoreanTriplet(a, b, c) && a > 0) {
      console.log(a * b * c)
      break
    }
    b --
  }
  c --
}
