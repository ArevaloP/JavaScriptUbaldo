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
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apelldio} 
                ${this._edad}`;//template string
    }
}