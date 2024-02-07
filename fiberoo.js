var _ = require('underscore');

let firstnum = 0;
let secondnum = 1;

function fib() {
  const arrayfib = [firstnum];
  for (let i = 0; i < 50; i++) {
    const temp = secondnum;
    secondnum = firstnum + secondnum;
    firstnum = temp;
    arrayfib.push(temp);
  }
  return arrayfib;
}

console.log(fib());

function numsToStrings(data) {
  return _.map(data, num => `${num}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(data) {
  return _.filter(data, function (num) { return num % 2 === 0; }).length;
}

console.log(numEvenNums(fib()));
