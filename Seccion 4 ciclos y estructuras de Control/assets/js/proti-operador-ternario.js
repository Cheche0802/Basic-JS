

const elMayor = (a ,b )=>{
    return (a > b) ? a : b;
}

console.log(elMayor(0,15));

//optimizando la funcion
const elMayorEs = (a ,b )=>  (a > b) ? a : b; 


console.log(elMayorEs(20,15));

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares'

console.log(tieneMembresia(false));

//-------------

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() =>'Nick Furry')(),
    elMayor(40, 35)
];

console.log(amigoArr);

//varias condiciones

const nota = 65; // A+ A B+ 
const grado=    nota >= 95 ? 'A+' :
                nota >= 90 ? 'A'  :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B'   :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C'   :
                nota >= 65 ? 'D+' :
                'F';

console.log(nota, grado);