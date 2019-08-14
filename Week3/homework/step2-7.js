
'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// The first function refers to a variable that has an integer value. When the function is run, it only takes the integer, it does not change the variable.
// The second function refers to an object. This has a position in the memory. When the function is run it updates the value in the object.
