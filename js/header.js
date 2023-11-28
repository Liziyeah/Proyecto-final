import { isLogged } from './services/checkLogin.js'

const head = document.querySelector('head')
const link = document.createElement('link')
const header = document.createElement('header')
const body = document.querySelector('body')
link.rel = 'stylesheet'
link.href = '/public/css/header.css'
header.innerHTML = `
    <a href="/" class="link">Inicio</a>
    <a href="/contacto.html" class="link">Acerca de</a>
    <a href="/nosotros.html" class="link">Quiénes somos</a>
    <a href="/get-api-data.html" class="link">API Data</a>
    ${
        !isLogged
            ? `<a href="/login.html" class="link">Iniciar sesión</a>
        <a href="/crearcuenta.html" class="link">Registrarse</a>`
            : '<a href="/logout.html" class="link">Cerrar sesión</a>'
    }
`
header.className = 'menu'

head.appendChild(link)
body.insertBefore(header, body.firstChild)
