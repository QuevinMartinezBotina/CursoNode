const Tarea = require("./Tarea");
const color = require("colors");

class Tareas {
  _listado = {};

  //para transformar objeto a arreglo
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    let i = 0;

    console.log();
    this.listadoArr.forEach((tarea) => {
      ++i;
      if (tarea.completadoEn == null) {
        console.log(`${color.green(i)}. ${tarea.desc} :: ${"pendiente".red}`);
      } else {
        console.log(
          `${color.green(i)}. ${tarea.desc} :: ${"completado".green}`
        );
      }
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;

    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea; //lo desestruturamos paar sacar lso datos, que salen de la tarea
      const estado = completadoEn ? completadoEn.green : "Pendiente".red; //si completado tiene algo es porque se completo, de lo contrario sera NULL

      if (!!completadoEn === completadas) {
        //si es diferente a true, sería un null, osea no completado
        ++contador;
        console.log(`${contador}. ${desc} :: ${estado}`);
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
