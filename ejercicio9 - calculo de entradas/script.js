function calcularTotal() {
    let precioEntrada = 12; // Precio por entrada
    let cantidadEntradas = parseInt(document.getElementById('numEntradas').value);

    if (cantidadEntradas >= 5) {
        let total = cantidadEntradas * precioEntrada;
        let descuento = 10;
        total -= descuento;
        document.getElementById('resultado').innerText = `El total a pagar es: S/ ${total.toFixed(2)}`;
    } else {
        let total = cantidadEntradas * precioEntrada;
        document.getElementById('resultado').innerText = `El total a pagar es: S/ ${total.toFixed(2)}`;
    }
}