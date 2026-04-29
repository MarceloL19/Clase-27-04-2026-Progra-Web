function calcularPromedio() {
    // Obtener los valores de los inputs
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let resultado = document.getElementById("resultado");

    // Validar que las notas sean números y estén entre 0 y 20
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 > 20 ||
        nota2 < 0 || nota2 > 20 ||
        nota3 < 0 || nota3 > 20) {
        resultado.textContent = "Por favor, ingresa notas válidas entre 0 y 20.";
        resultado.className = "error";
        return;
    }

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el resultado
    resultado.textContent = "El promedio es: " + promedio.toFixed(2);
    resultado.className = "promedio";

}