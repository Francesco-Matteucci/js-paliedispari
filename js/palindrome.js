/* 
!Esercizio 1 - Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
!Esercizio 2 - Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! */




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