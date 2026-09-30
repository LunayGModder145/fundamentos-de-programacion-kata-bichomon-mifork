console.log(document.title);
console.log(document.getElementById("gen-1"));
// Ejercicio 1: Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.querySelector('h2').textContent = 'Generasion 1 Pokimon';

//Ejercicio 2: Cambia el color de fondo de la primera generación de Pokimon.

const gen1 = document.querySelector('.infocard-list');
const cartasGen1 = gen1.querySelectorAll('.infocard');
cartasGen1.forEach(carta => {
 carta.style.backgroundColor = 'black';
});   


//Ejercicio 3: Imprime por consola la URL de la página.

console.log(window.location.href);

//Ejercicio 4: Imprime el dominio de la pagina.

console.log(window.location.hostname);

//Ejercicio 5: Imprime todos los nodos de imagen.

const imagenes = document.querySelectorAll('img')
console.log(imagenes)


