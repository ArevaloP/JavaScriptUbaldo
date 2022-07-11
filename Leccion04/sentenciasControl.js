let condicion = true;

if(condicion){
    console.log("Verdardero");
}else{
    console.log("Falso");
}

//Ejemplo
let numero = 3;

if(numero == 1){
    console.log("Uno");
}else if(numero == 2){
    console.log("Dos");
}else if(numero == 3){
    console.log("Tres");
}else  if(numero == 4){
    console.log("Cuatro");
}else{
    console.log("Numero desconocido.");
}

//Ejercicio
let mes = 9;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}else if( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
}else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}else if( mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}else{
    estacion = "Valor desconocido";
}

console.log(estacion);

//Ejercicio
let hora = 12;
let saludo;

if(hora >= 6 && hora <= 11){
    saludo = "Buenos días";
}else if(hora >= 12 && hora <= 18){
    saludo = "Buenas tardes";
}else if(hora >= 19 && hora <= 24){
    saludo = "Buenas noches";
}else if(hora >= 0 && hora < 6){
    saludo = "Durmiendo";
}else{
    saludo = "Hora desconocida";
}

console.log(saludo);
