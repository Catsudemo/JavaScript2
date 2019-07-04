const myNumbers = [1, 2, 3, 4];

function doubleOdd(numbers) {
  return numbers.map(number => (number % 2 !== 0 ? number * 2 : number));
}
console.log(doubleOdd(myNumbers));
