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

const getInfoUser = async (id) => {
  try {
    const empleado = getEmpleado(id);
    const salario = getSalario(id);

    return console.log(`${empleado} tiene un salario de ${salario}`);
  } catch (error) {
    throw error;
  }
};

const id = 1;

getInfoUser(id)
  .then(resolve => {
    console.log(`Todo bien`);
    console.log(resolve);
  })
  .catch((err) => {
    console.log(`Todo mal`);
    console.error(err);
  });
