
//esta es una forma pero no la tradicional
const arr =  new Array(10);
console.log(arr);

//esta es la forma
const arr1 = []
console.log(arr1)


let videojuegos = ['FF8', 'DBZ', 'legion of legend'];
console.log({ videojuegos })

//si se desea solo una posicion en especifico se imnprime la variable y entre corchetes se incluye la posicion
console.log(videojuegos[0]);

//arreglo mixto
let arregloCosas =  [
    true,
    123,
    'Jose',
    1 + 2,
    function(){},
    ()=>{},
    { a:1},
    ['X', 'Megaman', 'Zero', 'DR light', ['DR willy', 'Woodman' ]],
];

console.log({arregloCosas})

console.log(arregloCosas[7])
console.log(arregloCosas[7][3])
console.log(arregloCosas[7][4][1])

