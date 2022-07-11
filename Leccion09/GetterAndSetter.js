const persona = {
    nombre: "Geoffrey",
    apellido: "Arevalo",
    email: "garevalo@mail.com",
    edad: 20,
    idioma: 'mx',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +  ' ' + this.apellido;
    }
}

//get
console.log(persona.nombreCompleto);
console.log(persona.lang)
persona.lang = 'es_co';
console.log(persona.lang);
console.log(persona.idioma);