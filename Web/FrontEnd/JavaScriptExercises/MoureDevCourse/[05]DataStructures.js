/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ['Lion', 'Cat', 'Dog', 'Elephant', 'Giraffe'];
console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift('Zebra');
animals.push('Monkey');
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros
let books = new Set(['1984', 'Brave New World', 'Fahrenheit 451', 'The Great Gatsby', 'Moby Dick']);
console.log(books);

// 5. Añade dos más. Uno de ellos repetido
books.add('To Kill a Mockingbird');
books.add('1984');
console.log(books);

// 6. Elimina uno concreto a tu elección
books.delete('Moby Dick');
console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December']
]);
console.log(months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (months.has(5)) {
    console.log(months.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set('summer', ['June', 'July', 'August']);
console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ['apple', 'banana', 'orange', 'apple', 'banana'];
let uniqueSet = new Set(array);
months.set('fruits', uniqueSet);
console.log(months);