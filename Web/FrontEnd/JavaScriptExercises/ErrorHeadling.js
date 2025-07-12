/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    // Código que puede lanzar una excepción
    throw new Error("Este es un error de ejemplo");
} catch (error) {
    console.error("Se ha capturado un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    // Código que puede lanzar una excepción
    throw new Error("Este es un error de ejemplo");
} catch (error) {
    console.error("Se ha capturado un error:", error.message);
} finally {
    console.log("Este bloque se ejecuta siempre.");
}

// 3. Lanza una excepción genérica

function lanzarExcepcion() {
    throw new Error("Esta es una excepción genérica lanzada desde la función.");
}

// 4. Crea una excepción personalizada

class ExcepcionPersonalizada extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionPersonalizada";
    }
}
function lanzarExcepcionPersonalizada() {
    throw new ExcepcionPersonalizada("Esta es una excepción personalizada.");
}

// 5. Lanza una excepción personalizada

function lanzarExcepcionConMensaje(mensaje) {
    throw new ExcepcionPersonalizada(mensaje);
}

// 6. Lanza varias excepciones según una lógica definida

function lanzarExcepcionesSegunLogica(valores) {
    valores.forEach(valor => {
        if (typeof valor !== "number") {
            throw new ExcepcionPersonalizada("Valor no numérico detectado: " + valor);
        }
    });
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    // Código que puede lanzar múltiples excepciones
    lanzarExcepcion();
    lanzarExcepcionPersonalizada();
} catch (error) {
    if (error instanceof ExcepcionPersonalizada) {
        console.error("Se ha capturado una excepción personalizada:", error.message);
    }
    else {
        console.error("Se ha capturado un error genérico:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function transformarValoresAFloat(valores) {
    valores.forEach(valor => {
        try {
            const numero = parseFloat(valor);
            if (isNaN(numero)) {
                throw new Error("No se puede convertir a float: " + valor);
            } else {
                console.log(`Valor convertido a float: ${numero}`);
            }
        } catch (error) {
            console.error("Error al convertir el valor:", error.message);
        }
    });
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new ExcepcionPersonalizada(`La propiedad "${propiedad}" no existe en el objeto.`);
    } else {
        console.log(`La propiedad "${propiedad}" existe en el objeto.`);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function realizarReintentos(funcion, maxReintentos = 10) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            funcion();
            console.log("Función ejecutada correctamente.");
            return; // Salir si la función se ejecuta sin errores
        } catch (error) {
            intentos++;
            console.error(`Error en el intento ${intentos}:`, error.message);
            if (intentos === maxReintentos) {
                console.error("Se ha alcanzado el número máximo de reintentos.");
            }
        }
    }
}