


class Singleton {

    static instancia;//undefined

    nombre = '';

    constructor(nombre = '') {

        console.log(Singleton.instancia);

        //es preferible evaluar un valor como booleano en ve de que sea con un valor tipo "undefined" o "null"
        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);
        
        if (!!Singleton.instancia) {
           return Singleton.instancia
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }

}


const instancia1 = new Singleton('Spiderman');
const instancia2 = new Singleton('Ironman');
const instancia3 = new Singleton('Blackwidow');

console.log(`Nombre en la instancia es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia es: ${instancia3.nombre}`);

