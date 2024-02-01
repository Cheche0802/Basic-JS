import html from './app.html?raw';


/**
 * @param {Srings} elements
 */
export  const App =(elementId) =>{

    //cuando la funcion App() se llama

    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;

        document.querySelector(elementId).append(app);
    })();




}