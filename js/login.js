import { goHome, isLogged } from './services/checkLogin.js'
import { login } from './services/login.js'

goHome(isLogged)

const form = document.getElementById('login')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const message = document.getElementById('message')

    if (login(data)) {
        message.innerHTML = 'Se inicio sesión'

        location.href = '/index.html'

        console.log(true)
    } else {
        message.innerHTML = 'Correo o contraseña equivocados'
    }
})
