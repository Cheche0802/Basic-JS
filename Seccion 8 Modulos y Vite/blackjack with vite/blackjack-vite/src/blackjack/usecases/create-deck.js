import _ from 'underscore';
 


export const crearDeck = (tipoDeCarta, tiposEspeciales) => {

    let deck = [];

    for( let i=2; i<= 10; i++){
        for (let type of tipoDeCarta) {
            deck.push(i + type);
        }
        
    }
    for (let type of tiposEspeciales) {
      for (let unique of tiposEspeciales){
        deck.push(unique + type);
      }
    }

    deck = _.shuffle(deck);
    return deck;

}
