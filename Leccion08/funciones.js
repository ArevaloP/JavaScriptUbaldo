//Declaracion de la función
function miFuncion(a, b){
    return (a + b);
}

let resultado = miFuncion(10, 11);
console.log(resultado);

//Funciones de tipo expresion o anonimas
let sumar = function(a, b){
    return a + b;
};

resultado = sumar( 5 , 6 );
console.log(resultado);


//Funcion Self Invoking
//No se puede reutilizar
(function (a, b){
    console.log("Ejecutando la función. Suma: " + (a + b));
})(3, 4);

console.log(typeof miFuncion);

//Funcion como un Objeto, por lo tanto tienen propiedades y metodos.
function funcion2(a, b){
    console.log(arguments.length);//Dice cuantos argumentos tiene la funcion, solo se puede utilizar en funciones.
    return a + b;
}
funcion2(2, 3);

var funcionTexto = funcion2.toString();
console.log(funcionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(2, 3);
console.log(resultado);