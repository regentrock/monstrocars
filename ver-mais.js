const telefone = "5519994348998";

const mensagem1 = "Olá! Gostaria de mais informações.";
const mensagem2 = "Oi! Qual é a melhor data para agendarmos?";

function enviarMensagem(mensagem) {
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("message-btn").addEventListener("click", () => enviarMensagem(mensagem1));
    document.getElementById("date-btn").addEventListener("click", () => enviarMensagem(mensagem2));
});

// --------------------------------------- //

        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                thumbnail.classList.add('active');
                
                const style = thumbnail.style.backgroundImage;
                
                mainImage.style.backgroundImage = style;
            });
        });

// --------------------------------------- //

document.getElementById("compartilhar").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Confira este carro incrível!",
            url: window.location.href
        })
        .then(() => console.log("Compartilhamento bem-sucedido"))
        .catch((error) => console.log("Erro ao compartilhar:", error));
    } else {
        alert("Seu navegador não suporta o compartilhamento nativo.");
    }
});