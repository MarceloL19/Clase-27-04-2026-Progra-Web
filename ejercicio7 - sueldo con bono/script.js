function calcularSueldo() {
    const nombre = document.getElementById("nombre").value;
    const sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    const resultado = document.getElementById("resultado");

    let sueldoNuevo = 0;

    if (sueldoBase >= 1500) {
        sueldoNuevo = sueldoBase + 200;
    } else {
        sueldoNuevo = sueldoBase + 100;
    }

    resultado.textContent = nombre + ", el nuevo sueldo con bono es: " + sueldoNuevo.toFixed(2);
    resultado.className = "bono";
}