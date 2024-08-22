/*
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

//!Esercizio 2
//Creo una funzione per generare un numero randomico da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//Creo una funzione per determinare se il numero è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

//Recupero gli elementi dal DOM
const gameForm = document.getElementById('gameform');
const choiceSelect = document.getElementById('choice');
const userNumberInput = document.getElementById('usernumber');
const result = document.getElementById('result');



//Aggiungo un evento listener al submit del form nel DOM
gameForm.addEventListener('submit', function (event) {
    //prevengo il ricaricamente della pagina al click, avendo utilizzato submit
    event.preventDefault();

    //creo una variabile per prendere la scelta dell'utente sul pari e dispari
    const userChoice = choiceSelect.value;

    //creo una variabile per prendere il numero inserito dall'utente
    const userNumber = parseInt(userNumberInput.value);

    //creo una variabile richiamando la funzione per generare un numero casuale per il computer
    const computerNumber = generateRandomNumber();

    //Eseguo la somma sui 2 numeri dati
    const sum = userNumber + computerNumber;

    //Determino, attraverso l'operatore ternario e richiamando la funzione indicata, se la somma è pari o dispari
    const sumResult = isEven(sum) ? 'pari' : 'dispari';

    //Dichiaro il vincitore tra l'utente ed il computer ed applico le classi
    result.classList.add('show');
    if (sumResult === userChoice) {
        result.className = 'win show'
        result.innerText = `Hai vinto! La somma di ${userNumber} e ${computerNumber} è ${sum}, che è ${sumResult}.`;
    } else {
        result.className = 'lose show'
        result.innerText = `Hai perso! La somma di ${userNumber} e ${computerNumber} è ${sum}, che è ${sumResult}.`;
    }
})