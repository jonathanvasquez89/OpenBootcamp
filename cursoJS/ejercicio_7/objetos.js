// Ejercicio 2

// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Jonathan",
    apellido: "Vasquez",
    edad: 33,
    altura: 1.73,
    eresDesarroyador: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datosPersonales.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [
    {...datosPersonales},
    {
        nombre: "pedro",
        apellido: "Ortiz",
        edad: 23,
        altura: 1.69,
        eresDesarroyador: false,
    },
    {
        nombre: "Juana",
        apellido: "Martinez",
        edad: 40,
        altura: 1.65,
        eresDesarroyador: true,
    }
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const ordenLista = lista.sort((a, b) => b.edad - a.edad);
console.log(lista);



