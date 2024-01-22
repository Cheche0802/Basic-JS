

class Persona {

    
        //Forma1
        nombre = '';
        codigo= '';
        frase= '';
    constructor (nombre ='Jose', codigo='008', frase= 'La comida es lo mas importante'){

        this.nombre = nombre;
        this.codigo= codigo;
        this.frase= frase;
    }

    //los metodos coumunmente van bajo el constructor

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es  ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}



const spiderman = new Persona('Peter', 'Spiderman', ' Un gran poder es una gran responsabilidad' );

const ironman = new Persona('Tony', 'Ironman', 'yo soy iron man' );
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();

ironman.miFrase();

