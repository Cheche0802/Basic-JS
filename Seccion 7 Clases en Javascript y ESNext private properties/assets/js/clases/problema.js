


const jos = {
    nombre: 'Jose',
    edad: 30,
    imprimir () {
        console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`);
    }
}

const lau = {
    nombre: 'Laura',
    edad: 20,

    imprimir () {
        console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`);
    }
}
//antigua forma
//jos.imprimir();

//se realizo un procesos cuando los objetos tienes las mismas propiedades
function Persona(nombre, edad) {
    
    console.log ("Se ejecuto esta linea");

    this.nombre = nombre;
    this.edad = edad;

   this.imprimir= function () {
        console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`);
    }
}


const pile = new Persona("Seluth", 50);
const luna = new Persona("Luna", 70);
console.log(pile);

pile.imprimir();
luna.imprimir();
