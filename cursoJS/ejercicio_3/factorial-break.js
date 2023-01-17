
// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let factorial = 1;

while (num > 1) {
    factorial *= num;
    num--;
    if (num === 1) {
        break;
    }
}

console.log("El numero factorial de 10 es: " + factorial);
