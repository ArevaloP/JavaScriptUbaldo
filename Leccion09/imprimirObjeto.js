const persona = {
    nombre: "Geoffrey",
    apellido: "Arevalo",
    email: "garevalo@mail.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);

//For in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString)