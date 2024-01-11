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

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartaComputadora = document.querySelector('#computadora-cartas');


// create the deck with all cards
const crearDeck = () => {
    for( let i=2; i<= 10; i++){
        for (let type of typeOfCards) {
            deck.push(i + type);
        }
        
    }
    for (let type of typeOfCards) {
      for (let unique of uniques){
        deck.push(unique + type);
      }
    }

  //  console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

crearDeck();

// Esta funcion permite Pedir carta

const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const borrarCarta = deck.pop()


    return borrarCarta
}

//ciclo para validar si el deck es igual a 0
//for (let i in deck) {
    pedirCarta();
//}


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10  :valor * 1;


   /* if (isNaN(valor)){

        console.log('no es un numero');
        puntos = (valor === 'A') ? 11 : 10;

    }else{
        console.log('Es un numero');
        puntos = valor * 1 ;
    }*/

}
// turno computadora

const turnoComputadora = (puntosMinimos) =>{

    do {
    
    const carta = pedirCarta();
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
        break;
    }

    if (puntosMinimos < puntosComputadora){
        console.log('gano el jugador');
    }


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
}

//Eventos

btnPedir.addEventListener('click', () => {
    

    const carta = pedirCarta();
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

//todo borrar
