'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  function makeNumbers {
    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      numbers.push(i);
    }
  }

  function sayThree(number) {
    const isThree = (numbers = > (number % 3 == 0 ? threeCallback : number))
    return isThree
    
    //}

    function sayFive(number) {
    // Replace this comment and the next line with your code
    console.log(number);
  }
}
//threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
