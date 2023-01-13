/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/ 

const datos = ["jonathan", 30, true, 
    new Date(1989, 2, 21),
    {
        titulo: "Piense y Hagase Rico",
        autor: "Napoleon Hill",
        fecha: "1937",
        url: "https://es.wikipedia.org/wiki/Piense_y_hágase_rico"
    },
];

console.log(datos);
