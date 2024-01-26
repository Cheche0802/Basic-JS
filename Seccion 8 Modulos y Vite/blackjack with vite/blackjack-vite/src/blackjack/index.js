
import _ from 'underscore';
import { crearDeck } from './usecases/create-deck.js';
import { pedirCarta } from './usecases/pedir-deck.js';
import { valorCarta } from './usecases/valor-carta.js';
/*
*  2C = two of clubs    (Treboles)
*  2D = two of diamonfs (Diamantes)
*  2H = two of Hearts   (Corazones)
*  2S = two of Spades   (Espadas)
*/

let deck = [];
const typeOfCards = ['C', 'H', 'D', 'S'];
const uniques = ['A', 'J', 'Q', 'K'];

let puntosjugador = 0,
    puntosComputadora = 0;

//Referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnStop = document.querySelector('#btnStop');
const btnNuevoJuego = document.querySelector('#btnNew');


const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartaComputadora = document.querySelector('#computadora-cartas');




deck = crearDeck(typeOfCards, uniques);

// Esta funcion permite Pedir carta


//ciclo para validar si el deck es igual a 0
//for (let i in deck) {
    pedirCarta(deck);
//}



// turno computadora

const turnoComputadora = (puntosMinimos) =>{

    do {
    
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);

    puntosHTML[1].innerText = puntosComputadora;

    //<img class="carta" src="assets/cartas/2C.png" alt="" srcset=""></img>

    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${carta}.png`;
    imgCarta.className = 'carta';
    //otra forma seria
    //imgCarta.classList.add('carta');
    divCartaComputadora.append(imgCarta);
        if (puntosMinimos > 21){
            alert('la computadora Gano')
            break;
        }




    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('la casa Gana');
        }else if (puntosMinimos > 21){
            alert('La Casa ha ganado!');
        }else if (puntosComputadora > 21) {
            alert('El jugador ha ganado!');
        }else{
            alert(`La Casa ha ganado!`);
        }
    }, 10);

}
//Eventos

btnPedir.addEventListener('click', () => {
    

    const carta = pedirCarta(deck);
    puntosjugador = puntosjugador + valorCarta(carta);

    puntosHTML[0].innerText = puntosjugador;

    //<img class="carta" src="assets/cartas/2C.png" alt="" srcset=""></img>

    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${carta}.png`;
    imgCarta.className = 'carta';
    //otra forma seria
    //imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosjugador > 21 ){
        console.warn('Perdiste');
        btnPedir.disabled =true
        btnStop.disabled =true
        turnoComputadora(puntosjugador);

    }else if (puntosjugador === 21){
        console.log('ganaste');
        btnPedir.disabled =true;
        btnStop.disabled =true
        turnoComputadora(puntosjugador);
    }

})


btnStop.addEventListener('click', () => {

    btnPedir.disabled =  true;
    btnStop.disabled =  true;
    turnoComputadora(puntosjugador);
})



btnNuevoJuego.addEventListener('click', () => {

    btnPedir.disabled =false;
    btnStop.disabled = false;

    deck = [];
    deck = crearDeck(typeOfCards, uniques);;

    puntosComputadora = 0;
    puntosjugador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartaComputadora.innerHTML = '';
    divCartasJugador.innerHTML= ''
})

