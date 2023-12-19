
let a = 10;


if (a >=10) { //undefined, null , una asignacion
    console.log('a es mayor o igual a 10');
}else{
    console.log('a es menor o igual a 10');
}

console.log('fin del programa');

let b = 5;


if (b < 10) {
    console.log('b es menor a 10');
}

console.log('fin del programa');

const hoy = new Date(); //esto se crea para realizar una nueva instancia

let dia = hoy.getDay();

console.log({dia});

if (dia === 0) {
    console.log('Domingo');
}else if (dia === 1) {
    console.log('Lunes');
}else if (dia === 2) {
    console.log('Martes');
}else if (dia === 3) {
    console.log('Miercoles');
}else if (dia === 4) {
    console.log('Jueves');
}else if (dia === 5) {
    console.log('Viernes');
}else {
    console.log('Sabado');
}


//con arreglos
let dias = 6
if (dias <= 6  ) {
    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(semana[dias]);

//con objetos

const diaslestras = {
   0: 'Domingo',
   1: 'Lunes',
   2: 'Martes',
   3: 'Miercoles',
   4: 'Jueves',
   5: 'Viernes',
   6: 'Sabado',
}

console.log(diaslestras[dias]);
}else {
    console.log('dia no encontrado')
}



