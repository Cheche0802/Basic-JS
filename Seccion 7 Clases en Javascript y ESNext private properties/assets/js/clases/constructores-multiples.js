

class Persona {

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }
    
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;


    }

    

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}


const nombre1= 'Jose',
      apellido1='Ramirez',
      pais1= 'Venezuela';


const lau = {
    nombre: 'laura',
    apellido: 'Velasquez',
    pais: 'Islandia',
}


const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(lau);

persona2.getInfo();


persona1.getInfo();

