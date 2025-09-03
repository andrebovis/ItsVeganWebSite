document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const title = item.querySelector('h3');
        if (title) {
            title.style.cursor = 'pointer'; 
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