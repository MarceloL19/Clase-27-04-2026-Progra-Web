function evaluarEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");  
    
    if (edad >= 18) {
        resultado.textContent = "Eres mayor de edad.";
        resultado.className = "mayor";
    } else {
        resultado.textContent = "Eres menor de edad.";
        resultado.className = "menor";
    }
}