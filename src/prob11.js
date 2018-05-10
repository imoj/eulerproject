/**
  * Find the first triangle number with 500 or more factors
  */

const Factorizer = require('./factorizer');
const PrimeSieve = require('./primeSieve');

function getExponentSum(factors) {
  let product = 1;
  for(let exp of Object.keys(factors)) {
    product *= factors[exp]+1;
  }
  return product;
}
function find_triangle_number_with_500_factors() {
  // Idea is to divide the
  // Triangle number into two T(n) = (n * (n+1)) / 2
  // n and n+1 do not share many (or any???) prime factors
  let factorizer = new Factorizer(new PrimeSieve());
  let currentFactors = 0;
  let nextFactors= getExponentSum(factorizer.getExponents(1));
  let index;
  for(index=1; currentFactors * nextFactors < 500 ; index++) {
    currentFactors = nextFactors;
    nextFactors = factorizer.getExponents(index + 1);
    if(nextFactors[2]) {
      nextFactors[2]--;
    }
    nextFactors = getExponentSum(nextFactors);
  }

  return ((index-1) * (index))/2;
}

console.log(find_triangle_number_with_500_factors());
