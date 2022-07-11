"use strict";
let resultado = 0;

try{

    let x = 0;
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Tenemos una cadena vacia';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';
    
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("Ejecutando bloque finally...");
}

console.log('HI');