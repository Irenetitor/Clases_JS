import {
  computadora,
  Telefono,
  Libro,
  Vehiculo,
  Moto,
  Bicicleta,
  BicicletaElectrica,
  Piloto,
  Fruta,
  Calculadora,
  Estutiante,
  CuentaBancaria,
  Guerrero,
  Mago,
  Batalla,
  Abuelo,
  Padre,
  Hijo,
} from "./ejercicios.js";

const telefono = new Telefono();
console.log(telefono.llamar());

const miCompu = new computadora();
console.log(miCompu.marca);

const newLibro = new Libro();
console.log(newLibro.Leerlibro("Hugo"));

const milibro = new Libro("Harry Potter", "J.K. Rowling");
console.log(milibro.Leerlibro());

const miMoto = new Moto();
console.log(miMoto.arrancar());

const mipiloto = new Piloto();
const mivehiculo = new Vehiculo();
console.log(mipiloto.conducir(miMoto));

const Transportes = [new Vehiculo(), new Moto(), new Bicicleta()];
Transportes.forEach((transporte) => {
  console.log(transporte.arrancar());
});

const miFruta = new Fruta();
console.log(miFruta.nombre);

const miCalculador = new Calculadora();
console.log(miCalculador.sumar());

const oldEstudiante = new Estutiante("Ana", "Matematicas");
const newdEstudiante = new Estutiante("Luis", "Historia");
console.log(oldEstudiante.presentarse());
console.log(newdEstudiante.presentarse());

//--Nivel 3
const cuenta = new CuentaBancaria("Pedro", 100);
const resultado = cuenta.depositar(50);
console.log(resultado);

const caracteres = [new Guerrero(), new Mago()];
caracteres.forEach((caracter) => {
  console.log(caracter.atacar());
});

const miBatalla = new Batalla();
// console.log(caracteres[0].atacar(), caracteres[1].atacar());
console.log(miBatalla.iniciarPelea(caracteres[0], caracteres[1]));

const miAbuelo = new Abuelo();
const miPadre = new Padre();
const miHijo = new Hijo();

console.log(miAbuelo.dinero);
console.log(miPadre.dinero);
console.log(miHijo.dinero);
console.log(miHijo.gastar());

const Guerreros = [
  new Guerrero(),
  new Guerrero(),
  new Guerrero(),
  new Mago(),
  new Mago(),
];

const miArray = new Array();

Guerreros.map((guer) => {
  miArray.push(guer.atacar());
});

// Guerreros.forEach((gue) => {
//   miArray.push(gue.atacar());
// });
console.log(miArray);
