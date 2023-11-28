import { isLogged } from './services/checkLogin.js'

if (isLogged) {
    localStorage.removeItem('user')

    location.href = '/index.html'
}
