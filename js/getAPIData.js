import { goHome, isLogged } from './services/checkLogin.js'

goHome(!isLogged)

const getAnime = async () => {
    const res = await fetch('https://nekos.best/api/v2/sleep?amount=9')
    const data = await res.json()

    return data.results
}

const anime = await getAnime()
/** @type {HTMLDivElement} */
const container = document.querySelector('.card-container')

container.innerHTML = anime
    .map(
        (a) => `
    
    <div class="card">
        <img src="${a.url}" />
        <p>${a.anime_name}</p>
    </div>
`
    )
    .join('')
