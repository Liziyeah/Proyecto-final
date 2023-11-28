export const getUsers = () => {
    let users = localStorage.getItem('users')

    if (!users || users.length === 0) {
        localStorage.setItem('users', '[]')
    }

    users = JSON.parse(localStorage.getItem('users'))

    return users
}
