/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function log_first_letter(array) {
    
    for (let i = 0; i < array.length; i++) {
        const first_letter = array[i][0]; // prendi solo la prima lettere degli elementi dell'array perchè è in posizione 0
        console.log(first_letter);
    }
};


// Invoca la funzione qui e stampa il risultato in console
log_first_letter(names);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// arrow function
let first_letter_arrow = (array) => {

    for (let i = 0; i < array.length; i++) {
        const first_letter = array[i][0];
        console.log(first_letter);
    }
};

first_letter_arrow(names);