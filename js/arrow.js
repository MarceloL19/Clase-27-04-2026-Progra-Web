function sumarTradicional(){
    console.log("Suma tradicional");
    let v1 =document.getElementById("v1").value;
    let v2 =document.getElementById("v2").value;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = "Resultado: " + rpta;
}

/*Function arrow*/
let sumarArrow1 = () => {
    console.log("Suma con Arrow Function");
    let v1 =document.getElementById("v1").value;
    let v2 =document.getElementById("v2").value;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = "Resultado: " + rpta;
}

let sumarArrow2 = () => {
    console.log("Suma con Arrow Function - Version 2");
    let v1 =document.getElementById("v1").value;
    let v2 =document.getElementById("v2").value;
    
    let rpta = sumarDeOtraForma(parseInt(v1), parseInt(v2));
    document.getElementById("resultado").innerHTML = "Resultado: " + rpta;
}

let sumarDeOtraForma = (a,b) => a+b;

