
// - Este archivo debe calcular el factorial de 10 utilizando un bucle while

let num = 10;
let factorial = 1;
while (num > 1) {
    factorial *= num;
    num --;
}

console.log("El factorial de 10 es: " + factorial)