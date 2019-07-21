'use strict';

function sayThree() {
  return 'It is three';
}

function sayFive() {
  return 'It is five';
}

function threeFive(startIndex, stopIndex, threeCallback = sayThree, fiveCallback = sayFive) {
  function makeNumbers(startNum, endNum) {
    const numbers = [];
    for (let i = startNum; i <= endNum; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  const numberArr = makeNumbers(startIndex, stopIndex);

  return numberArr.map(eachNum => {
    if (eachNum % 3 === 0 && eachNum % 5 === 0) {
      return threeCallback(eachNum) + fiveCallback(eachNum);
    }
    if (eachNum % 3 === 0) {
      return threeCallback(eachNum);
    }
    if (eachNum % 5 === 0) {
      return fiveCallback(eachNum);
    }
    return eachNum;
  });
}

threeFive(1, 15, sayThree, sayFive);
threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
