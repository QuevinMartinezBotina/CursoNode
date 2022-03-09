const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la tabla de multiplicar deseada",
  })

  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Imprime la tabla en consola",
  })
  .option("t", {
    alias: "tope",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "El tope hasta el que queremos que llegue la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "El tope debe ser de tipo number";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser de tipo number";
    }
    return true;
  }).argv;

module.exports = argv;
