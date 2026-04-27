let obj1 = new Object();
let obj2 = {};

let alumno = {
    nombre: "Juan",
    codigo: "2026001",
}

console.log(alumno.nombre);
console.log(alumno.codigo); 

//asignar nuevos atributos
alumno.ciclo = "2026-1";
delete alumno.codigo;

console.log(alumno);

//una propiedad particular 
alumno['nro veces'] = 1; 
console.log(alumno); 

//operador IN
console.log("codigo existe en Alumno ? " + ("codigo" in alumno));

// Puedo obtener los atributos del objeto
for (key in alumno) {
    console.log("Atributo=" + key + "Valor : " + alumno[key]);
}

//Trabajar con clase 
class Alumno {
    constructor(nombre, codigo, ciclo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.ciclo = ciclo;
        this['nro veces'] = 1;
    }

    //Agregar un metodo de comportamiento
    registrarVeces() {
        this['nro veces']++;
    }

    //Override del metodo toString
    toString() {
        return `Alumno: ${this.nombre}, Codigo: ${this.codigo}, Ciclo: ${this.ciclo}, Nro Veces: ${this['nro veces']}`;
    }
}

let a2 = new Alumno("Marcelo", "2026002", "2026-1");
a2.registrarVeces();
console.log("Datos: " +  a2);
