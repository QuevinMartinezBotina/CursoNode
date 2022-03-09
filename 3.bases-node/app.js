const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

/*
 *Ejerccio de table de multiplicar
 */

console.clear();
/* 
console.log("base:yargs", argv.base); */

crearArchivo(argv.b, argv.l,argv.t)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.error(err));
