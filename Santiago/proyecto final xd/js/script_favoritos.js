
document.addEventListener('DOMContentLoaded', function () {

    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : {};

    const favoritosContenedor = document.querySelector('.Contenedor');

 
    if (userData.favorites && userData.favorites.length > 0) {
        userData.favorites.forEach(favorite => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card-favorito');

            const img = document.createElement('img');
            img.src = favorite.imageUrl;
            img.alt = favorite.name;

            const nombre = document.createElement('p');
            nombre.textContent = favorite.name;

            cardDiv.appendChild(img);
            cardDiv.appendChild(nombre);

            favoritosContenedor.appendChild(cardDiv);
        });
    } else {

        const mensaje = document.createElement('p');
        mensaje.textContent = 'No tienes animes en tus favoritos.';
        favoritosContenedor.appendChild(mensaje);
    }
});
