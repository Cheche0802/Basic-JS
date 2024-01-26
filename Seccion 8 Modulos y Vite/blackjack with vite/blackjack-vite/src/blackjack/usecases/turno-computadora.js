import { pedirCarta } from "./pedir-deck";
import { valorCarta } from "./valor-carta";

//Turno de computadora
/**
 * 
 * @param {Number} puntosMinimos que la computadora necesita para ganr
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartaComputadora, deck= []) =>{
    
    let puntosComputadora = 0;

    do {
    
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);

    puntosHTML.innerText = puntosComputadora;

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