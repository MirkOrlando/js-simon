/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* calcolare i numeri casuali */
const numbers = createRandomNumbers(5);
/* visualizzare i numeri casuali (dopo 30 secondi scompaiono) */
const timeToDisappear = setTimeout(addInvisibility, 30000);
printArraySplitted(numbers, "div", "number_container");
/* l'utente inserisce i numeri che ha visualizzato in precedenza e li stampo a video */
const askNumbers = setTimeout(typeAndPrintUserNumbers, 30500);
/* verificare quanti e quali numeri l'utente ricordava */
/* visualizzare il risultato */
const gameOver = setTimeout(readResults, 31000);

//functions
function readResults() {
  const rndNumbers = document.querySelectorAll(".number_container");
  const userNumbers = document.querySelectorAll(".user_number");
  const firstRndNumber = document.querySelector(".number_container");
  const firstUserNumber = document.querySelector(".user_number");
  let totalPoints = 0;
  firstRndNumber.insertAdjacentHTML("beforebegin", `<h1>Random Numbers</h1>`);
  firstUserNumber.insertAdjacentHTML("beforebegin", `<h1>User Numbers</h1>`);
  const containerElement = document.querySelector(".container");
  for (let i = 0; i < rndNumbers.length; i++) {
    const rndNumber = rndNumbers[i];
    rndNumber.classList.remove("invisible");
    for (let i = 0; i < userNumbers.length; i++) {
      const userNumber = userNumbers[i];
      if (userNumber.innerHTML === rndNumber.innerHTML) {
        userNumber.classList.add("checked");
        rndNumber.classList.add("checked");
        ++totalPoints;
      }
    }
  }
  setTimeout(FuncAlert, 500);
  function FuncAlert() {
    alert(`Punteggio: ${totalPoints}/5`);
  }
  containerElement.insertAdjacentHTML(
    "beforeend",
    `<h3>Punteggio: ${totalPoints}/5</h3>`
  );
}

function typeAndPrintUserNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const number = parseInt(prompt("type a number (from 0 to 100"));
    numbers.push(number);
  }
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    const number = numbers[i];
    const containerElement = document.querySelector(".container");
    const newElement = `<div class="user_number">${number}</div>`;
    // console.log(newElement);
    containerElement.insertAdjacentHTML("beforeend", newElement);
  }
}

function addInvisibility() {
  const elements = document.querySelectorAll(".number_container");
  // console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    // console.log(element);
    // console.log(i);
    element.classList.add("invisible");
    // console.log(element);
  }
}

function printArraySplitted(array, tagName, className) {
  // stampo ogni numero in un contenitore
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    const arrayElement = array[i];
    const containerElement = document.querySelector(".container");
    const newElement = `<${tagName} class="${className}">${arrayElement}</${tagName}>`;
    // console.log(newElement);
    containerElement.insertAdjacentHTML("beforeend", newElement);
    // const newElement = document.querySelectorAll(".array_element");
    // console.log(newElement);
    /* newElement.innerHTML = arrayElement; */
  }
}

function createRandomNumbers(n) {
  const numbers = [];
  while (numbers.length < n) {
    const rndnumber = Math.ceil(Math.random() * 100);
    // console.log(rndnumber);
    if (!numbers.includes(rndnumber)) {
      numbers.push(rndnumber);
    }
  }
  // console.log(numbers);
  return numbers;
}
