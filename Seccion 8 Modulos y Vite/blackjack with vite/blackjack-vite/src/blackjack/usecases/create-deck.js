import _ from 'underscore';
 

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipoDeCarta ejemplo  ['C', 'H', 'D', 'S'];
 * @param {Array<String>} tiposEspeciales  ejemplo  ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {

  if(!tipoDeCarta) throw new Error('TiposDeCarta es obligatorio');
  if(tipoDeCarta.length === 0) throw new Error('TiposDeCarta tiene que ser un arreglo de string');

  if(!tiposEspeciales) throw new Error('tiposEspeciales es obligatorio');
  if(tiposEspeciales.length === 0) throw new Error('tiposEspeciales tiene que ser un arreglo de string');

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
