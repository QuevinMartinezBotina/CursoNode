/* setTimeout(() => {
  console.log("Hola mundo desde call back");
}, 3000);

console.log("Adios mundo fuera de callback"); */

const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Santiago",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUsuarioByID(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});

/* 
    todo: Ejercicio el paciente callback 
*/

const paciente = (medicina) => {
  if (medicina == "Si hay") {
    console.log(
      "Parcerito, lo bueno es que se salvo, lo malo, esta en LATAM 💃"
    );
  } else {
    console.log("Lo siento, nada que hacer, al menos escapo de latam ☠");
  }
};

const hospital = (callback) => {
  var medicina = "Si hay";
  callback(medicina);
};

hospital(paciente);
