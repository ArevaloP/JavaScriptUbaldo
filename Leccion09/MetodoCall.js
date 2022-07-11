const persona1 ={
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona2 = {
    nombre: "Maria",
    apellido: "Lara"
}

//Uso del metodo call
//metodo del persona1 con los datos de persona2
console.log(persona1.nombreCompleto('Lic.', '33669988'));

let arreglo = ['Ing', '11559933'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

//Metodo Apply
