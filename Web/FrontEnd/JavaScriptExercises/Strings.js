/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombre = 'Sebastian'
let saludo = 'Hola '
let frase = saludo + nombre

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length);

// 3. Muestra el primer y último carácter de un string
console.log(nombre[0] + ', ' + nombre[nombre.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let message = `
hola
como
estas
`

// 6. Interpola el valor de una variable en un string
let misaludo = `Hola ${nombre}`

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = 'Esta es mi primera vez reemplazando espacios por guiones en javascript';
console.log(texto.replaceAll(' ', '_'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let contentedor = 'Mi apellido es daza'
console.log(contentedor.includes('daza'));

// 9. Comprueba si dos strings son iguales
let string1 = '¡Hola, Mundo!'
let string2 = '¡Hola, Mundo!'
console.log(string1 == string2);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length == string2.length);