
//una funcion se utiliza para reutilizar un procediomiento N cantidades de veces
//como recomendacion primero declarar la funcion y luego el llamado de la misma

function saludar() {
    console.log('Hola mundo');
}
saludar();

//una seguunda forma de declarar una funcion es la siguiente
//y tiene como definicion funcion anonima

const saludar2 = function(){
    console.log("Estoy aprendiendo a programar en JavaScript");
}

saludar2();

//una funcion tambien puede tener argumentos
function saludarPersona(nombre) {
    console.log('Hola ' + nombre);
}

saludarPersona('Daniel');


const saludarPersona2 = function(nombre){
    console.log("Estoy aprendiendo a programar en JavaScript " + nombre);
}

saludarPersona2('Jose');

//funciones de flecha o landa functions

const saludarFlecha= () => {
    console.log('Soy una función flecha');
}

saludarFlecha();


//para agregar un argumento


const saludarFlecha2 = ( nombre ) => {
    console.log('Soy una función flecha ' + nombre);
}

saludarFlecha2('laura');


//tambien se puede realizar de la siguiente forma

//para agregar un argumento se puede pero es recomendable agregarle los parentesis

const saludarFlecha3 =  nombre  => {
    console.log('Soy una función flecha ' + nombre);
}

saludarFlecha3('zuleimar');

//para el retorno de las funciones

function saludar4(nombre) {
    console.log('Hola mundo '+ nombre );
    return 10;
}
const returnSaludar = saludar4('Dante', 30, true, 'Venezuela');

console.log(returnSaludar);

console.log({returnSaludar});


function sumar(a , b) {
    return a + b
}

console.log(sumar (1 ,2 ));

//forma 1 de una funcion de flecha
const sumar2 = (a , b) => { return a + b }

console.log(sumar2 (10, 15));

//forma 2 de una funcion de flecha siempre y cuando el procedimiento sea de una sola linea
const sumar3 = (a , b) =>  a + b 
console.log(sumar3 (20, 25));


function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

//funcion flecha

const aleatorio = () => Math.random();
console.log(aleatorio() );


