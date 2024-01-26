
/**
 * 
 * @param {String} carta 
 * @returns 
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10  :valor * 1;

}