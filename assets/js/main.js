/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* calcolare i numeri casuali */
const numbers = randomNumbers(5);
/* visualizzare i numeri casuali (dopo 30 secondi scompaiono) */
// setTimeout(printArraySplitted, 3000);
printArraySplitted(numbers, "div", "number_container");
// aggiungo style "hidden"
addStyle(".number_container");
/* l'utente inserisce i numeri che ha visualizzato in precedenza */

/* verificare quanti e quali numeri l'utente riscordava */

/* visualizzare il risultato */

//functions
function randomNumbers(n) {
  const numbers = [];
  while (numbers.length < n) {
    const rndnumber = Math.ceil(Math.random() * 100);
    console.log(rndnumber);
    numbers.push(rndnumber);
  }
  console.log(numbers);
  return numbers;
}

function printArraySplitted(array, tagName, className) {
  // stampo ogni numero in un contenitore
  for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    const containerElement = document.querySelector(".container");
    const newElement = `<${tagName} class="${className}">${arrayElement}</${tagName}>`;
    // console.log(newElement);
    containerElement.insertAdjacentHTML("afterbegin", newElement);
    // const newElement = document.querySelectorAll(".array_element");
    // console.log(newElement);
    /* newElement.innerHTML = arrayElement; */
  }
}

function addStyle(selector) {
  const elements = document.querySelectorAll(selector);
  console.log(elements);
}
