// Crea un archivo JS que contenga las siguientes líneas:



// - Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 173;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMts = 1.73;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 63.5;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = Math.ceil(alturaMts);
console.log(alturaRedondeada);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
pesoRedondeada = Math.floor(pesoKg);
console.log(pesoRedondeada);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(sonIguales);