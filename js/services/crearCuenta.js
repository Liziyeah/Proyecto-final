import { getUsers } from './getusers.js'

export const createAccount = (data) => {
    const users = getUsers()
    const user = users.find((user) => user.email === data.email)

    if (user) return false

    const newUsers = [...users, data]

    localStorage.setItem('users', JSON.stringify(newUsers))

    return true
}
