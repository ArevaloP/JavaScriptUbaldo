//Operadoor y (&&)
let a = 12;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= 10){
    console.log("Dentro del rango.");
}else{
    console.log("Fuera de rango.");
}

//Operador o (||)
let vacaciones = false, diaDescanso = false;

if( vacaciones || diaDescanso ){
    console.log("El padre puede asistir al evento.");
}else{
    console.log("El padre no puede asistir al evento. ");
}
