
import AuthService from './authService.js';

const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const passwordAlert = document.getElementById('password-alert');
    const confirmPasswordAlert = document.getElementById('confirm-password-alert');
    const emailAlert = document.getElementById('email-alert');

    if (data.password !== data.confirm_password) {
        passwordAlert.innerHTML = 'Las contraseñas no son iguales';
        confirmPasswordAlert.innerHTML = 'Las contraseñas no son iguales';
    } else {
        passwordAlert.innerHTML = '';
        confirmPasswordAlert.innerHTML = '';

        if (AuthService.createAccount(data)) {
            emailAlert.innerHTML = '';
            console.log('Registro exitoso');

    
            window.location.href = './login.html';
        } else {
            emailAlert.innerHTML = 'El nombre de usuario ya existe';
        }
    }
});
