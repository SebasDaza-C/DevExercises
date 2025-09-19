/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function RetornarFuncion() {
    return function() {
        console.log("Hola desde la función retornada");
    }
}

RetornarFuncion()();

// 2. Implementa una función currificada que multiplique 3 números

function multiplicar(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}

console.log(multiplicar(2)(3)(4));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getValue: function() {
            return count;
        }
    };
}
const counter = createCounter(5);
counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
console.log(counter.getValue()); // 6

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum * multiplier;
}

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(numbers, callback) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    callback(sum);
}

// 7. Desarrolla una función parcial

function parcial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}
function ejemploParcial(a, b, c) {
    return a + b + c;
}
const parcialEjemplo = parcial(ejemploParcial, 1, 2);
console.log(parcialEjemplo(3));


// 8. Implementa un ejemplo sencillo de una funcion que haga uso de Spread

function ejemploSpread(...args) {
    return args;
}
console.log(ejemploSpread(1, 2, 3, 4, 5));

// 9. Implementa un retorno implícito

const ejemploRetornoImplicito = (a, b) => a + b;
console.log(ejemploRetornoImplicito(2, 3));

// 10. Haz uso del this léxico

const objeto = {
    valor: 42,
    obtenerValor: function() {
        return () => {
            return this.valor;
        };
    }
};

const funcion = objeto.obtenerValor();
console.log(funcion()); // 42