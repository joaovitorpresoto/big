javascript
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mudar para Modo Claro';
    } else {
        toggleButton.textContent = 'Mudar para Modo Escuro';
    }
});

// Definindo o modo inicial
if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}