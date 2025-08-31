document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const curriculoInput = document.getElementById('curriculo');
            const file = curriculoInput.files[0];
            
            if (file) {
                const fileName = file.name;
                const fileExtension = fileName.split('.').pop().toLowerCase();
                
                if (fileExtension !== 'pdf' && fileExtension !== 'docx') {
                    e.preventDefault();
                    alert('Por favor, anexe um currículo nos formatos PDF ou DOCX.');
                }
            } else {
                e.preventDefault();
                alert('Por favor, anexe seu currículo.');
            }
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }
});