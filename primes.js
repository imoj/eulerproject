function* primes() {
  let primes = [2]
  yield 2;
  let current = 3
  while(true) {
    while(primes.filter((x) => current % x === 0).length > 0) {
      current ++
    }
    primes.push(current)
    yield current
    current ++
  }
}

module.exports = primes
