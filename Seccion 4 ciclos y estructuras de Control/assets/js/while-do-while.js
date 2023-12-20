

const carros = ['Ford', 'Toyota', 'RedBull', 'Ferrari', 'Mercedez'];
console.warn('=====While======')
let i = 0;
//las condiciones con el while debe ser verdaderas
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}
//aqui finalizamos el ciclo
console.log('===========')
let j = 0;
while (j < carros.length) {
    if (j === 1) {
        break;
    }
    console.log(carros[j]);
    j++;
}

//aqui  hacemos que el ciclo continue
console.log('===========')
let z = 0;
while (z < carros.length) {
    if (z === 1) {
        z++;
        continue;
    }
    console.log(carros[z]);
    z++;
}


//si las codiciones son falsas el ciclo se cierra tales como estas
//undefine
//null
//false


console.warn('=====do-while======')
let k =0
do {
    console.log(carros[k]);
    k++;
} while (carros[k]);