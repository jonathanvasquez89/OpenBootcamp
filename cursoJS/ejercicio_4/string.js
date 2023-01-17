
// Crea un archivo JS que contenga las siguientes líneas



// - Una cadena de texto con tu Nombre
let nombre = "Jonathan";

// - Otra cadena de texto con tu Apellido
let apellido = "Vasquez";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ", apellido);
console.log(estudiante)

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numVar = estudiante.length;
console.log(numVar);

// - Una variable que contenga la primera letra del Nombre
let strPrimera = estudiante.slice(0, 1);
console.log(strPrimera);

// - Otra variable que contenga la última letra del Apellido
let strultima = estudiante.substring(15);
console.log(strultima);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteSinEspacios = estudiante.replace(" " , "");
console.log(estudianteSinEspacios);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreContenido = estudiante.includes(nombre);
console.log(nombreContenido);