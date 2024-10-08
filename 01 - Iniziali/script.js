/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function get_first_letter(array) {

    let new_array = [];
    
    for (let i = 0; i < array.length; i++) {
        const first_letter = array[i][0]; // prendi solo la prima lettere degli elementi dell'array perchè è in posizione 0
        new_array.push(first_letter);
    }

    return new_array;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(get_first_letter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// arrow function
let first_letter_arrow = (array) => {

    let new_array = [];

    for (let i = 0; i < array.length; i++) {
        const first_letter = array[i][0];
        new_array.push(first_letter);
    }

    return new_array;
};

console.log(first_letter_arrow(names));