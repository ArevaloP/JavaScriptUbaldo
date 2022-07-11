class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetelles(){
        return `Empleado: nombre ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetelles(){
        return `Gerente: dpto ${this._departamento} ${super.obtenerDetelles()}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetelles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }else if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
        console.log(tipo._departamento);
    }else if(tipo instanceof Object){
        console.log("Es un objeto de tipo Object");
    }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Ricardo', 5000, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);
