//Valores por default de los parametros
let sumar = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

//Es flexible y no es necesario enviar los argumentos de todos las paramentros y se le puede pasar mas argumentos que parametros
let resultado = sumar(10, 12, 9);
//Se hace la suma con los valores por default
console.log(resultado);

//Ejemplo de sumar todos los argumentos
resultado = sumarTodo(3, 2, 8, 6, 18, 10, 33);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}