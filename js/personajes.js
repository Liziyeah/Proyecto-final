import { getCharacters, getEnemies, getWeapons } from './services/getData.js'

const characters = await getCharacters()
const charactersDiv = document.getElementById('characters')
const characterCards = []

for (const character of characters) {
    const card = `
        <div class="cards">
            <figure>
                <img src="./assets/images/${character.image}" />
            </figure>
            <div class="content-cards">
                <div class="button">
                    <button type="button" class="btn">${character.name}</button>
                </div>
                <p>
                    ${character.description}
                </p>
            </div>
        </div>
    `
    characterCards.push(card)
}

charactersDiv.innerHTML = characterCards.join('')

const weapons = await getWeapons()
const weaponsDiv = document.getElementById('weapons')
const weaponCards = []

for (const weapon of weapons) {
    const card = `
        <div class="cards">
            <figure>
                <img src="./assets/images/${weapon.image}" />
            </figure>
            <div class="content-cards">
                <div class="button">
                    <button type="button" class="btn">${weapon.name}</button>
                </div>
                <p>
                    ${weapon.description}
                </p>
            </div>
        </div>
    `
    weaponCards.push(card)
}

weaponsDiv.innerHTML = weaponCards.join('')

const enemies = await getEnemies()
const enemiesDiv = document.getElementById('enemies')
const enemyCards = []

for (const enemy of enemies) {
    const card = `
        <div class="cards">
            <figure>
                <img src="./assets/images/${enemy.image}" />
            </figure>
            <div class="content-cards">
                <div class="button">
                    <button type="button" class="btn">${enemy.name}</button>
                </div>
                <p>
                    ${enemy.description}
                </p>
            </div>
        </div>
    `
    enemyCards.push(card)
}

enemiesDiv.innerHTML = enemyCards.join('')
