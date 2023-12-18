let juegos = ['MK11', 'FF15', 'Mario', 'LoL', 'WOW'  ];

console.log('largo', juegos.length);

let primero = juegos[0];


//para obtener la ultima posicion se realiza lo siguiente
let ultimo = juegos[juegos.length - 1];

console.log(primero);
console.log(ultimo);

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

//para  añadir un elemento al arreglo al final del arreglo
let nuevoJuego = juegos.push("GTA");

console.log ({ nuevoJuego , juegos});

//para incluirlo al principio se hace lo siguiente
let newItem = juegos.unshift ("Halo") ;

console.log ({ newItem , juegos});

//para eliminar el ultimo elemento del arreglo
let borrarJuego = juegos.pop()
console.log ({ borrarJuego , juegos});


//borrar un elemento en una posicion especifica
//cuando el elemento esta entre{} esta computado

let posicion = 1

let juegosBorrados = juegos.splice(posicion, 2);
console.log ({ juegosBorrados , juegos});

//para saber en que posicion esta un elemento
let juegosIndex = juegos.indexOf('WOW');//esto es Casesensitive
console.log ({ juegosIndex , juegos});

