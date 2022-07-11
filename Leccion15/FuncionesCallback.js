function miFuncion1(){
    console.log("funcion1");
}

function miFuncion2 (){
    console.log("funcion2");
}

miFuncion2();
miFuncion1();

//Uso de unciones Callback
let imprimir = function(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(2, 3, imprimir);

//Llamadas asíncronas con el uso de setTimeOut
function miFuncionCallback(){
    console.log("Saludo asíncrono después de 3 segundos...");
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function(){console.log("Saludo asíncrono 2")}, 4000);

setTimeout(()=>console.log("Saludo asíncrono 3"), 1000);

