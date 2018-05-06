/**
  * Finde die Summe der geraden Fibonacci Zahlen unter 4.000.000
  */

let fibonacci = {}
fibonacci[Symbol.iterator] = function* () {
  let lower = 0
  let higher = 1
  while(higher < this.limit) {
    yield higher
    let temp = higher
    higher = lower+higher
    lower = temp
  }
}
fibonacci.limit = 4000000


let result = Array.from(fibonacci).filter(
  (x) => x % 2 === 0
).reduce(
  (acc, curr) => acc + curr
)


console.log(result)
