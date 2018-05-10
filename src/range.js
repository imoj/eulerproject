function range(min, max=null, step=1) {
  if(max == null) {
    max = min;
    min = 0
  }
  return Array.apply(null, Array(Math.floor((max-min)/Math.abs(step)))).map(
    (x, i) => min + i*step
  )
}

module.exports = range
