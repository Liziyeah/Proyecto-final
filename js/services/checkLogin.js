export const isLogged = localStorage.getItem('user')

export const goHome = (bool) => {
    if (bool) {
        location.href = '/index.html'
    }
}
