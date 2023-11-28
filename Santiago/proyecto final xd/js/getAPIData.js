const getAnime = async () => {
    const res = await fetch('https://nekos.best/api/v2/sleep?amount=9');
    const data = await res.json();

    return data.results;
};

const anime = await getAnime();

/** @type {HTMLDivElement} */
const container = document.querySelector('.card-container');

container.innerHTML = anime
    .map(
        (a, index) => `
    <div class="card" data-index="${index}">
        <img src="${a.url}" />
        <p class="anime-name">${a.anime_name}</p>
        <button type="button" class="favorite-button">Favoritos</button>
    </div>
`
    )
    .join('');

import { getUsers, saveUser } from './database.js';

const favoriteButtons = document.querySelectorAll('.favorite-button');
favoriteButtons.forEach((button) => {
    button.addEventListener('click', handleFavoriteClick);
});

function handleFavoriteClick(event) {
    const cardIndex = event.target.closest('.card').dataset.index;
    const selectedAnime = anime[cardIndex];


    const currentUsername = localStorage.getItem('currentUsername');

    if (currentUsername) {

        const users = getUsers();
        const currentUser = users.find(u => u.username === currentUsername);

        if (currentUser) {

            currentUser.favorites = currentUser.favorites || [];


            const isAlreadyFavorited = currentUser.favorites.some(anime => anime.name === selectedAnime.name);

            if (!isAlreadyFavorited) {

                currentUser.favorites.push({
                    name: selectedAnime.name,
                    imageUrl: selectedAnime.imageUrl
                });


                saveUser(currentUser);

     
                alert('Se ha agregado a favoritos');
            } else {

                alert('Este anime ya está en tus favoritos');
            }
        }
    }
}









