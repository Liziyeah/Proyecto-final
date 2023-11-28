// database.js

function getUsers() {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString) : [];
}

function saveUser(newUser) {
    const users = getUsers();

    // Verificar si el nombre de usuario ya existe
    const existingUser = users.find(user => user.username === newUser.username);

    if (existingUser) {
        // El nombre de usuario ya existe, no se puede guardar duplicado
        return false;
    }

    // Agregar el nuevo usuario al array de usuarios
    users.push(newUser);

    // Guardar la información del array de usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    return true; // Usuario guardado con éxito
}

export { getUsers, saveUser };
