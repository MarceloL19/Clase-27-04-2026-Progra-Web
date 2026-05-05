/*Imegine que esta desarrolando una app para calcular el impuesto
de cada item que trae por TEMU, ademas debe calcular el
valor total de la factura */

let precioSinIGV = [100, 200, 300, 400, 500];
let igv = 0.18;
let precioConIGV = precioSinIGV.map((precio) => {
    return precio + (precio * igv);
})

let total = precioConIGV.reduce((total, precio) => {
    return total + precio;
});

console.log("Precios sin IGV: " + precioSinIGV);
console.log("Precios con IGV: " + precioConIGV);
console.log("Valor total de la factura: " + total);
