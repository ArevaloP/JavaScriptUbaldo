class Persona {
  static contdorObjetosPersona = 0; //Aributos de la clase

  static get MAX_OBJECT() {
    return 5;
  }

  constructor(nombre, apellido) {
    if (Persona.contdorObjetosPersona < Persona.MAX_OBJECT) {
      this._idPersona = ++Persona.contdorObjetosPersona;
      this._nombre = nombre;
      this._apellido = apellido;
    }else{
        console.log("Se ha superado el numero maximo de objetos persona");
    }
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._idPersona + " " + this._nombre + " " + this._apellido;
  }

  //Sobreescritura del metodo toString de la clase padre (Object)
  toString() {
    //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
    //El metod que se ejecuta depende de la referencia del objeto
    //Si es de tipo padre o de tipo hijo
    return this.nombreCompleto();
  }

  static saludar() {
    console.log("Saludos desde la clase Persona con método static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  //Sobre escritura
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let persona1 = new Persona("Pedro", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Juan", "Ribero", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contdorObjetosPersona);

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contdorObjetosPersona);

console.log(Persona.MAX_OBJECT);

let persona3 = new Persona('Georffrey', 'Arevalo');
let persona4 = new Persona('Elian', 'Prado');
let persona5 = new Persona('Jaison', 'Arevalo');

console.log(persona5.toString());
