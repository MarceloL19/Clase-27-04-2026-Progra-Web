function evaluar() {
    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("nota").value;
    nota = Number(nota);

    let resultado = document.getElementById("resultado");

    if (nota >= 11) {
        resultado.textContent = `El estudiante ${nombre} ha aprobado con una nota de ${nota}.`;
        resultado.className = "aprobado";
    } else {
        resultado.textContent = `El estudiante ${nombre} ha desaprobado con una nota de ${nota}.`;
        resultado.className = "desaprobado";
    }
}