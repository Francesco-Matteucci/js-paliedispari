//!Esercizio 1
//Creo una funzione per determinare se una parola è palindroma
function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const reverseWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reverseWord;
}

//Recupero gli elementi dal DOM
const palindromeForm = document.getElementById('palindromeform');
const wordInput = document.getElementById('wordinput');
const result = document.getElementById('result');

// Aggiungo un evento listener al submit del form nel DOM
palindromeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const word = wordInput.value.trim();

    if (isPalindrome(word)) {
        result.className = 'win';
        result.innerText = `La parola "${word}" è palindroma!`;
    } else {
        result.className = 'lose';
        result.innerText = `La parola "${word}" non è palindroma.`;
    }
});