function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === '1234') {
        message.textContent = 'Inicio de sesión exitoso.';
        message.className = 'success';
    } else {
        message.textContent = 'Nombre de usuario o contraseña incorrectos.';
        message.className = 'error';
    }
}