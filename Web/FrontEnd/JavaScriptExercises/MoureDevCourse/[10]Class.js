/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// 2. Añade un método a la clase que utilice las propiedades
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const persona = new Persona2("Juan", 30);
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
console.log(persona.presentarse()); // Hola, me llamo Juan y tengo 30 años.

// 4. Añade un método estático a la primera clase
class Persona3 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
    static crearAdulto(nombre) {
        console.log(`Creando un adulto con nombre: ${nombre}`);
        return new Persona(nombre, 18);
    }
}

// 5. Haz uso del método estático
console.log(Persona3.crearAdulto("Carlos")); // Hola, me llamo Carlos y tengo 18 años.


// 6. Crea una clase que haga uso de herencia
class Empleado extends Persona3 {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto}.`;
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Persona4 {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad no puede ser negativa.");
        }
    }
    presentarse() {
        return `Hola, me llamo ${this._nombre} y tengo ${this._edad} años.`;
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Persona5 {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad no puede ser negativa.");
        }
    }
    presentarse() {
        return `Hola, me llamo ${this._nombre} y tengo ${this._edad} años.`;
    }
}

// 9. Utiliza los get y set y muestra sus valores
const persona2 = new Persona5("Ana", 25);
console.log(persona2.nombre); // Ana
console.log(persona2.edad); // 25
persona2.nombre = "María";
persona2.edad = 30;
console.log(persona2.nombre); // María
console.log(persona2.edad); // 30

// 10. Sobrescribe un método de una clase que utilice herencia 
class Empleado2 extends Persona5 {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto}.`;
    }
}