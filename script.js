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

function adjustSpacing() {
  const projectCards = document.querySelectorAll('.project-card');
  
  if (window.innerWidth < 768) {
    projectCards.forEach((card) => {
      card.style.marginBottom = '20px'; // Ajuste o valor conforme necessário
    });
  } else {
    projectCards.forEach((card) => {
      card.style.marginBottom = '0'; // Remove o espaçamento extra em telas maiores
    });
  }
}

adjustSpacing();

window.addEventListener('resize', adjustSpacing);

