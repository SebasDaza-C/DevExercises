/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un Comentario en una linea

// 2. Escribe un comentario en varias líneas

/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Juan"; // String
let edad = 30; // Number
let estatura = 1.75; // Number
let esEstudiante = true; // Boolean
let esMaestro = false; // Boolean
let trabajo; // Undefined
let sueldo = null; // null
let miFrase = Symbol('Mi Simbolo'); // Symbol
let cantidadDePasos = BigInt(123456789012345678901234567890); // BigInt
let cantidadDeParpadeos = 123456789012345678901234567890n; // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(nombre); // "Juan"
console.log(edad); // 30
console.log(estatura); // 1.75
console.log(esEstudiante); // true
console.log(esMaestro); // false
console.log(trabajo); // undefined
console.log(sueldo); // null
console.log(miFrase); // Symbol('Mi Simbolo')
console.log(cantidadDePasos); // 123456789012345678901234567890n
console.log(cantidadDeParpadeos); // 123456789012345678901234567890n

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof estatura); // number
console.log(typeof esEstudiante); // boolean
console.log(typeof esMaestro); // boolean
console.log(typeof trabajo); // undefined
console.log(typeof sueldo); // object
console.log(typeof miFrase); // symbol
console.log(typeof cantidadDePasos); // bigint
console.log(typeof cantidadDeParpadeos); // bigint

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Ana"; // Cambiando el valor de tipo String
edad = 25; // Cambiando el valor de tipo Number
estatura = 1.65; // Cambiando el valor de tipo Number
esEstudiante = false; // Cambiando el valor de tipo Boolean
esMaestro = true; // Cambiando el valor de tipo Boolean
trabajo // No cambia para nada
sueldo = null; // No cambia para nada
miFrase = Symbol('Otro Simbolo'); // Cambiando el valor de tipo Symbol
cantidadDePasos = BigInt(987654321098765432109876543210); // Cambiando el valor de tipo BigInt
cantidadDeParpadeos = 987654321098765432109876543210n; // Cambiando el valor de tipo BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 123; // Cambiando a tipo Number
edad = "Treinta"; // Cambiando a tipo String
estatura = true; // Cambiando a tipo Boolean
esEstudiante = 1; // Cambiando a tipo Number
esMaestro = "Sí"; // Cambiando a tipo String
trabajo = 42; // Cambiando a tipo Number
sueldo = "Cero"; // Cambiando a tipo String
miFrase = 100; // Cambiando a tipo Number
cantidadDePasos = "Mil"; // Cambiando a tipo String
cantidadDeParpadeos = false; // Cambiando a tipo Boolean

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombreConstante = "Juan"; // String
const edadConstante = 30; // Number
const estaturaConstante = 1.75; // Number
const esEstudianteConstante = true; // Boolean
const esMaestroConstante = false; // Boolean
const trabajoConstante = "Ingeniero"; // String
const sueldoConstante = 50000; // Number
const miFraseConstante = Symbol('Mi Simbolo'); // Symbol
const cantidadDePasosConstante = BigInt(123456789012345678901234567890); // BigInt
const cantidadDeParpadeosConstante = 123456789012345678901234567890n; // BigInt

// 9. A continuación, modifica los valores de las constantes
/*
const nombreConstante = "Ana";
const edadConstante = 25;
const estaturaConstante = 1.65;
const esEstudianteConstante = false;
const esMaestroConstante = true;
const trabajoConstante = "Arquitecto";
const sueldoConstante = 60000;
const miFraseConstante = Symbol('Otro Simbolo');
const cantidadDePasosConstante = BigInt(987654321098765432109876543210);
const cantidadDeParpadeosConstante = 987654321098765432109876543210n;
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse