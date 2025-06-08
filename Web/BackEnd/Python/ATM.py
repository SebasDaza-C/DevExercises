dinero = 1000
accion = ''

# Funciones

# Funcion Consultar
def consultar():
    print('Tu saldo es:', dinero)

# Funcion Retirar
def retirar(retiro):
    global dinero
    if retiro > dinero:
        print('No tienes suficiente saldo')
    else:
        dinero = dinero - retiro
        print('Ahora tu saldo es:', dinero)

# Funcion Depositar
def depositar(deposito):
    global dinero
    dinero = dinero + deposito
    print('Tu saldo ahora es:', dinero)

# Programa principal
while accion != 'Salir' and accion != 'salir':
    accion = input('Que desea realizar (Consultar, Retirar, Depositar, Salir):')
    if accion == 'Consultar' or accion == 'consultar':
        consultar()
    elif accion == 'Retirar' or accion == 'retirar':
        retiro = int(input('Cuanto dinero desea retirar:'))
        retirar(retiro)
    elif accion == 'Depositar' or accion == 'depositar':
        deposito = int(input('Cuanto dinero deseas depositar:'))
        depositar(deposito)
    elif accion == 'Salir' or accion == 'salir':
        print('Gracias por usar el cajero')