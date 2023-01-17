//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for 

let num = 10;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log( "El facorial de 10 es: " +factorial)