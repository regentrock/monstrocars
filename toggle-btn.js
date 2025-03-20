// Aguarde o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Selecione os elementos
    const toggleBtn = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Verifique se os elementos foram encontrados
    console.log('Toggle button:', toggleBtn);
    console.log('Nav links:', navLinks);
    
    // Adicione o evento de clique
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', function() {
            console.log('Toggle button clicked');
            navLinks.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
        
        // Fechar o menu ao clicar em um link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                toggleBtn.classList.remove('active');
            });
        });
    } else {
        console.error('Menu elements not found');
    }
});