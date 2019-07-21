async function getRandomAdvice() {
  const adviceReq = fetch('https://api.adviceslip.com/advice'); // send request
  const adviceResponse = await adviceReq; // wait until something comes back
  // const jsonString = await adviceResponse.text();
  // return jsonString
  // const adviceData = JSON.parse(jsonString)
  // return jsonString
  const adviceData = await adviceResponse.json(); // parses JSON string into native JavaScript object
  return adviceData.slip.advice;
}

let allAdvice = [];
const adviceEl = document.getElementById('advice');

function updateDOM() {
  adviceEl.innerHTML = '';
  allAdvice.forEach(advice => {
    const adviceItem = document.createElement('li');
    adviceEl.appendChild(adviceItem);
    adviceItem.innerText = advice;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'X';
    adviceItem.appendChild(removeButton);

    removeButton.addEventListener('click', () => deleteAdvice(index));
  });
}

function deleteAdvice(index) {
  allAdvice.splice(index, 1);
  updateDOM();
}
/* function deleteAdvice {
  let howMuchAdvice = allAdvice.length
  if (howMuchAdvice > 10) {
    allAdvice.splice(0, 1);
    updateDOM();
  }
  else {
    console.log("looks fine");
  }
} */

async function setRandomAdvice() {
  allAdvice.push(await getRandomAdvice());
  updateDOM();
}

function upcaseAllAdvice() {
  allAdvice = allAdvice.map(advice => advice.toUpperCase());
  updateDOM();
}

function lowcaseAllAdvice() {
  allAdvice = allAdvice.map(advice => advice.toLowerCase());
  updateDOM();
}

document.getElementById('add-advice').addEventListener('click', setRandomAdvice);

document.getElementById('upcase-everything').addEventListener('click', lowcaseAllAdvice);

document.getElementById('upcase-everything').addEventListener('click', upcaseAllAdvice);
