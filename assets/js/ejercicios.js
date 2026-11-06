//--Ejer 1 y 2
export class computadora {
  marca = "Asus";
}
//--Ejer 3 y 4
export class Telefono {
  numero = 675940323;
  llamar() {
    return `Llamando al ${this.numero}`;
  }
}

//--Ejer 8
export class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  Leerlibro() {
    // return `Hola ${nameLector} espero que disfrutes la lectura`;
    return `Leyendo ${this.titulo} de ${this.autor}`;
  }
}

//--Ejer 13
export class Vehiculo {
  arrancar() {
    return "brum brum";
  }
}
export class Moto extends Vehiculo {}

export class Bicicleta extends Vehiculo {
  arrancar() {
    return "No tengo motor, pedalea!";
  }
}

export class BicicletaElectrica extends Bicicleta {}

export class Piloto {
  conducir(maquina) {
    return `Estoy conduciendo y hace ${maquina.arrancar()}`;
  }
}

export class Fruta {
  nombre = "manzana";
}

export class Calculadora {
  sumar() {
    return 5;
  }
}

//--Ejer 26

export class Estutiante {
  constructor(nomre, curso) {
    this.nomre = nomre;
    this.curso = curso;
  }
  presentarse() {
    return `Hola mi nombre es ${this.nomre} y voy al curso ${this.curso}`;
  }
}
//--Ejer 29
export class Animal {
  moverse() {
    return "Caminando";
  }
}
export class Pajaro extends Animal {
  moverse() {
    return "Volando";
  }
}
//--Nivel 3
export class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(cantidad) {
    this.saldo += cantidad;
    return this.saldo;
  }
}
//--Ejer 32
export class Guerrero {
  atacar() {
    return "Espadazo";
  }
}

export class Mago {
  atacar() {
    return "Bola de fuego";
  }
}

export class Batalla {
  iniciarPelea(luchador1, luchador2) {
    return `El luchador 1 ataco al jugador 2 mediante un ${luchador1.atacar()} y este le repondio el atacque mediante ${luchador2.atacar()}`;
  }
}
//--Ejer 34
export class Abuelo {
  dinero = 1000;
}

export class Padre extends Abuelo {
  dinero = 500;
}

export class Hijo extends Padre {
  gastar() {
    return this.dinero;
  }
}
//--Ejer 19
//--Ejer 20
//--Ejer 21
