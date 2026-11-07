function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    
    // Genera coordenadas aleatorias para que el botón "No" huya del mouse
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function sayYes() {
    document.getElementById('main-card').classList.add('hidden');
    document.getElementById('success-card').classList.remove('hidden');
}