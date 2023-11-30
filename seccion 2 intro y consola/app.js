//clase N~10

//Este sirve para imprimir en consola
//console.log("Hola");
//este es para imprimir en el HTML
//document.write("Hola munfo");

//class M~11
//inicializar variablres
/*let a = 10;
var b = 10;
const c = 10;*/
//c  = 20 // no se puede redifinir el valor de una constante

//Diferencias
/*
let z = 10;
var y = 30;*/
//opcion A
/*let d = 15;
let e = 15;
let f = 15;
let g = 15;
let h = d + e ;*/

//Opcion b
/** let d = 15, e = 15, f = 15, g = 15, h = d + e ;*/

//Opcion C
/*let d = 15,
    e = 25,
    f = 35,
    g = 15,
    h = d + e 
console.log(h);*/

//Clase N°12
// mensajes de consola
//si se desea declarar una cadena se debe utilizar ''
let d = 15,
    e = 25,
    f = 'Hola ',
    g = 'Spiderman',
    h = d + e 

const saludo = f + g;

//forma  1
//console.log('d', d);
//console.warn('f', f);
//console.error('h', g);

//forma 2
/*console.log(`${'d'} ${d}`);
console.log('%c Mis variables', 'color:white; font-weight: bold');
console.log   ({ d });
console.warn  ({ f });
console.error ({ g });*/

// si se desea mostrar varias variables al mismo tiempo se puede hacer de la siguiente forma
//console.table({d, e, f, g, h });