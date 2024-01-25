import _ from 'underscore';
 

// create the deck with all cards
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {
    for( let i=2; i<= 10; i++){
        for (let type of tipoDeCarta) {
            deck.push(i + type);
        }
        
    }
    for (let type of tiposEspeciales) {
      for (let unique of uniques){
        deck.push(unique + type);
      }
    }

  //  console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}
