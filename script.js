const currentURL = window.location.href;

// Abrir o Modal ao clicar no link de contato
document.getElementById('modal-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contactModal').style.display = 'none';
    window.history.back();
})

window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modal-content');
    if (event.target === modal && event.target !== modalContent) {
        modal.style.display = 'none';
        window.history.back();
    }
});

