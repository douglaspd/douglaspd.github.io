const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const btnConfirm = document.getElementById("btn-confirmar")
const dropdownContainer = document.getElementById("dropdown-container");
const mensagem = document.getElementById("mensagem");
const selectionDisplay = document.getElementById("selection-display");
const selectionText = document.getElementById("selection-text");
const sendWhatsApp = document.getElementById("send-whatsapp");

// Evitar clique no botão 'Não'
btnNao.addEventListener("mouseover", moveButton);
btnNao.addEventListener("touchstart", moveButton);

function moveButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - btnNao.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - btnNao.offsetHeight));
    btnNao.style.position = "absolute";
    btnNao.style.left = randomX + "px";
    btnNao.style.top = randomY + "px";
}

// Clique no botão 'Sim' mostra o dropdown
btnSim.addEventListener("click", function() {
    dropdownContainer.style.display = "block";
});

// Exibir mensagem após selecionar todas as opções
document.getElementById("btn-confirmar").addEventListener("click", function() {
    mensagem.classList.remove("hidden");
    dropdownContainer.style.display = "none"
    btnSim.classList.add("hidden")
});

btnConfirm.addEventListener('click', function() {
    const bebida = document.getElementById("bebida").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    selectionText.innerHTML = `
        <p><strong>Vamos beber:</strong> ${bebida}</p>
        <p><strong>Dia:</strong> ${data}</p>
        <p><strong>Às:</strong> ${horario}</p>
    `;

    selectionDisplay.classList.remove("hidden");
    const numeroWhatsApp = "5511916863793";

    const whatsappMessage = `Olá! Eu escolhi:\nBeber ${bebida}\nDia ${data}\nÀs ${horario}`;
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;
    sendWhatsApp.setAttribute("href", whatsappURL);
})

    const whatsappMessage = `Olá! Minha escolha é:\nBebida: ${bebida}\nData: ${data}\nHorário: ${horario}`;
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;
    sendWhatsApp.setAttribute("href", whatsappURL);
    sendWhatsApp.setAttribute("target", "_blank");