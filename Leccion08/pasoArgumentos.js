//Paso por valor
let x = 10;

function cambiarValor(a){
    a = 20;
    return;
}
cambiarValor(x);

console.log(x);

//Paso por referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
};

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
    return;
}

cambiarValorObjeto(persona);
console.log(persona);