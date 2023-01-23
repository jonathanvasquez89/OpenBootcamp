// Crea un archivo JS que contenga las siguientes líneas:

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listCompra = ["Leche", "Carne","Verduras","Pollo" ];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listCompra.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const pelicula = [
    {
        titulo: "Harry Potter", 
        director: " David Heyman", 
        fecha: "2001"
    },
    {
        titulo: "¡NOP!", 
        director: "Jordan Peele", 
        fecha: "2022"
    },
    {
        titulo: "Duna", 
        director: "Denis Villeneuve", 
        fecha: "2021"
    },
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newPelicula = pelicula.filter(pelicula => pelicula.fecha > new Date(2010, 0 ,1));

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = pelicula.map(pelicula => {
    return pelicula.director;
});

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = pelicula.map(pelicula => {
    return pelicula.titulo;
});
console.log(titulos)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
directores_titulos = [...directores, ...titulos];