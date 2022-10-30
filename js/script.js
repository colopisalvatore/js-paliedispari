// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const userInput = document.getElementById('userWord');
const button = document.getElementById('btn');
// on click
button.addEventListener('click', function(){
    // prendo il value in input
    let userValue = userInput.value;
    // applico controllo palindromo
    if(!isNaN(userValue)){
        alert('Inserisci una parola!');
    } else if(palindrome(userValue)){
    document.getElementById("result").innerHTML = userValue + ' ' +  '&egrave; una parola palindroma';
    } else {
    document.getElementById("result").innerHTML = userValue + ' ' + 'non &egrave; una parola palindroma';
    }
    userInput.value = '';
});


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

const btnPlay = document.querySelector('#play');
const evenOdd = document.querySelector('#select');
const selectedNum = document.querySelector('#select-number');
let numValue;

btnPlay.addEventListener('click', function(){
  numValue = parseInt(selectedNum.value);
  const numPc = getRandomNumber(1, 5);
  const result = document.getElementById('result2');
  const gameSum = numPc + numValue;
    console.log(numValue);
    console.log(numPc);
    console.log(gameSum);
  printResult(result);

  function printResult(target){
    target.innerText = isEvenOdd(evenOdd.value, gameSum);
  }
});