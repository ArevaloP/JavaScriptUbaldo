//Constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona("Julio", "Arevalo", "jarevalo@mai.com");
console.log(padre);
console.log(padre.nombreCompleto());
padre.tel = '3125896574';
console.log(padre.tel);

let madre = new Persona("Mayde", "Prado", "mprado@mail.com");
console.log(madre);

padre.nombre = "Carlos";
console.log(padre);
console.log(madre);
console.log(madre.nombreCompleto());

//Formas de crear objetos constructores
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';


let miNumero = new Number(9);
let miNumero2 = 9;

let miBoolean = new Boolean(false);
let miBoolea2 = false;

let miArray1 = new Array([2, 3, 4]);
let miArray2 = [2, 3, 4];

let miFuncion = new Function();
let miFuncion2 = function(){};