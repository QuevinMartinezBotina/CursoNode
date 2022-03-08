const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser de tipo number";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  .option("t", {
    alias: "tope",
    type: "number",
    demandOption: true,
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "El tope debe ser de tipo number";
    }
    return true;
  }).argv;
/*
 *Ejerccio de table de multiplicar
 */

console.clear();

console.log(argv);

console.log("base:yargs", argv.base);

/* const [, , arg3 = "base=5"] = process.argv;
const [, table = 5] = arg3.split("=");

 const table = 9;
*/

crearArchivo(argv.b, argv.l,argv.t)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.error(err));
