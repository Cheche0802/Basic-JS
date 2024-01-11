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
    puntoscomputadora = 0;

const puntosHTML = document.querySelectorAll('small');

//Referencias del html
const btnPedir = document.querySelector('#btnPedir');


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


//Eventos

btnPedir.addEventListener('click', () => {
    

    const carta = pedirCarta();
    puntosjugador = puntosjugador + valorCarta(carta);

    puntosHTML[0].innerText = puntosjugador;

    
})