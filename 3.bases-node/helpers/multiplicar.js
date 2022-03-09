const fs = require("fs");
const colors = require("colors/safe");

const crearArchivo = async (table = 5, listar = false, tope = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= tope; i++) {
      salida += `${table} x ${i} = ${table* i}\n`;
      consola += `${colors.yellow(table)} x ${colors.blue(i)} = ${colors.green(table * i)}\n`;
    }

    if (listar == true) {
      console.log("==============");
      console.log(colors.rainbow("Tabla de multiplicar del: "), colors.green(table));
      console.log("==============");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/table-${table}.txt`, salida);
    return `archivo table-${table}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
