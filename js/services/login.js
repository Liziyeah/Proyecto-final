import { getUsers } from './getusers.js'

export const login = (data) => {
    const users = getUsers()

    console.log(users)
    const user = users.find((user) => user.email === data.email)

    if (!user) return false
    if (user.password !== data.password) return false

    localStorage.setItem('user', JSON.stringify(user))

    return true
}
