/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function suma(a,b) {
    return a + b;
}

// 2. Exporta una constante

export const PI = 3.14159;

// 3. Exporta una clase

export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function() {
    console.log("Esta es una función por defecto.");
}

export const CONSTANTE = "Esta es una constante por defecto.";

export class ClasePorDefecto {
    constructor() {
        console.log("Esta es una clase por defecto.");
    }
    saludar() {
        console.log("Hola desde la clase por defecto.");
    }
}

// 9. Exporta una función, una constante y una clase desde una carpeta
export function funcionDesdeCarpeta() {
    console.log("Función desde una carpeta.");
}
export const constanteDesdeCarpeta = "Constante desde una carpeta.";
export class ClaseDesdeCarpeta {
    constructor() {
        console.log("Clase desde una carpeta.");
    }
    saludar() {
        console.log("Hola desde la clase de una carpeta.");
    }
}