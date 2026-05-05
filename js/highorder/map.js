/*como funciona el map*/

function mapa(arr, transf) {
    let rpta = [];
    for (let elemento of arr) {
        rpta.push(transf + elemento);
    }
    return rpta;
}
const alumnos = ["Juan", "Maria", "Pedro", "Ana"];
let rpta = mapa(alumnos, "ASISTIO A CLASE -->");
console.log(rpta);

/*Usando High Order Forma 1*/

const f1 = alumnos.map((a) => {
    return "ASISTIO A CLASE --> " + a;
});
console.log("Arreglo original: " + alumnos);
console.log("Arreglo transformado: " + f1);