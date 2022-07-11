let persona = {
    nombre: "Georffrey",
    apellido: "Arevalo",
    email: "garevalo@mail.com",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona['apellido']);

//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar y eliminar propiedades
persona.telefono = "36547896";
console.log(persona);

delete persona.telefono;
console.log(persona);
