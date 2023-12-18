
//cuando una variable esta declarada  y esta igualada con {} significa que es un objeto
//para declararlo es decir como se llamara la variable y su valor ejemplo: nombre: 'tony'
//para ver el valor se tiene que llamar el  nombre de la variable seguido de . y el valor ejemplo
//console.log('Nombre', personaje.nombre)

let personaje = {
    nombre: 'Goku',
    apellido:'Saiyan',
    edad:150,
    poder:999999999999999999999999999,
    codeName: 'Son Goku',
    vivo: true,
    coords: {
        lat: 34.04,
        long: -118.70
    },
    trajes: ['tortuga', 'kaiosama', 'GO', 'Wiss', 'PG'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California',
    },
//para agregar caracteres especiales se debe hacer con el undescore, ( aunque no es recomendado agregar)
    ultima_pelicula: 'Pelea de Broly',
    'primera_pelicula': 'Pelea de sayayin',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);

//otra forma de imprimirlo es la siguiente
console.log('Nombre', personaje['apellido']);
console.log('Edad', personaje.edad);

console.log('Cordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);

//se necesita el numero dde trajes que tiene goku
console.log('# Trajes de Goku ', personaje.trajes.length);

//ultimo traje
//aqui lo señalamos
console.log('El ultimo traje es: ', personaje.trajes.length - 1);
//aqui sabemos cual es el nombre
console.log('El ultimo traje es: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log( 'Vivo', personaje[x]);

console.log('Ultima pelicula', personaje.ultima_pelicula);

console.log('primera pelicula', personaje['primera_pelicula']);


//mas detalles

//borrar una propiedad de un objeto
delete personaje.edad
console.log(personaje);

//trabajar un objeto como un arreglo

const entriesPares = Object.entries(personaje);

console.log(entriesPares);


//crear una nueva propiedad

personaje.casado=true;
let casado = personaje.casado;
console.log (casado);

//para hacer un bloqueo de las propiedades se utiliza lo siguiente

Object.freeze(personaje);
//esto so afecta a los subjetos si se desea conbloquearlos se debe escribir la sentencia

personaje.dinero= 9999999
console.log(personaje)

//se necesita ver todas las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

//se necesita ver todas los valores del objeto
const valores = Object.values(personaje);
console.log({valores});


