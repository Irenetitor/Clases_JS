import {
  father,
  variable,
  parameters,
  son,
  grandSon,
  Puppy,
  Kitten,
  mascota,
} from "./clases.js";

const variable_father = new father();

console.log(variable.propiedad);

console.log(variable_father.dog());

const variable_parameter = new parameters("pepito");
console.log(variable_parameter.imprimirNombre("fernando"));

const otroObjeto = new parameters("Irene");
console.log(otroObjeto.imprimirNombre("Marina"));

const nuevoObjeto = new parameters("Laura");
console.log(nuevoObjeto.imprimirNombre("Benito"));

const buddy = new son();
console.log(buddy.house());

const pets = [new Puppy(), new Kitten()];
pets.forEach((pet) => {
  console.log(pet.ruido());
});

const printgrandson = new grandSon();
console.log(printgrandson.house());

const nimascot = new mascota();
console.log(nimascot.mimascot(new Kitten()));
