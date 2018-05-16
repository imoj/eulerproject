"use strict";

var distances = [1, 1];
const collatzSeqLength = (n) => {
  let seqItem = n;
  let stack = [];
  while(!distances[seqItem]) {
    stack.push(seqItem);
    seqItem = collatzValue(seqItem);
  }
  let dist = distances[seqItem];
  let elem;
  while(elem = stack.pop()) {
    dist ++;
    distances[elem] = dist;
  }
};

const collatzValue = (n) => n % 2 === 0 ? n/2 : 3*n+1;


for(let index = 2; index < 1000000; index++) {
  if(!distances[index]) {
    collatzSeqLength(index);
  }
}

let max = 0;
let maxIndex = 0;

for(let i=1; i<=1000000; i++) {
  if(distances[i] && distances[i] > max) {
    max = distances[i];
    maxIndex = i;
  }
}
console.log(maxIndex);
