import { createAccount } from './services/crearCuenta.js'

const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const passwordAlert = document.getElementById('password-alert')
    const confirmPasswordAlert = document.getElementById(
        'confirm-password-alert'
    )
    const emailAlert = document.getElementById('email-alert')

    if (data.password !== data.confirm_password) {
        passwordAlert.innerHTML = 'Las contraseñas no son iguales'
        confirmPasswordAlert.innerHTML = 'Las contraseñas no son iguales'
    } else {
        passwordAlert.innerHTML = ''
        confirmPasswordAlert.innerHTML = ''

        console.log(data)

        if (createAccount(data)) {
            emailAlert.innerHTML = ''
            console.log('true')

            location.href = '/login.html'
        } else {
            emailAlert.innerHTML = 'El email ya existe'
        }
    }
})
