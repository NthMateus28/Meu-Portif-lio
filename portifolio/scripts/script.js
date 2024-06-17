// Aguarde o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const options = document.querySelector(".options");

    if (menuButton && options) {
        menuButton.addEventListener("click", function () {
            options.classList.toggle("active");
        });
    }

    // Seleciona o elemento com a classe "typing-text"
    const textElement = document.querySelector(".typing-text");

    if (textElement) {
        // Texto que você deseja que seja digitado
        const textToType = "Desenvolvedor Full Stack";

        // Inicializa o índice do texto
        let textIndex = 0;

        // Função para adicionar texto à classe "typing-text"
        function type() {
            if (textIndex < textToType.length) {
                textElement.textContent += textToType.charAt(textIndex);
                textIndex++;
                setTimeout(type, 100); // Velocidade de digitação (ajuste conforme necessário)
            }
        }

        // Inicie a animação de digitação
        type();
    }

    // Função para formatar o telefone
    function formatPhone(event) {
        const input = event.target;
        let value = input.value.replace(/\D/g, "");

        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        } else {
            value = value.replace(/^(\d*)/, "($1)");
        }

        input.value = value;
    }

    // Adiciona o evento de entrada ao campo de telefone
    const phoneInput = document.getElementById("telefone");
    if (phoneInput) {
        phoneInput.addEventListener("input", formatPhone);
    }

    // Adiciona o evento de clique ao botão "Chamar no Whats"
    const whatsButton = document.querySelector(".whats");
    whatsButton.addEventListener("click", function () {
        const nomeInput = document.querySelector('input[name="nome"]');
        const nome = nomeInput.value.trim();
        let mensagem = "Olá, gostaria de mais informações";

        if (nome) {
            mensagem = `Olá, sou ${nome} e gostaria de mais informações`;
        }

        const whatsappUrl = `https://wa.me/5554991965403?text=${encodeURIComponent(
            mensagem
        )}`;
        window.open(whatsappUrl, "_blank");
    });
});
