/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 'Sebastian'

if (nombre == 'Sebastian') {
    console.log(`Tu nombre es ${nombre}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = 'Sebastian123'
let contraseña = 102982

if (usuario == 'Sebastian123' && contraseña == 102982) {
    console.log('Bienvenido Sebastian');
}

// // 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -4

if (numero > 0) {
    console.log('Tu Numero es Positivo');
} else if (numero == 0) {
    console.log('Tu Numero es cero');
} else if (numero < 0) {
    console.log('Tu Numero es Negativo');
} else {
    console.log('Tu Numero no es Valido');
}

// // 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 19

if (edad => 18) {
    console.log('Puede Votar');
} else {
    añosRestantes = edad - 18
    console.log(`Te faltan ${añosRestantes} para votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edad1 = 32

let adultoOMenor = edad1 >= 10 ? 'Adulto' : 'Menor'
console.log(adultoOMenor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1

if (mes > 2 && mes < 6) {
    console.log('Es Primavera');
} else if (mes > 5 && mes < 9) {
    console.log('Es Verano');
} else if (mes > 8 && mes < 12) {
    console.log('Es Otoño');
} else if (mes == 12 || mes == 1 || mes == 2) {
    console.log('Es Invierno');
} else {
    console.log('Mes no Válido');
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log('El Mes tiene 31 Días');
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log('El mes tiene 30 Días');
} else if (mes == 2) {
    console.log('El mes tiene 29 Días');
} else {
    console.log('Mes no válido');
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'Español'

switch (idioma) {
    case 'Español':
        console.log('Hola, ¿cómo estás?');
        break;
    case 'Inglés':
        console.log('Hi, how are you?');
        break;
    case 'Francés':
        console.log('Salut, comment ça va ?');
        break;
    default:
        console.log('No hay saludo para este idioma');
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 1:
        console.log('Es Invierno');
        break;
    case 2:
        console.log('Es Invierno');
        break;
    case 3:
        console.log('Es Primavera');
        break;
    case 4:
        console.log('Es Primavera');
        break;
    case 5:
        console.log('Es Primavera');
        break;
    case 6:
        console.log('Es Verano');
        break;
    case 7:
        console.log('Es Verano');
        break;
    case 8:
        console.log('Es Verano');
        break;
    case 9:
        console.log('Es Otoño');
        break;
    case 10:
        console.log('Es Otoño');
        break;
    case 11:
        console.log('Es Otoño');
        break;
    case 12:
        console.log('Es Invierno');
        break;
    default:
        console.log('Mes Invalido');
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 1:
        console.log('Este mes tiene 31 días');
        break;
    case 2:
        console.log('Este mes tiene 29 días');
        break;
    case 3:
        console.log('Este mes tiene 31 días');
        break;
    case 4:
        console.log('Este mes tiene 30 días');
        break;
    case 5:
        console.log('Este mes tiene 31 días');
        break;
    case 6:
        console.log('Este mes tiene 30 días');
        break;
    case 7:
        console.log('Este mes tiene 31 días');
        break;
    case 8:
        console.log('Este mes tiene 31 días');
        break;
    case 9:
        console.log('Este mes tiene 30 días');
        break;
    case 10:
        console.log('Este mes tiene 31 días');
        break;
    case 11:
        console.log('Este mes tiene 30 días');
        break;
    case 12:
        console.log('Este mes tiene 31 días');
        break;
    default:
        console.log('Mes Invalido');
        break;
}