function CalcularSueldo() {
    let horas = document.getElementById("horas").value;
    horas = Number(horas);

    let sueldo = 0;
    if (horas <= 8) {
        sueldo = horas * 10;
    } else {
        let base = 8 * 10;
        let extras = horas - 8;
        sueldo = base + extras;
    }
    alert("Sueldo a pagar es: " + sueldo);
}