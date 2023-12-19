


let a = 10
let b = a;
a = 30;

console.log({a ,b});

let juan = {nombre : 'Juan'};
let ana = juan;
ana.nombre = 'Ana'

console.log({juan, ana});


const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';

    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});


//solucion  al problema1
//cuando se quiera crear una "copia" de un objeto simpremente incluirlo entre llaves de la siguiente forma:
// Existe un operador especial para separar todas las propiedades y los valores de un objeto
//y ese operador es cononocido como "spread" el cual son "..."
let jose = {nombre : 'Jose'};
let laura = { ...jose } ;
laura.nombre = 'laura'

console.log({jose, laura});


//solucion del problema 2

const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Tony';

    return persona;
}

let peter1 = {nombre: 'Peter'};
let tony1 = cambiaNombre2(peter);

console.log({peter1, tony1});

//arreglos 
//problema
const frutas = ['manzanas', 'peras','platanos'];
const otrasfrutas = frutas;

otrasfrutas.push('Mango');

console.table({frutas, otrasfrutas});


//solucion
console.log('solucion1')
const frutas1 = ['manzanas', 'peras','platanos'];
//para inicialicar un timer

console.time('spredd');
const otrasfrutas1 = [...frutas1];
console.timeEnd('spredd');

otrasfrutas1.push('Mango');

console.table({frutas1, otrasfrutas1});

//solucion2
console.log('solucion2')
const frutas2 = ['manzanas', 'peras','platanos'];
console.time('slice');
const otrasfrutas2 = frutas2.slice();
console.timeEnd('slice');

otrasfrutas2.push('Mango');

console.table({frutas2, otrasfrutas2});
