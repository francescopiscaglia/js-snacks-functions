/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function number_of_vowels(string) {

    // array di vocali
    let vowels = ["a", "e", "i", "o", "u",];
    // variabile per il contatore con valore di base 0
    let vowels_count = 0;
    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];

        if (vowels.includes(element)) {
            // incremeto il contatore di 1
            vowels_count++;
            console.log(element);
        } 
    }
    
    console.log(vowels_count);
}

// Invoca la funzione qui e stampa il risultato in console
number_of_vowels(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


// arrow function
let vowels_counter = (string) => {

    let vowels = ["a", "e", "i", "o", "u",];
    let vowels_count = 0;
    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];

        if (vowels.includes(element)) {
            vowels_count++;
            console.log(element);
        } 
    }
    
    console.log(vowels_count);
}

vowels_counter(word);