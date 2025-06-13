let money = 1000;
let action = '';

while (action !== '4') {
    let question = prompt('¿Qué operación deseas realizar? (ingresar(1), retirar(2), consultar(3), salir(4)');
    action = parseFloat(question)
    switch (action) {
        case 1:
            let deposit = prompt('¿Cuánto dinero deseas ingresar?');
            if (deposit > 0) {
                money += deposit
                console.log('Su Saldo ahora es: ' + money);
            } else {
                console.log('Por favor, ingrese una cantidad válida.');
            }
            break;
        case 2:
            let retir = prompt('¿Cuánto dinero deseas retirar?');
            if (retir > money) {
                console.log('Fondos insuficientes. Su saldo actual es: ' + money);
            } else {
                money -= retir;
                console.log('Su Saldo ahora es: ' + money);
            }
            break;
        case 3:
            console.log('Tu saldo actual es: ' + money);
            break;
        case 4:
            console.log('¡Hasta luego!');
            break;
        default:
            console.log('Opción no válida');
    }
}