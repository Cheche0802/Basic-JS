const miFuncion = (() => {
    'use strict';
  
    let deck = [];
    const typeOfCards = ["C", "H", "D", "S"],
          uniques = ["A", "J", "Q", "K"];
  
   let puntosJugadores = [];
  
    //Referencias del html
    const btnPedir = document.querySelector("#btnPedir"),
          btnStop = document.querySelector("#btnStop"),
          btnNuevoJuego = document.querySelector("#btnNew"),
          puntosHTML = document.querySelectorAll("small"),
          divCartasJugadores = document.querySelectorAll(".divCartas");
  


      const inicialziarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
          for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
          }

          btnPedir.disabled = false;
          btnStop.disabled = false;
          
          puntosHTML.forEach(elem => elem.innerText = 0);
          divCartasJugadores.forEach(elem => elem.innerHTML = '');
        
      }

    // create the deck with all cards
    const crearDeck = () => {

      deck = [];

      for (let i = 2; i <= 10; i++) {
        for (let type of typeOfCards) {
          deck.push(i + type);
        }
      }

      for (let type of typeOfCards) {
        for (let unique of uniques) {
          deck.push(unique + type);
        }
      }

      return _.shuffle(deck);
    };
  
    // Esta funcion permite Pedir carta
  
    const pedirCarta = () => {

      if (deck.length === 0) {
        throw "No hay cartas en el deck";
      }

      return deck.pop();
    };

    //Esta funcion sirve para obtener el valor de la carta
    const valorCarta = (carta) => {
      const valor = carta.substring(0, carta.length - 1);  
      return  (isNaN(valor) ) ? 
              (valor === "A" ? 11 : 10) : 
              valor * 1;

    };

    //Turno: 0 = es igual al primer jugador y el ultimo sera "Siempre" de la computadora
    const acumularPuntos = (carta, turno) => {

      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];

      return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) =>{
      
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.className = "carta";
      divCartasJugadores[turno].append(imgCarta);

    }

    const determinarGanador = () => {

      const [puntosComputadora, puntosMinimos] = puntosJugadores;
      

      setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
          alert("la casa Gana");
        } else if (puntosMinimos > 21) {
          alert("La Casa ha ganado!");
        } else if (puntosComputadora > 21) {
          alert("El jugador ha ganado!");
        } else {
          alert(`La Casa ha ganado!`);
        }
      }, 100);
    }
  
    // turno computadora
    const turnoComputadora = (puntosMinimos) => {

      let puntosComputadora = 0;

      do {
        const carta = pedirCarta();
        puntosComputadora =  acumularPuntos(carta, puntosJugadores.length -1);
        crearCarta(carta, puntosJugadores.length -1)

      } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  
      determinarGanador(); 
    };
    //Eventos
  
    btnPedir.addEventListener("click", () => {
      const carta = pedirCarta();

      const puntosjugador = acumularPuntos(carta, 0);
      crearCarta (carta, 0);
      
  
      if (puntosjugador > 21) {
        console.warn("Perdiste");
        btnPedir.disabled = true;
        btnStop.disabled = true;
        turnoComputadora(puntosjugador);
      } else if (puntosjugador === 21) {
        console.log("ganaste");
        btnPedir.disabled = true;
        btnStop.disabled = true;
        turnoComputadora(puntosjugador);
      }
    });
  
    btnStop.addEventListener("click", () => {
      btnPedir.disabled = true;
      btnStop.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    });
  
    btnNuevoJuego.addEventListener("click", () => {
   

      inicialziarJuego();

    });


    return {
      nuevoJuego: inicialziarJuego
    }
  })();
  