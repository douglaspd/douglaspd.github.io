Projeto: Seleção de Preferências para Encontros

Este é um projeto simples de uma aplicação web interativa onde o usuário pode selecionar opções de bebida, data e horário de um encontro, visualizar suas escolhas e até enviá-las pelo WhatsApp com um clique. O objetivo foi explorar manipulação básica do DOM, estilização com CSS e uso de eventos em JavaScript para proporcionar uma experiência funcional e agradável.
🎯 Objetivo do Projeto

Criar uma interface simples, intuitiva e responsiva onde o usuário possa:

    Selecionar uma bebida, data e horário para um encontro
    Visualizar as informações escolhidas de forma organizada
    Enviar as escolhas diretamente para um número de WhatsApp pré-configurado

Este projeto utiliza apenas HTML, CSS e JavaScript, com ênfase em manipulação do DOM para renderizar as opções selecionadas de forma dinâmica.
🛠️ Tecnologias Utilizadas

    HTML5: Estrutura da aplicação e formatação de conteúdo.
    CSS3: Estilização visual da interface para melhor experiência do usuário.
    JavaScript (ES6): Manipulação do DOM, gerenciamento de eventos e integração de uma URL dinâmica do WhatsApp.

🚀 Como Configurar e Executar o Projeto
Passos para clonar o projeto

    Clone o Repositório

    No terminal ou prompt de comando, execute o seguinte comando:

    bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Acesse a pasta do projeto

bash

    cd nome-do-repositorio

    Abra o arquivo index.html em seu navegador
        Você pode simplesmente clicar duas vezes no arquivo index.html ou abrir o navegador e arrastar o arquivo para uma nova aba.

Como Personalizar as Informações

Para adaptar o projeto às suas próprias necessidades, siga as etapas abaixo:

    Modificar o número de WhatsApp
        O número de WhatsApp para o qual a mensagem será enviada pode ser alterado diretamente no arquivo main.js.
        Localize a variável numeroWhatsApp e substitua o valor pelo seu próprio número com o código do país.

    javascript

const numeroWhatsApp = "SEU_NUMERO_DE_TELEFONE";

Personalizar os Textos e Opções de Seleção

    As opções de bebida, data e horário podem ser alteradas no HTML, dentro dos elementos <select>. Basta substituir as <option> por valores e textos de sua escolha:

html

    <select id="bebida">
        <option value="Seu Bebida 1">Sua Bebida 1</option>
        <option value="Seu Bebida 2">Sua Bebida 2</option>
    </select>

�� Estrutura de Arquivos

O projeto está organizado de maneira simples para facilitar a navegação:

bash

/nome-do-repositorio
│
├── index.html              # Estrutura da aplicação
├── css/
│   └── style.css           # Estilização visual
├── js/
│   └── main.js             # Lógica de manipulação do DOM e URL do WhatsApp
└── README.md               # Documentação do projeto

🌐 Demonstração

Assim que todas as informações forem preenchidas, o botão "Mandar no WhatsApp" gerará uma mensagem automática que será enviada para o WhatsApp escolhido, utilizando o número pré-configurado.
📌 Recursos Explorados

    Manipulação do DOM: Adição dinâmica de textos e valores com base nas seleções do usuário.
    Eventos em JavaScript: Implementação de eventos click para gerar mensagens e atualizar a URL do WhatsApp de maneira dinâmica.
    Estilização com CSS: Customização do layout para garantir uma interface limpa e organizada.

📝 Licença

Este projeto é de uso livre e aberto para personalização e aprendizado
									
