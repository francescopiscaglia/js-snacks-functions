/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
function say_hello(word) {
    
    // creo una variabile che mi da l'ora attuale
    let current_hour = new Date().getHours();

    // creo la variabile per il messaggio di output
    let message;

    // verifico che ora è 
    if (current_hour < 13) {
        // mattina = entro le 13
        message = `Buongiorno ${name}`;

    } else if ( current_hour < 17) {
        // pomeriggio = entro le 17
        message = `Buon pomeriggio ${name}`;
        
    } else {
        // sera = dalle 17 in poi
        message = `Buonasera ${name}`;
    };

    return message;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(say_hello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// arrow function
let say_hello_2 = (word) => {

    // creo una variabile che mi da l'ora attuale
    let current_hour = new Date().getHours();

    // creo la variabile per il messaggio di output
    let message;

    // verifico che ora è 
    if (current_hour < 13) {
        // mattina = entro le 13
        message = `Buongiorno ${name}`;

    } else if ( current_hour < 17) {
        // pomeriggio = entro le 17
        message = `Buon pomeriggio ${name}`;
        
    } else {
        // sera = dalle 17 in poi
        message = `Buonasera ${name}`;
    };

    return message;
}

console.log(say_hello_2(name));