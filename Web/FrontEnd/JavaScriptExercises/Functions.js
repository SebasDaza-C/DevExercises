/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    return a + b;
}

// console.log(suma(10, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numeroMayor(array) {
    let numeroMayorArray = array[0]
    for (let i = 0; i < array.length; i++) {
        if (numeroMayorArray < array[i]) {
            numeroMayorArray = array[i]
        }
    }
    return numeroMayorArray
}

let numbers = [1, 2, 3, 4, 15, 6, 7, 8, -9, 10, 11, 12, 13, 14];
// console.log(numeroMayor(numbers))

let NegativeNumbers = [-1, -2, -3, -4, -5]
// console.log(numeroMayor(NegativeNumbers))

let myArray = []
// console.log(numeroMayor(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cantidadVocales (mystring) {
    let cantidadDeVocales = 0
    let newString = mystring.toUpperCase()
    for (let i = 0; i < newString.length; i++) {
        switch (newString[i]) {
            case 'A':
                cantidadDeVocales += 1
                break;
            case 'E':
                cantidadDeVocales += 1
                break;
            case 'I':
                cantidadDeVocales += 1
                break;
            case 'O':
                cantidadDeVocales += 1
                break;
            case 'U':
                cantidadDeVocales += 1
                break;
        }
    }
    return cantidadDeVocales
}

// console.log(cantidadVocales('AAAAAMondongó'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function arrayaMAYUSCULAS (array) {
    return array.map(word => word.toUpperCase())
}

let otherArray = ['manzana', 'Uva', 'Pera', 'Naranja', 'Piña']
// console.log(arrayaMAYUSCULAS(otherArray));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function EsPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero > 1 && numero % i == 0) {
            console.log('No es Primo');
            return false
        } else {
            console.log('Es Primo');
            return true
        }
    }
}
// EsPrimo(7);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function ElementosEnComun (ArrayOne, ArrayTwo) {
    let ArrayComun = []
    for (let i = 0; i < ArrayOne.length; i++) {
        if (ArrayTwo.includes(ArrayOne[i])) {
            ArrayComun.push(ArrayOne[i])
        }
    }
    console.log(ArrayComun);
}

let array1 = ['Manzana', 'Pera', 'Piña', 'Uva', 'Banana', 'Naranja']
let array2 = ['Perro', 'Gato', 'Piña', 'Pajaro', 'Tiburon', 'Naranja']
// ElementosEnComun(array1, array2)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function SumaDePares(array) {
    let SumaDePares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            SumaDePares += array[i]
        }
    }
    return SumaDePares
}

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(SumaDePares(Numeros));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function Elevados(array) {
    let NumerosElevados = []
    for (let i = 0; i < array.length; i++) {
        NumerosElevados.push(array[i] ** 2)
    }
    return NumerosElevados
}
// console.log(Elevados(Numeros));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function PalabraInvertida(string) {
    let newString = ''
    for (let i = string.length-1; i > -1; i--) {
        newString += string[i]
    }
    return newString
}
// console.log(PalabraInvertida('Mondongo'));

// 10. Crea una función que calcule el factorial de un número dado

function NumeroFactorial(factorial) {
    if (factorial === 0) {
        return 1
    } else {
        let resultado = 1
        for (let multiplicador = 1; multiplicador <= factorial; multiplicador++)  {
           resultado *= multiplicador
        }
        return resultado
    }
}

console.log(NumeroFactorial(4))