


const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negacion')
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true 


console.warn('AND');
console.log( true && true);//true
console.log( true && false);//false
console.log( true && !false);//true

console.log('=========');
console.log(regresaFalse() && regresaTrue()) //false
console.log(regresaTrue() && regresaFalse()) //false


console.log('====&&=====');

regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();


console.warn('OR');
console.log(true || false);
console.log(false || false);


console.log(regresaFalse() || regresaTrue()) //false
console.log(regresaTrue() || regresaFalse()) //false


console.warn('Asignaciones');

const soyUndefine = undefined;
const soyNull = null;
const soyFalso =  false;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso ||  soyUndefine || soyNull || 'ya no soy falso de nuevo';
const a5 = soyFalso ||  soyUndefine || regresaTrue() || 'ya no soy falso de nuevo' || true;


const a1 = true && 'Hola mundo' && 150
console.log ({a1 });

const a11 = false && 'Hola mundo' && 150
console.log ({a11 });

console.log ({a1, a2 });

console.log ({a1, a2, a3 });

console.log ({a1, a2, a3, a4 });
console.log ({a1, a2, a3, a5 });

if (true || true || true || true || false ) {
    console.log('Hacer algo');
}else{
    console.log ('No hacer nada')
}