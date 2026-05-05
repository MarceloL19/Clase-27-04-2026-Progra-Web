/*
Como funcionan los filtros en JavaScript
*/

function filter(arr, test) {
    let rpta = [];
    for (let elemento of arr) {
        if (elemento % test == 0) {
            rpta.push(elemento);
        }
    }
    return rpta;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rpta = filter(numeros, 2);
console.log("Numeros pares: " + rpta);
