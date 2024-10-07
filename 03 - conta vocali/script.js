/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function number_of_vocals(string) {

    let vowals = ["a", "e", "i", "o", "u",];
    let vowals_count = 0;
    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];

        if (vowals.includes(element)) {
            vowals_count++;
            console.log(element);
        } 
    }
    
    console.log(vowals_count);
}

// Invoca la funzione qui e stampa il risultato in console
number_of_vocals(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


// arrow function
let vowals_counter = (string) => {

    let vowals = ["a", "e", "i", "o", "u",];
    let vowals_count = 0;
    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];

        if (vowals.includes(element)) {
            vowals_count++;
            console.log(element);
        } 
    }
    
    console.log(vowals_count);
}

vowals_counter(word);