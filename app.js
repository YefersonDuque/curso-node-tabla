const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

/* Este console.clear() me sirve para que al momento de ejecutar 
en consola, limpie todo lo que hay enccima de ella.*/

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.hidden, 'creado'))
  .catch(err => console.log(err));
