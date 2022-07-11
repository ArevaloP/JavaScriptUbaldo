/*
Ejmplos de tipos de datos en JavaScript
*/
//Tipo de dato String
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 100;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "253146"
};
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){

}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase tambien es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);

//null Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato arreglo o array
var autos = ['BMW', 'Audi', 'Porsche'];
console.log(autos);
console.log(typeof autos);

//Tipo de datos, cadenas vacias
var z = '';
console.log(z);
console.log(typeof z);