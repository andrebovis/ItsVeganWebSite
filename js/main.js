document.addEventListener('DOMContentLoaded', (event) => {
    // Funcionalidade do menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Nova funcionalidade para o cardápio
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const title = item.querySelector('h3');
        if (title) {
            title.style.cursor = 'pointer'; // Adiciona um cursor de mão para indicar que é clicável
            title.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
        const image = item.querySelector('.menu-item-image');
        if (image) {
            image.style.cursor = 'pointer';
            image.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
});