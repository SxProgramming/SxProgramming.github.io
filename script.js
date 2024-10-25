document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffb6c1', '#ffe4e1', '#ffdead', '#ffe4b5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Mensaje emergente
    alert('¡Espero que te guste el nuevo color, Mamá!');
});

// Efecto de desplazamiento
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (scrollPosition > 200) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    if (scrollPosition > 500) {
        footer.classList.add('sticky');
    } else {
        footer.classList.remove('sticky');
    }
});