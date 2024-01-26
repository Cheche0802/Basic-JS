
import _ from 'underscore';
import {crearDeck, pedirCarta,valorCarta, turnoComputadora} from './usecases/index.js'
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

    pedirCarta(deck);




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
        turnoComputadora(puntosjugador, puntosHTML, divCartaComputadora, deck= []);

    }else if (puntosjugador === 21){
        console.log('ganaste');
        btnPedir.disabled =true;
        btnStop.disabled =true
        turnoComputadora(puntosjugador, puntosHTML, divCartaComputadora, deck= []);
    }

})


btnStop.addEventListener('click', () => {

    btnPedir.disabled =  true;
    btnStop.disabled =  true;
    turnoComputadora(puntosjugador, puntosHTML, divCartaComputadora, deck= []);
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

