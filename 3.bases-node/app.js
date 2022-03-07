const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').argv;
/*
 *Ejerccio de table de multiplicar
 */

console.clear();

console.log(process.argv);
console.log(argv);

console.log('base:yargs', argv.base);

/* const [, , arg3 = "base=5"] = process.argv;
const [, table = 5] = arg3.split("=");

 const table = 9;

crearArchivo(table)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.error(err)); */