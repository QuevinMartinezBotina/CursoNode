const fs = require("fs");
/* import { writeFile } from 'fs'; */

const crearArchivo = async (table = 5) => {
  try {
    console.log("==============");
    console.log("Tabla de multiplicar del ", table);
    console.log("==============");
    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${table} x ${i} = ${table * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`table-${table}.txt`, salida);
    return `archivo table-${table}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};


