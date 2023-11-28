// personajes.js
document.addEventListener('DOMContentLoaded', function () {
    // Elemento contenedor donde se mostrarán los personajes
    const charactersContainer = document.getElementById('characters');

    // URL del API de gatos
    const apiUrl = 'https://nekos.best/api/v2/sleep?amount=9';

    // Realizar una solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Manipular los datos y mostrarlos en la página
            data.data.forEach(character => {
                // Crear un div para cada personaje
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('card'); // Agregar la clase 'card'

                // Crear una imagen para el personaje
                const characterImage = document.createElement('img');
                characterImage.src = character.url; // La URL de la imagen desde el API
                characterImage.alt = 'Imagen del personaje';

                // Crear un párrafo para el nombre del personaje
                const characterName = document.createElement('p');
                characterName.textContent = character.name; // Nombre del personaje desde el API

                // Agregar la imagen y el nombre al div del personaje
                characterDiv.appendChild(characterImage);
                characterDiv.appendChild(characterName);

                // Agregar el div del personaje al contenedor
                charactersContainer.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error al obtener datos desde el API:', error));
});
