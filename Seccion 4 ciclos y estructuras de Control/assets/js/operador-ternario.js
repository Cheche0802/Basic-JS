

const dia = 1;
const horaActual = 10;

let  horaApertura;
let mensaje; //esta abierto, Esta cerrado, hoy abrimos a las XX

if (dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApertura = 9
}else {
    console.log('Dia de semana');
    horaApertura = 11
}


if (horaActual >= horaApertura){
    mensaje = 'esta Abierto'
}else{
    mensaje = `Esta cerrado. hoy abrimos a las ${horaApertura}` ;
}

console.log({horaApertura, mensaje})


//optimizando1
 if ([0,6].includes(dia) ) {
        console.log('Fin de semana');
        horaApertura = 9
    }
else {
    console.log('Dia de semana');
    horaApertura = 11
}


if (horaActual >= horaApertura){
    mensaje = 'esta Abierto'
}else{
    mensaje = `Esta cerrado. hoy abrimos a las ${horaApertura}` ;
}

console.log({horaApertura, mensaje})


//optimizacion2 operador ternario
//aqui decimos basado en la hora de apertura  si el dia es sabado o domingo la hora de abrir sera a las 9 de lo contrario sera a las  11
horaApertura = ( [0,6].includes(dia)) ? 9 : 11

if (horaActual >= horaApertura){
    mensaje = 'esta Abierto'
}else{
    mensaje = `Esta cerrado. hoy abrimos a las ${horaApertura}` ;
}

mensaje = (horaActual >= horaApertura) ? 'esta Abierto' :  `Esta cerrado. hoy abrimos a las ${horaApertura}` ;

console.log({horaApertura, mensaje})