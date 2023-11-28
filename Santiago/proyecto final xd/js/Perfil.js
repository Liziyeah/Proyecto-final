
function getUserFromLocalStorage() {
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

  
    const currentUsername = localStorage.getItem('currentUsername');

 
    return users.find(user => user.username === currentUsername);
}

document.addEventListener('DOMContentLoaded', function () {
 
    const currentUser = getUserFromLocalStorage();

    if (currentUser) {

        const firstNameElement = document.querySelector('.Nombre-info');
        const lastNameElement = document.querySelector('.Apellido-info');
        const usernameElement = document.querySelector('.Usuario-info');
        const emailElement = document.querySelector('.E-mail-info');
        const ageElement = document.querySelector('.Edad-info');
        const genderElement = document.querySelector('.Género-info');
        const birthdayElement = document.querySelector('.Cumple-info');

 
        firstNameElement.textContent = currentUser.info ? currentUser.info.first_name || '' : '';
        lastNameElement.textContent = currentUser.info ? currentUser.info.last_name || '' : '';
        usernameElement.textContent = currentUser.username || '';
        emailElement.textContent = currentUser.info ? currentUser.info.email || '' : '';
        ageElement.textContent = currentUser.info ? currentUser.info.age || '' : '';
        genderElement.textContent = currentUser.info ? currentUser.info.gender || '' : '';
        birthdayElement.textContent = currentUser.info ? currentUser.info.birth_date || '' : '';

   
        const cerrarSesionLink = document.getElementById('cerrarSesionLink');

        cerrarSesionLink.addEventListener('click', function (e) {
            e.preventDefault(); 


            localStorage.removeItem('currentUsername');

            window.location.href = './index.html';
        });
    }
});
