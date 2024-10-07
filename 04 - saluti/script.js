/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function say_hello(word) {
    return `Ciao ${word}`;
}

let function_result = say_hello(name);

// Invoca la funzione qui e stampa il risultato in console
console.log(function_result);


//Risultato atteso se si passa 'Mario': // ciao Mario


// arrow function
let get_hello = () => `Ciao ${name}`;
console.log(get_hello());
