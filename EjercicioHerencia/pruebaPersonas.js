class Persona{

    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apelldio = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apelldio;
    }

    set apellido(apellido){
        this._apelldio = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apelldio} ${this._edad}`;//template string
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//Prueba de la clase Persona
let persona1 = new Persona('Juan', 'Perez', 20);
console.log(persona1.toString());
let persona2 = new Persona('Julian', 'Arevalo', 19);
console.log(persona2.toString());

let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Gomez', 16, 2000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Miguel', 'Cervantes', 30, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Maria', 'Lara', 25, new Date());
console.log(cliente2.toString());