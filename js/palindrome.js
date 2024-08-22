//!Esercizio 1
//Chiedo all'utente una parola
const word = prompt("Inserisci una parola, ti dirò se palindroma!").trim();

//Creo una funzione per stabilire se la parola è palindroma
function isPalindrome(word) {

    //tolgo le eventuali lettere maiuscole dalla parola
    const lowerCaseWord = word.toLowerCase();


    //Inverto i caratteri della parola data e la riporto in stringa
    const reverseWord = lowerCaseWord.split('').reverse().join('');

    //Eseguo un controllo sulla parola data e la parola invertita, per verificare che siano uguali
    return lowerCaseWord === reverseWord;
}


//Call alla funzione e invio un messaggio all'utente tramite alert
if (isPalindrome(word)) {
    alert(`La parola "${word}" è palindroma!`);
} else {
    alert(`La parola "${word}" non è palindroma.`);
}