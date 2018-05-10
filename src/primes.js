function* primes(start=2, primes=[2]) {
  let current = start
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
