/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function char_selector(array, character) {
    let new_array = [];
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // creo una variabile per gli elementi che iniziano con il carattere A
        let specific_char = element.startsWith(character);

        // se iniziano con il carattere specifico
        if (specific_char) {   
            // pusha l'elemento dentro al new_array
            new_array.push(element);
        }
    }

    console.log(new_array);
}


// Invoca la funzione qui e stampa il risultato in console
char_selector(names, "A");


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// arrow function
let char_selector_arrow = (array, character) => {
    let new_array = [];
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // creo una variabile per gli elementi che iniziano con il carattere A
        let specific_char = element.startsWith(character);

        // se iniziano con il carattere specifico
        if (specific_char) {   
            // pusha l'elemento dentro al new_array
            new_array.push(element);
        }
    }

    console.log(new_array);
}

char_selector_arrow(names, "A");