document.getElementById('menu-button').addEventListener('click', function() {
    const navContain = document.querySelector('.nav-contain');
    const button = document.getElementById('menu-button');
    
    if (navContain.style.display === 'flex') {
        navContain.style.display = 'none';
        button.textContent = 'Menu'; // Mude o texto do botão de volta
    } else {
        navContain.style.display = 'flex';
        button.textContent = '^'; // Mude o texto do botão para indicar que pode ser fechado
    }
});
