
// 4. Importa una función

import { suma } from './[13]ExportModules.js';

console.log(suma(5, 3)); // 8

// 5. Importa una constante

import { PI } from './[13]ExportModules.js';

console.log(PI); // 3.14159

// 6. Importa una clase

import { Persona } from './[13]ExportModules.js';

const persona = new Persona('Juan', 30);
persona.saludar(); // Hola, me llamo Juan y tengo 30 años.

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import defaultFunction, { CONSTANTE, ClasePorDefecto } from './[13]ExportModules.js';

defaultFunction(); // Esta es una función por defecto.
console.log(CONSTANTE); // Esta es una constante por defecto.
const ClaseDefecto = new ClasePorDefecto(); // Esta es una clase por defecto.
ClaseDefecto.saludar(); // Hola desde la clase por defecto.

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { funcionDesdeCarpeta, constanteDesdeCarpeta, ClaseDesdeCarpeta } from './[13]ExportModules.js';

funcionDesdeCarpeta(); // Función desde una carpeta.
console.log(constanteDesdeCarpeta); // Constante desde una carpeta.

const claseDesdeCarpeta = new ClaseDesdeCarpeta(); // Clase desde una carpeta.
claseDesdeCarpeta.saludar(); // Hola desde la clase de una carpeta.