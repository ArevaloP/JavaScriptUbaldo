let persona = {
    nombre: "Georffrey",
    apellido: "Arevalo",
    email: "garevalo@mail.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona.email);

//Formas de crear Objetos.
let persona2 = new Object();
persona2.nombre = "Elian";
persona2.apellido = "Arevalo";
persona2.direccion = "Benhabitad";
persona2.telefono = "52256398";

console.log(persona2.telefono);
console.log(persona2.direccion);


