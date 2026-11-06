export class father {
  variable = "db vcdb ";
  dog() {
    return "guau!";
  }
}

export const variable = {
  propiedad: "valor",
};

export class parameters {
  nombresito;
  constructor(nombre) {
    this.nombresito = nombre;
  }
  imprimirNombre(amigo) {
    const saludo = `hola ${this.nombresito} este es mi amigo ${amigo}`;
    return saludo;
  }
}

export class Dada {
  house() {
    return "my house is blue";
  }
}

export class son extends Dada {}

export class grandSon extends son {
  casa() {
    return "vendi la casa";
  }
}

export class Puppy {
  ruido() {
    return "guauu!";
  }
}

export class Kitten {
  ruido() {
    return "miau!";
  }
}

export class mascota {
  mimascot(animal) {
    return `este es mi gato y hace ${animal.ruido()}`;
  }
}
