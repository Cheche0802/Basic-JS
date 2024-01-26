import { crearDeck } from "./create-deck";


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} deck es un arreglo de strings
 * 
 * @returns {<String>} retorna la carta del deck
 */
// Esta funcion permite Pedir carta
export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const borrarCarta = deck.pop()


    return borrarCarta
}