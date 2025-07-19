/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = ['manzana', 'Pera', 'Uva', 'Naranja']

let [elemento1, elemento2] = myArray
// console.log(elemento1);
// console.log(elemento2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [ , , elemento3, elemento4, elemento5 = 'NiIdea'] = myArray
// console.log(elemento3);
// console.log(elemento4);
// console.log(elemento5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let myObject = {
    nombre: 'sebas',
    edad: 17,
    city: 'cali',
    country: 'Colombia',
    celular : {
        marca: 'samsung',
        modelo: 'note'
    }
}

let {nombre, edad} = myObject
// console.log(nombre);
// console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {city: ciudad, country: pais} = myObject
// console.log(ciudad);
// console.log(pais);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {celular:{marca}} = myObject
// console.log(marca);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let numbers1 = [1, 2, 3, 4, 5]
let numbers2 = [6, 7, 8, 8, 10]

let newNumbers = [...numbers1, ...numbers2]
// console.log(newNumbers);

// 7. Usa propagación para crear una copia de un array
let numbers1copia = [...numbers1]
// console.log(numbers1copia);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let Person1 = {
    nombre: 'sebas',
    edad: 17,
    city: 'cali',
    country: 'Colombia',
    celular : {
        marca: 'samsung',
        modelo: 'note'
    }
}
let Animal = {
    especie: 'perro',
    años: 5
}
let Persons = {...Person1, ...Animal}
// console.log(Persons);

// 9. Usa propagación para crear una copia de un objeto
let Person1copia = {...Person1}
// console.log(Person1copia);

// 10. Combina desestructuración y propagación
let Person2 = {
    nombreof: 'damian',
    edad: 17,
    city: 'cali',
    country: 'Colombia',
    celular : {
        marca: 'samsung',
        modelo: 'note'
    }
}

let {nombreof, ...resto} = Person2
console.log(nombreof);
console.log(resto);

