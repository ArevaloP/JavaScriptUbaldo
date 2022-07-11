let numero = 3;
let numeroTexto = "Valor desconocido";

switch( numero ){
    case 1:
        numeroTexto = "Uno";
        break;
    case 2:
        numeroTexto = "Dos";
        break;
    case 3:
        numeroTexto = "Tres";
        break;
    case 4:
        numeroTexto = "Cuatro";
        break;
    default:
        numeroTexto = "Valor desconocido";
        break;
}

console.log(numeroTexto);


//Ejercicio
let mes = 4;
let estacion;

switch( mes ){
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes desconocido";
        break;
}

console.log(estacion);
