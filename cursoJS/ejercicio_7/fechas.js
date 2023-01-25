
// ejercicio 3

// Crea un archivo llamado fechas.js que contenga las siguientes líneas:

// - La fecha de hoy
const hoy = new Date();

// - La fecha de tu nacimiento
const nacimiento = new Date(1989, 1, 21);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const combinacion = hoy > nacimiento;

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const añoNacimiento = nacimiento.getFullYear();