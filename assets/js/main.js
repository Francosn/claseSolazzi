alert ('Bienvenidos a DataWriter, tienda de libros online, les vamos a pedir algunos datos')
let cantidadLibros = parseInt(prompt ('¿cuantos libros desea llevar?'))
let libros = parseInt(prompt ('¿Que tipo de libro buscas?: \n1-Ciencia Ficcion. \n2-Suspenso. \n3- Terror. \n4- Policiales.'))

while (libros < 1 || libros > 4 ) {
    alert ('Opción Incorrecta')
    libros = prompt ('Elija la opcion correcta: ¿Que tipo de libro buscas?: \n1-Ciencia Ficcion. \n2-Suspenso. \n3- Terror. \n4- Policiales.')
}

let pagoLibros = parseInt(prompt('Lo paga en: \n1- Transferencia. \n2- Efectivo.'))

while  (pagoLibros < 1 || pagoLibros > 2) {
    alert ('Opcion incorrecta')
    pagoLibros = prompt ('Quiere pagarlo en: \n1- Transferencia. \n2- Efectivo.')

}

switch (pagoLibros) {
    case 1: 
        alert ('Seleccionaste para pagar con Transferencia')
        console.log ('El valor a pagar no tendra descuento incluido')
        break

    case 2: 
        alert ('Seleccionaste para pagar en Efectivo')
        console.log ('El valor a pagar tendra un descuento del 10%')
        break
    default: 
    alert ('no valido')
}

alert ('Gracias por su compra')

