/*
Com funciona
*/

let datos = [1, 2, 3, 4, 5];

for (let i = 0; i < datos.length; i++) {
    console.log(`Indice ${i} Elemento: ${datos[i]} `);
}

/*Usando High Order Forma 1*/

let suma = 0;
datos.forEach((item) => {
    console.log( item);
    suma += item;
})
console.log("La suma es: " + suma);

/*Usando High Order Forma 2*/

let f2 = datos.forEach((elemento, indice) => {
    console.log(`Indice ${indice} - Elemento: ${elemento} `);
});

    