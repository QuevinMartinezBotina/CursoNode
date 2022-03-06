const empleados = [
  {
    id: 1,
    nombre: "Santiago",
  },
  {
    id: 2,
    nombre: "Andres",
  },
  {
    id: 3,
    nombre: "Alex",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

getEmpleado = (id, callback) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);

    empleado
      ? resolve(empleado.nombre)
      : reject(`Empleado con id ${id} no existe`);
  });
};

getSalario = (id, callback) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    salario
      ? resolve(salario)
      : reject(`Salario de empleado con id ${id} no existe`);
  });
};

const id = 2;

/* 
? Estas vana s er formas de hace rla misma lavor cada vez con mejores códigos
*/

/*
 * Froma 1
 */
/* getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.error(err));

  getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.error(err)); */

/*
 *Forma 2
 */

getEmpleado(id).then((empleado) => {
  getSalario(id)
    .then((salario) => {
      console.log(`El empleado ${empleado} tiene salario de ${salario}`);
    })
    .catch((err) => console.error(err));
});
