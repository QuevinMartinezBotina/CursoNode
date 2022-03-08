const fs = require("fs");
/* import { writeFile } from 'fs'; */

const crearArchivo = async (table = 5, listar = false, tope = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= tope; i++) {
      salida += `${table} x ${i} = ${table * i}\n`;
    }

    if (listar == true) {
      console.log("==============");
      console.log("Tabla de multiplicar del ", table);
      console.log("==============");
      console.log(salida);
    }

    fs.writeFileSync(`table-${table}.txt`, salida);
    return `archivo table-${table}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
