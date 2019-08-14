
'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  console.log('repeatStringNumTimesWithFor');
  // eslint-disable-next-line prefer-const
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(str, num, result);

  return result;
}

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  console.log('repeatStringNumTimesWithWhile');
  // eslint-disable-next-line prefer-const
  let result = '';
  let i = 0;
  while (i < num) {
    result += str;
    i++;
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  console.log('repeatStringNumTimesWithDoWhile');
  // eslint-disable-next-line prefer-const
  if (num <= 0) return '';
  let result = '';
  let i = 0;
  do {
    result += str;
    i++;
  } while (i < num);

  // Replace this comment and the next line with your code
  console.log(`string is ${str} number is ${num} result is ${result})`);

  return result;
}

// Do not change or remove anything below this line//

module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
