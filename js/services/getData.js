export const getCharacters = async () => {
    const res = await fetch('/data.json')
    const data = await res.json()

    const characters = data.characters

    return characters
}

export const getWeapons = async () => {
    const res = await fetch('/data.json')
    const data = await res.json()

    const weapons = data.weapons

    return weapons
}

export const getEnemies = async () => {
    const res = await fetch('/data.json')
    const data = await res.json()

    const enemies = data.enemies

    return enemies
}
