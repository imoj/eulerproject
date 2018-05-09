/**
  * Computing primes using Erastothenes sieve technique.
  */
function primeSieve(max, knownPrimes=[2]) {
  let sieve = Array(max+1);
  sieve.fill(false, 0, 2)
  sieve.fill(true, 2)

  let innerIndex = null;
  for(let p of knownPrimes) {
    for(innerIndex=p; innerIndex <= max; innerIndex += p) {
        sieve[innerIndex] = false
    }
  }

  let index = 2;
  while(index <= max) {
    if(sieve[index]) {
      for(innerIndex=2*index; innerIndex <= max; innerIndex += index) {
        sieve[innerIndex] = false
      }
    }
    index ++
  }

  let result = sieve.map((x, i) => {
    if(x) {
      return i
    }
    else  {
      return 0
    }
  }).filter((x) => x > 0)

  return result
}

module.exports = primeSieve
