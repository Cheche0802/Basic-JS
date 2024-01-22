

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
}



const spiderman = new Persona('Peter', 'Spiderman', ' Un gran poder es una gran responsabilidad' );

const ironman = new Persona('Tonny', 'Iron man', 'yo soy iron man' );
console.log(spiderman);
console.log(ironman);
