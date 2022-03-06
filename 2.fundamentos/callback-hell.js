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



getEmpleado = ( id,callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado.nombre);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

getSalario = (id, callback) => {
    const salario = salarios.find((s)=> s.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
      callback(`No existe salario de empleado con id ${id} `);
    }
};

const id = 3;

  getEmpleado(id, (err, empleado) => {
    if (err) {
      console.log("ERROR!");
      return console.log(err);
    }

    getSalario(id, (err, salario)=>{
      if (err) {
        return console.log(err);
      }

      console.log('El empleado ',empleado, ' tiene un salrio de: ',salario);

    });
  });
