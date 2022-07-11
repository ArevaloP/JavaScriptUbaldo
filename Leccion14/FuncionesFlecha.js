let miFuncion = function(){
    console.log("Saludos desde la funcion...");
}

//Las funciones flecha no aplica el concepto de hoisting
// const miFuncionFlecha = ()=>{
//     console.log("Saludos desde la funcion flecha...");
// }

//const miFuncionFlecha = () => console.log("Saludos desde función flecha...");

//miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funci[on flecha';
// }

const saludar = () => 'Saludos desde función flecha';

console.log(saludar());

const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Perez'});
console.log(regresarObjeto());

const funcionConParametrosClasico = (mensaje) => {
    console.log(mensaje);
}

//const funcionConParametros = (mensaje) => console.log(mensaje);

const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('Saludos con parametros');

//const funcionConParametrosVarios = (op1, op2) => op1 + op2;

const funcionConParametrosVarios = (op1, op2) =>{
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
} 

console.log(funcionConParametrosVarios(2,3));