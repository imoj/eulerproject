/**
  * Find the sum of all numbers divisible by 3 or 5 below 1000
  */

let numbers = Array.apply(null, Array(1000)).map(
  (x, i) => i
)

let divisibles = numbers.filter(
  (x) => x % 3 === 0 || x % 5 === 0
)

//console.log(numbers)
console.log(divisibles.reduce(
    (acc, current) => acc + current
  )
)
