let inquirer = require("inquirer");
const Tarea = require("../models/Tarea");
const color = require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".green}. Crear una tarea`,
      },
      {
        value: "2",
        name: `${"2".green}. Listar tareas`,
      },
      {
        value: "3",
        name: `${"3".green}. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4".green}. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5".green}. Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".green}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0".green}. Salir`,
      },
    ],
  },
];

const preguntaPausa = [
  {
    type: "input",
    name: "enter",
    message: `Presione ${"ENTER".green} para continuar`,
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("======================".green);
  console.log("  Seleccione una opción".green);
  console.log("======================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  console.log("\n");
  await inquirer.prompt(preguntaPausa);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
};
