/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 4 + 6
let resta = 10 - 3
let multiplicacion = 5 * 3
let division = 20 / 4
let modulo = 10 % 3
let potencia = 2 ** 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = 10;
asignacionSuma += suma;

let asignacionResta = 20;
asignacionResta -= resta; 

let asignacionMultiplicacion = 5;
asignacionMultiplicacion *= multiplicacion;

let asignacionDivision = 40;
asignacionDivision /= division;

let asignacionModulo = 10;
asignacionModulo %= modulo;

let asignacionPotencia = 2;
asignacionPotencia **= potencia;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3);
console.log(10 < 15);
console.log(7 >= 7);
console.log(8 <= 10);
console.log(4 == 4);
console.log(4 != 5);
console.log(4 === 4);
console.log(4 !== 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 3);
console.log(10 > 15);
console.log(7 >= 8);
console.log(8 <= 7);
console.log(4 == 5);
console.log(4 != 4);
console.log(4 === 5);
console.log(4 !== 4);

// 5. Utiliza el operador lógico and
console.log(5 > 3 && 10 < 15); // true
console.log(7 >= 7 && 8 <= 10); // true
console.log(4 === 4 && 5 < 3); // false

// 6. Utiliza el operador lógico or
console.log(5 < 3 || 10 > 15); // false
console.log(7 >= 8 || 8 <= 7); // false
console.log(4 === 5 || 4 === 4); // true

// 7. Combina ambos operadores lógicos
console.log((5 > 3 && 10 < 15) || (7 >= 8 || 8 <= 7)); // true

// 8. Añade alguna negación
console.log(!(5 < 3)); // true
console.log(!(10 > 15)); // true

// 9. Utiliza el operador ternario
let edad = 18;
let esMayorDeEdad = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((3 + 5)>(2 + 5)) && ((3 - 1) === (4 / 2)));