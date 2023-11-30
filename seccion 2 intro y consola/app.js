//Clase N~ 13
// para depurar el codigo se tienen dos formas:
// 1. utilizando la opcion de debug en vscode, que es una herramienta integrada del editor
// 2. con un archivo de configuracion de nodejs llamado "launch.json" donde se pueden poner los parametros de entr
// 2. utilizando un browser y abriendo las pestañas de red (source) o consola (console), donde se pueden
//

console.log(console.log('Hola Mundo'))

let a = 15,
    b = 25,
    c = 'Hola ',
    d = 'Spiderman',
    e = a + b 

const saludo = c + d;



console.log('%c Mis variables', 'color:white; font-weight: bold');
console.log   ({ a });
console.warn  ({ b });
console.error ({ c });

c = 'Hola de nuevo'