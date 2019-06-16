'use strict';

function doubleOddNumbers(numbers) {
  return numbers.map(number => (number % 2 !== 0 ? number * 2 : number));
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
