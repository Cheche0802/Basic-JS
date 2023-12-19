
// funcion base
function crearPersona(nombre, apellido) {
    return {
        //aqui se esta devolviendo un objeto literal 
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('Jose', 'Monterrey');

console.log(persona);


//funcion optimizada

function crearPersona2(nombre, apellido) {
    return {   nombre, apellido,   }
}

const persona2 = crearPersona2('Daniel', 'Hidalgo');

console.log(persona2);

//para retornar un  objeto se debe incluir entre parentesis
const persona3 = (nombre, apellido) => ({ nombre, apellido });
const personas = persona3('Daniel', 'Hidalgo');
console.log(personas);


function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Jose', 'SAludo');

//para imprimir los argunmentos en una funcion landa se debe hacer los siguiente
const imprimeArgumentos2 = (...args) =>{
    console.log(args);
}

imprimeArgumentos2(10, true, false, 'Jose', 'SAludos');

/* Esto no se puede hacer
const imprimeArgumentos3 = (...args, eddad) =>{
    console.log(args);
}

imprimeArgumentos(10, true, false, 'Jose', 'SAludos');*/

//si queremos que el ultimo argumento sea obligatorio debemos agregarlo al final de la lista de parametros
const imprimeArgumentos4 = (eddad, ...args) =>{
    console.log(args);
    console.log(`La edad es ${eddad}`);
    };

    imprimeArgumentos4(10, true, false, 'Jose', 'SAludos');

const imprimeArgumentos3 = (edad , ...args) =>{
    console.log({edad, args});
}

imprimeArgumentos3(10, true, false, 'Joses', 'SAludos');


    
const imprimeArgumentos5 = (...args) => { return args }

const arugumentos = imprimeArgumentos5(10, true, false, 'Jose', 'SAludos');
console.log(arugumentos);

//si se desea asignarle una informacion a cada valor del argumento se realiza lo siguiente
const imprimeArgumentos6 = (...args) => { return args }

const [edad, casado, vivo, nombre, saludo] = imprimeArgumentos6(10, true, false, 'Jose', 'SAludos');
console.log({edad, casado, vivo, nombre, saludo});


//si se desea solo un valor de la funcion se realiza lo siguiente
const {apellido} = persona3('Daniel', 'Hidalgo');
console.log({apellido})

//si se desea cambiar el valor
const {apellido: newApellido} = persona3('Daniel', 'Hidalgo');
console.log({newApellido})


//destructuraccion de objetos

let goku = {
    nombre: 'Goku',
    apellido:'Saiyan',
    edad:150,
    trajes: ['tortuga', 'kaiosama', 'GO', 'Wiss', 'PG'],
    codeName: 'Kakaroto'
};

const imprimePropiedades = (personaje) =>{
    console.log( 'nombre ' , personaje.nombre );
    console.log( 'apellido ' , personaje.apellido );
    console.log( 'edad ' , personaje.edad );
    console.log( 'trajes ' , personaje.trajes );
    console.log( 'codeName ' , personaje.codeName );
}

imprimePropiedades(goku);

//optimizar 
const imprimePropiedades2 = ({nombre, apellido, edad, codeName, trajes}) =>{

    console.log ({nombre});
    console.log ({apellido});
    console.log ({edad});
    console.log ({codeName});
    console.log ({trajes});
}
console.log('imprimePropiedades2'),
imprimePropiedades2(goku);
