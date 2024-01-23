

class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }
//metodo
    static mensaje (){
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }

        //Forma1
        nombre = '';
        codigo= '';
        frase= '';
        comida = '';

    constructor (nombre ='Jose', codigo='008', frase= 'La comida es lo mas importante'){

        this.nombre = nombre;
        this.codigo= codigo;
        this.frase= frase;

        Persona._conteo++;
    }

    //los metodos coumunmente van bajo el constructor

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${$this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es  ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// Se extiende de la clase persona y solo se utiliza el parametro que se necesita
class Heroe extends Persona {
    
    clan = 'Sin clan';

    constructor (nombre, codigo, frase){

        //primero se debe llamar el constructor del padre antes de declarar 
        super(nombre, codigo, frase); //llamado al constructor de la clase padre

        this.clan = 'The Avangers';
    }

    quienSoy(){
        console.log (`Soy ${this.nombre}, ${this.clan}`)
        //si se desea llamar tambien el metodo de la clase padre es de la siguiente manera
        super.quienSoy();
    }

}

const spiderman = new Persona('Peter', 'Spiderman', ' Un gran poder es una gran responsabilidad' );

const miles = new Heroe('Miles', 'Spiderman', ' Un gran poder es una gran responsabilidad' );

console.log(spiderman);

console.log(miles)

spiderman.quienSoy();

miles.quienSoy();

