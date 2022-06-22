alert ('Bienvendio a DataWriter, tienda de libros online. Le vamos a estar pidiendo algunos datos.');
const nombre = prompt ('Por favor, ingrese su nombre.');
console.log ('Hola ' + nombre);
let pagoEfectivo = 10;
let pagoCredito = 15;
let precioLibro= '500';

let generos = parseInt(prompt('¿Qué tipo de libro buscabas? \n 1- Terror. \n 2- Suspenso. \n 3- Ciencia Ficción. \n 4- Policial.'));
const terror = 1;
const suspenso = 2;
const cienciFiccion = 3;
const Policial = 4;

while (generos < 1 || generos > 4){
    alert ('Opcion incorrecta.');
    generos = prompt ('Elija una de las opciones dadas: \n 1- Terror. \n 2- Suspenso. \n 3- Ciencia Ficción. \n 4- Policial.');
}

switch (generos) {
    case 1:
        console.log(`Seleccionaste el genero ${terror} "Terror"`);
        break;
    case 2:
        console.log(`Seleccionaste el genero ${suspenso} "Suspenso"`);
        break;
    case 3:
        console.log(`Seleccionaste el genero ${cienciFiccion} "Ciencia Ficción"`);
        break;
    case 4:
        console.log(`Seleccionaste el genero ${Policial} "Policial".`);
        break
    default:
        console.log("saliste");

 }


let cantidadDeLibros = parseInt(prompt('¿Cuantos libros desea llevar?'));

let formaDePago = parseInt(prompt('Ingrese la forma de pago: \n 1- Efectivo. \n 2- Con tarjeta de debito. \n 3- Con tarjeta de credito.'));

while (formaDePago < 1 || formaDePago > 3) {
    alert ('No ingreso una opcion correcta.')
    formaDePago = prompt('Selecciones la opción correspondiente: \n 1- Efectivo. \n 2- Con tarjeta de debito. \n 3. Con tarjeta de credito.')
}

switch (formaDePago) {
    case 1: 
        alert ('Seleccionaste para pagar con efectivo y vas a tener un descuento de ' + pagoEfectivo + '%.');
        console.log('Tendras un descuento del 10%.');
        console.log ('Vas a pagar un total de: ' + calcularEfectivo());
        break
    case 2: 
        alert ('Seleccionaste para pagar con Tarjeta de debito.');
        console.log ('Vas a pagar el valor total del producto.');
        console.log ('El precio de tu producto es de ')
        break
    case 3: 
        alert ('Seleccionaste para pagar con Tarjeta de Credito y vas a tener un interes del ' + pagoCredito + '%.');
        console.log ('A tu precio se le incrementara un 15%.');
        console.log('Vas a pagar un total de: ' + calcularCredito());
        break;
}

function calcularEfectivo (cantidadDeLibros, precio) {
    total = cantidadDeLibros * precioLibro; 
    descuento = (precio * 10) / 100;
    precioFinal = total - descuento; 
    return total;
}

function calcularDebito (cantidadDeLibros, precio) {
    precio = cantidadDeLibros * precioLibro ;
    return precio;
}

function calcularCredito (cantidadDeLibros, precio) {
    total = cantidadDeLibros * precioLibro;
    interes = (precio * 15) / 100;
    precioFinal = precio + interes;
    return total;
}


let libros = [
    {
        id: '1',
        nombre: 'La torre oscura 1',
        autor: 'Sthepen King',
        paginas: '288',
        precio: '$1785',
        genero: 'policial'
    },
    {
        id: '2',
        nombre: 'El señor de los anillos',
        autor: 'J.R.R. Tolkien',
        paginas: '357',
        precio: '$1400',
        genero: 'ciencia ficcion'
    },
    {
        id: '3',
        nombre: 'Nacidos de la bruma',
        autor: 'J.R.R. Tolkien',
        paginas: '987',
        precio: '$3750',
        genero: 'suspenso'
    },
    {
        id: '4',
        nombre: 'El cementerio de animales',
        autor: 'Stephen King',
        paginas: '325',
        precio: '$1400',
        genero: 'terror'
    }

]

console.log (libros)

alert ('Gracias por visitar DataWriter')