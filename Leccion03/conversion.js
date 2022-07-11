let miNumero = "12";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("La persona puede votar. ");
}else{
    console.log("Muy joven para votar. ")
}

let resultado = (edad >= 18 ) ? "Puede votar." : "No puede votar.";
console.log(resultado);