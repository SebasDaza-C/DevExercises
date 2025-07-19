/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function logError(message) {
    console.error(message);
}

// 2. Crea una función que utilice warn correctamente

function logWarning(message) {
    console.warn(message);
}

// 3. Crea una función que utilice info correctamente

function logInfo(message) {
    console.info(message);
}

// 4. Utiliza table

function logTable(data) {
    console.table(data);
}

// 5. Utiliza group
function logGroup(title, data) {
    console.group(title);
    console.log(data);
    console.groupEnd();
}

// 6. Utiliza time

function logTime(label) {
    console.time(label);
    // Código a medir
    for (let i = 0; i < 10000; i++) {}
    console.timeEnd(label);
}

// 7. Valida con assert si un número es positivo

function assertPositiveNumber(num) {
    console.assert(num >= 0, `El número ${num} no es positivo`);
}

// 8. Utiliza count

function logCount(label) {
    console.count(label);
}

// 9. Utiliza trace

function logTrace() {
    console.trace();
}

// 10. Utiliza clear

function logClear() {
    console.clear();
}