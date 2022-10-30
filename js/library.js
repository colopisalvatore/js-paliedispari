//Genera un numero Random
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Ritorna TRUE se è un numero pari, altrimenti FALSE
function isEvenOdd (inputValue, sum){
  if (inputValue == 'odd' && (sum % 2)){
    return 'Hai Vinto';
  }
  return 'Riprova!'
}

// Controlla se una parola è palindroma
function palindrome(str) {
    let lowStr = str.toLowerCase();
    let reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
}

//Crea un DIV ALERT di notifica errore e stampa un messaggio di errore
function noticationError(msgError){
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    alert.innerHTML = msgError;
    return alert;
}

//Rimuove il primo DIV con la classe Alert
function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
    if(alertToRemove) alertToRemove.remove();
}