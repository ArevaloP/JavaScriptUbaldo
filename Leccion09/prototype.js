function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '4423211';

let padre = new Persona("Julio", "Arevalo", "jarevalo@mai.com");
padre.tel = '35698745';
console.log(padre.tel);

let madre = new Persona("Mayde", "Prado", "mprado@mail.com");
console.log(madre.tel);

//Metodo Call

