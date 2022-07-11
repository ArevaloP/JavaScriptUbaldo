let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');//No recomendable

const carros = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(carros);

//Acceder a los elementos de un arreglo
console.log(carros[0]);
console.log(carros[2]);

//Recorrer un arreglo
for(let i = 0; i < carros.length; i++){
    console.log( i + ': ' + carros[i]);
}

//Modificar elementos de un arreglo
carros[1] = 'Porsche';

console.log(carros[1]);
console.log(carros);

//Agregar elementos a un arreglo
carros.push('Mercedez Benz');
console.log(carros);

console.log(carros.length);
carros[carros.length] = 'Audi';

console.log(carros);

carros[6] = 'Cadillac';
console.log(carros);

//Preguntar si es un arreglo
console.log(typeof carros); //No noa sirve por que dice que es objeto

//Estas son las propias
console.log(Array.isArray(autos));

console.log(autos instanceof Array);

