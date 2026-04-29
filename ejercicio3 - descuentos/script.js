function calculardescuentos() {
    
    let precio = document.getElementById("precio").value;
    precio = Number(precio);

    let resultado = document.getElementById("resultado");

    if (precio > 100) {
        let descuento = precio * 0.20;
        let precioFinal = precio - descuento;

        resultado.innerHTML = "El precio final con descuento es: " + precioFinal.toFixed(2);
        resultado.className = "descuento";
    } else {
        let descuento = precio * 0.10;
        let precioFinal = precio - descuento;

        resultado.innerHTML = "El precio final con descuento es: " + precioFinal.toFixed(2);
        resultado.className = "descuento";
    }
}