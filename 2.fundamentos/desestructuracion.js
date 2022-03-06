const deadpool = {
  nombre: "Wade",
  apellido: "Wilson",
  poder: "Regeneración",
  edad: 50,
  getNombre() {
    console.log(`${this.nombre} ${this.apellido} ${this.poder}`);
  },
};

/*
 * Vamos a ver algunos ejemplos de como hacer lo mismo pero menos codigo
 */

/* Ajemplo 1 */

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */

const { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

/* Ejemplo 2 */

function imprimirHeroe({ nombre, apellido, poder, edad = 0 }) {
  console.log("Desestruturacion " + nombre, apellido, poder);
}

imprimirHeroe(deadpool);

/* Ejemplo 3 */
const heroes = ["Superman", "Spiderman", "batman"];
const villanos = ["Galactus", "Venom", "Joker"];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */

const [h1, h2, h3] = heroes;

console.log(h1, h3);

/* 
todo: Ejercicio
*/

const arrays = [heroes, villanos];

const [h] = arrays;

console.log(h);
