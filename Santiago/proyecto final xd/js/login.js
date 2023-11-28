
import AuthService from './authService.js';

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData);
        const message = document.getElementById('message');

        if (AuthService.login(data)) {
            message.innerHTML = 'Se inició sesión';

            localStorage.setItem('currentUsername', data.username);

            window.location.href = './main.html';
        } else {
            message.innerHTML = 'Nombre de usuario o contraseña incorrectos';
        }
    });
});
