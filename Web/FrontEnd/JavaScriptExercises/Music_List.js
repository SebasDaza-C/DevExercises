// Ejemplo sencillo de arrays en JavaScript

// Array
let musicGenres = ['Rock', 'Jazz', 'Classical', 'Pop'];
console.log('Array:', musicGenres);

// Agregar un elemento al final del array
musicGenres.push('Blues');
console.log('Array después de push:', musicGenres);

// Eliminar el último elemento del array
musicGenres.pop();
console.log('Array después de pop:', musicGenres);

// Acceder a un elemento del array
console.log('Primer género:', musicGenres[0]);

// Longitud del array
console.log('Longitud del array:', musicGenres.length);

// Agregar un elemento al inicio del array
musicGenres.unshift('Hip Hop');
console.log('Array después de unshift:', musicGenres);

// Eliminar el primer elemento del array
musicGenres.shift();
console.log('Array después de shift:', musicGenres);

// Encontrar el índice de un elemento
let index = musicGenres.indexOf('Jazz');
console.log('Índice de Jazz:', index);

// Eliminar un elemento por su índice
if (index !== -1) {
    musicGenres.splice(index, 1);
}
console.log('Array después de eliminar Jazz:', musicGenres);

// Crear una copia del array
let copiedArray = musicGenres.slice();
console.log('Copia del array:', copiedArray);

// Ordenar el array
musicGenres.sort();
console.log('Array ordenado:', musicGenres);

// Invertir el array
musicGenres.reverse();
console.log('Array invertido:', musicGenres);