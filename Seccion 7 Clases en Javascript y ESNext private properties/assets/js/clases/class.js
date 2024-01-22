

class Persona {
    //orden
    //1 propiedad y metodos estaticos
    //2 propiedades de la clase
    //3 constructor
    //4  set y gets
    //5 metodos
    //propiedades privadas

        //Forma1
        nombre = '';
        codigo= '';
        frase= '';
        comida = '';

    constructor (nombre ='Jose', codigo='008', frase= 'La comida es lo mas importante'){

        this.nombre = nombre;
        this.codigo= codigo;
        this.frase= frase;
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



const spiderman = new Persona('Peter', 'Spiderman', ' Un gran poder es una gran responsabilidad' );

const ironman = new Persona('Tony', 'Ironman', 'yo soy iron man' );
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Pie de cereza de la tia May';
// Esto se puede hacer pero no es recomendado 
spiderman.nemesis = 'Duende Verde';

console.log(spiderman);
