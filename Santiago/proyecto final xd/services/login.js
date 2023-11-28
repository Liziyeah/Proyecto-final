export const login = (data) => {
    let users = localStorage.getItem('users')

    if (!users || users.length === 0) {
        localStorage.setItem('users', '[]')
    }

    users = JSON.parse(localStorage.getItem('users'))

    for (const user of users) {
        if (data.email === user.email) {
            if (user.password === data.password) {
                return true
            }
        }
    }
}
