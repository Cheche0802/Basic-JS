(() => {
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
          divCartasJugador = document.querySelector("#jugador-cartas"),
          divCartaComputadora = document.querySelector("#computadora-cartas");
  


      const inicialziarJuego = ( numJugadores = 2) => {
        deck = crearDeck();
          for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
          }
           console.log({puntosJugadores});
        
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

    const acumularPuntos = () => {

    }
  
    // turno computadora
    const turnoComputadora = (puntosMinimos) => {

      do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
  
        puntosHTML[1].innerText = puntosComputadora;
  
        //<img class="carta" src="assets/cartas/2C.png" alt="" srcset=""></img>
  
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.className = "carta";
        //otra forma seria
        //imgCarta.classList.add('carta');
        divCartaComputadora.append(imgCarta);
        if (puntosMinimos > 21) {
          alert("la computadora Gano");
          break;
        }
      } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  
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
      }, 10);
    };
    //Eventos
  
    btnPedir.addEventListener("click", () => {
      const carta = pedirCarta();
      puntosjugador = puntosjugador + valorCarta(carta);
  
      puntosHTML[0].innerText = puntosjugador;
  
      //<img class="carta" src="assets/cartas/2C.png" alt="" srcset=""></img>
  
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.className = "carta";
      //otra forma seria
      //imgCarta.classList.add('carta');
      divCartasJugador.append(imgCarta);
  
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
      turnoComputadora(puntosjugador);
    });
  
    btnNuevoJuego.addEventListener("click", () => {
      btnPedir.disabled = false;
      btnStop.disabled = false;

      inicialziarJuego();
  
     // deck = [];
      //deck = crearDeck();
  
      puntosComputadora = 0;
      puntosjugador = 0;
      puntosHTML[0].innerText = 0;
      puntosHTML[1].innerText = 0;
  
      divCartaComputadora.innerHTML = "";
      divCartasJugador.innerHTML = "";
    });
  })();
  