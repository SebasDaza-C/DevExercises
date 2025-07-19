/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let Person = {
    name: 'Sebas',
    age: 17,
    country: 'Colombia'
}

// 2. Accede y muestra su valor
console.log(Person.name);

// 3. Agrega una nueva propiedad
Person.city = 'Cali'

// 4. Elimina una de las 3 primeras propiedades
delete Person.country

// 5. Agrega una función e invócala
console.log(Person.estatura = 'alto');

// 6. Itera las propiedades del objeto
for (const key in Person) {
    console.log(`${key}: ${Person[key]}`);
}

// 7. Crea un objeto anidado
let smarthphone = {
    name: 'samsung',
    linea: 's',
    modelo: '25 ultra',
    details: {
        ram: 16,
        almacenamiento: 1000,
        procesador: 'Snapdragon'
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(smarthphone.details);

// 9. Comprueba si los dos objetos creados son iguales
console.log(Person == smarthphone);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(Person.name == smarthphone.name);
