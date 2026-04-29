function calcularSuma() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos.";
        resultado.className = "error";
    } else {
        let suma = num1 + num2;
        resultado.textContent = "La suma es: " + suma.toFixed(2);
        resultado.className = "suma";
    }

    // Limpiar los campos de entrada
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function calcularResta() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos.";
        resultado.className = "error";
    } else {
        let resta = num1 - num2;
        resultado.textContent = "La resta es: " + resta.toFixed(2);
        resultado.className = "resta";
    }

    // Limpiar los campos de entrada
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function calcularMultiplicacion() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos.";
        resultado.className = "error";
    } else {
        let multiplicacion = num1 * num2;
        resultado.textContent = "La multiplicación es: " + multiplicacion.toFixed(2);
        resultado.className = "multiplicacion";
    }

    // Limpiar los campos de entrada
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}   

function calcularDivision() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos.";
        resultado.className = "error";
    } else if (num2 === 0) {
        resultado.textContent = "No se puede dividir por cero.";
        resultado.className = "error";
    } else {
        let division = num1 / num2;
        resultado.textContent = "La división es: " + division.toFixed(2);
        resultado.className = "division";
    }

    // Limpiar los campos de entrada
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}   




    