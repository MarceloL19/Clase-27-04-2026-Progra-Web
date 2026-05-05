/*
Entender como funciona
*/

function reducir(arr, valorInicial) {
    let suma= 0;
    for (let elemento of arr) {
        suma += elemento;
    }   
    return suma;
}    

/*PROGRAMA PRINCIPAL*/
let datos = [1, 2, 3, 4, 5];
rpta = reducir(datos, 0);
console.log("La suma es: " + rpta);

/*Usando High Order Forma 1*/
const suma2 = datos.reduce((total, elem, indice, datos) => {
    return total + elem;
})
console.log("La suma2 es: " + suma2);

/*Usando High Order Forma 2*/
const suma3 = datos.reduce((total, elem, indice, datos) => {
    return total + elem;
},1)
console.log("La suma3 es: " + suma3);

/*Usando High Order Forma 3*/
const suma4 = datos.reduce((total, elem) => {
    return total + elem;
})
console.log("La suma4 es: " + suma4);