// script.js
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInForm = document.querySelector('.sign-in form');

// Usuario predefinido
const validUser = {
    email: "admin@admin",
    password: "1234"
};

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar recarga de la página
    
    const email = signInForm.querySelector('input[type=email]').value;
    const password = signInForm.querySelector('input[type=password]').value;
    
    if (email === validUser.email && password === validUser.password) {
        window.location.href = 'schedule.html'; // Redirigir al horario
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
