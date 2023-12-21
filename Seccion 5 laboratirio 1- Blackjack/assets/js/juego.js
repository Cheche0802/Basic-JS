/*
*  2C = two of clubs    (Treboles)
*  2D = two of diamonfs (Diamantes)
*  2H = two of Hearts   (Corazones)
*  2S = two of Spades   (Espadas)
*/

let deck = [];
const typeOfCards = ['C', 'H', 'D', 'S'];
const uniques = ['A', 'J', 'Q', 'K']
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


    console.log(deck);

    deck = _.shuffle(deck);

    console.log(deck);

    return deck;

}

crearDeck();