class Coche:
    def __init__(self, marca, modelo, color, velocidad_maxima):
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.velocidad_maxima = velocidad_maxima

    def acelerar(self):
        print(f"El {self.marca} {self.modelo} está acelerando.")

    def frenar(self):
        print(f"El {self.marca} {self.modelo} está frenando.")

    def mostrar_informacion(self):
        print(f"Marca: {self.marca}")
        print(f"Modelo: {self.modelo}")
        print(f"Color: {self.color}")
        print(f"Velocidad Máxima: {self.velocidad_maxima} km/h")

# Crear un objeto de la clase Coche y asignar valores a los atributos
mi_coche = Coche("Toyota", "Corolla", "Rojo", 180)

# Mostrar información del coche
mi_coche.mostrar_informacion()

# Usar los métodos del coche
mi_coche.acelerar()
mi_coche.frenar()