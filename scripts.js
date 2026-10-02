console.log(document.title);
console.log(document.getElementById("gen-1"));
// Ejercicio 1: Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.querySelector('h2').textContent = 'Generasión 1 Pokimon';

//Ejercicio 2: Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "black"

//Ejercicio 3: Imprime por consola la URL de la página.

console.log(window.location.href);

//Ejercicio 4: Imprime el dominio de la pagina.

console.log(window.location.hostname);

//Ejercicio 5: Imprime todos los nodos de imagen.

const imagenes = document.querySelectorAll('img')
console.log(imagenes)

//Ejercicio 6: Sustituye el atributo "src" de todas las imágenes por este: [https://media.giphy.com/media/2v170e71aanfi/giphy.gif]

for(let i = 0; i < imagenes.length; i++){
    console.log(imagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
};