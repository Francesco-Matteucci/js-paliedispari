//!Esercizio 2
// Funzione per generare un numero randomico da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se il numero è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

// Recupero gli elementi dal DOM
const gameForm = document.getElementById('gameform');
const choiseSelect = document.getElementById('choice');
const userNumberInput = document.getElementById('usernumber');
const result = document.getElementById('result');


// Aggiungo un evento listener al submit del form nel DOM
gameForm.addEventListener('submit', function (event) {
    // Prevengo il ricaricamento della pagina al click, avendo utilizzato submit
    event.preventDefault();

    // Creo una variabile per prendere la scelta dell'utente sul pari e dispari
    const userChoise = choiseSelect.value;

    // Creo una variabile per prendere il numero inserito dall'utente
    const userNumber = parseInt(userNumberInput.value);

    // Creo una variabile richiamando la funzione per generare un numero casuale per il computer
    const computerNumber = generateRandomNumber();

    // Eseguo la somma sui 2 numeri dati
    const sum = userNumber + computerNumber;

    // Determino, attraverso l'operatore ternario e richiamando la funzione indicata, se la somma è pari o dispari
    const sumResult = isEven(sum) ? 'pari' : 'dispari';

    // Dichiaro il vincitore tra l'utente ed il computer ed applico le classi
    if (sumResult === userChoise) {
        result.className = 'win';
        result.innerText = `Hai vinto! La somma di ${userNumber} e ${computerNumber} è ${sum}, che è ${sumResult}.`;
    } else {
        result.className = 'lose';
        result.innerText = `Hai perso! La somma di ${userNumber} e ${computerNumber} è ${sum}, che è ${sumResult}.`;
    }


});