let a = 3, b = 2;

//Operadores aritmeticos
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicacion: " + z);

z = a / b;
console.log("Resultado de la division: " + z);

z = a % b;
console.log("Resultado de la operacion modulo o reciduo de la division: " + z);

z = a ** b;
console.log("Resultado de la potencia: " + z);

//Operadores de incremento y Decremento
//Pre-incremento
z = ++a;
console.log(a);
console.log("Resultado del pre-incremento: " + z);

//Post-incremento
z = b++;
console.log(b);
console.log("Resultado del post-incremento: " + z);

//Pre-decremento
z = --a;
console.log(a);
console.log("Resultado del pre-decremento: " + z);

//Post-decremento
z = b--;
console.log(b);
console.log("Resultado del post-decremento: " + z);


//Precedencia de operadores
let c = 1, d = 4;

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);


//Operadores de asignacion
a = 1;

//Operadores de asignacion compuesto
a += 3;
console.log(a);

a -= 3;
console.log(a);

a *= 3;
console.log(a);

a /= 2;
console.log(a);

a %= 2;
console.log(a);

a **= 4;
console.log(a);


//Operadores de comparacion
a = 3, b = 2, c = "3";

z = a == c;//Revisa si los valores son iguales sin importar el tipo
console.log(z);

z = a === c; //Revisa si los valores son iguales teniendo encuenta el tipo
console.log(z);

z = a != c;//Sin importar el tipo
console.log(z);

z = a !== c;//Importa el tipo
console.log(z);


//Operadores relacionales
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

