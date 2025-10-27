🤖 Chatbot WhatsApp – Venom-Bot

Este projeto implementa um chatbot interativo para WhatsApp, desenvolvido em Node.js utilizando a biblioteca Venom-Bot
.

O bot automatiza o atendimento ao cliente com menus dinâmicos e respostas personalizadas, ideal para academias, clubes, arenas esportivas ou estabelecimentos que realizam agendamentos, reservas e atendimentos via WhatsApp.

🚀 Funcionalidades

📱 Integração direta com o WhatsApp Web via Venom-Bot

🧠 Controle de estado por usuário (menu principal e submenus)

💬 Mensagens personalizadas com emojis e placeholders dinâmicos

🔁 Sistema de menu interativo com opção de retorno (menu)

🧍‍♂️ Identificação e controle de usuários atendidos

🔒 Evita repetição de mensagens iniciais para o mesmo contato

🧩 Suporte para aulas, reservas, cardápio, localização e eventos

🧰 Tecnologias Utilizadas

Node.js (v18+ recomendado)

Venom-Bot (última versão estável)

JavaScript (ES6)

⚙️ Instalação e Configuração
1️⃣ Clonar o repositório
git clone https://github.com/TinRober/Chat-Bot-Whatsapp
cd seu-repositorio

2️⃣ Instalar dependências
npm install

3️⃣ Configurar variáveis do projeto

Abra o arquivo principal (index.js ou bot.js) e personalize os placeholders entre chaves {{ }}:

{{SESSION_NAME}}        // Nome da sessão do Venom-Bot
{{BOT_NAME}}            // Nome do seu bot
{{PLACE_NAME}}          // Nome do local (ex: Arena Beach Club)
{{PROFESSOR_1}}         // Nome do professor 1
{{PROF1_LINK}}          // Link de contato do professor 1
{{DAY_USE_PRICE}}       // Valor do Day Use
{{ADDRESS}}             // Endereço do local
{{MAPS_LINK}}           // Link do Google Maps
...


💡 Dica: você pode criar um arquivo .env e substituir os placeholders por variáveis de ambiente usando dotenv
, caso queira um setup mais profissional.

▶️ Executando o Projeto

Inicie o bot com o comando:

node bot.js


O Venom-Bot abrirá automaticamente uma janela do navegador (modo não headless) para autenticação via QR Code.
Após escanear com o WhatsApp, a sessão será salva localmente e o bot estará pronto para uso.

🧭 Estrutura do Código
project_root/
│
├── bot.js                # Script principal do chatbot
├── package.json          # Dependências e scripts
├── node_modules/         # Bibliotecas instaladas
└── README.md

💬 Fluxo de Conversa
🏁 Boas-vindas:

Ao receber a primeira mensagem, o bot envia uma saudação e o menu principal com 7 opções:

1️⃣ Agendar aulas
2️⃣ Reservar quadra
3️⃣ Day Use
4️⃣ Cardápio
5️⃣ Reservas e Aniversários
6️⃣ Localização e horários
7️⃣ Falar com um atendente

O usuário pode digitar o número da opção desejada ou digitar “menu” a qualquer momento para retornar.

📚 Submenus:

Cada opção do menu aciona uma resposta específica.
Por exemplo, “Agendar aulas” exibe a lista de professores e planos de aula; “Reservar quadra” coleta informações de data, horário e número de pessoas.

🧩 Principais Lógicas

Controle de Estado por Usuário

if (!estadoUsuario[numero]) {
  estadoUsuario[numero] = 'menu_principal';
}


Evita repetição de boas-vindas

if (!usuariosAtendidos.has(numero)) {
  usuariosAtendidos.add(numero);
  // Envia mensagem inicial
}


Retorno ao menu

if (msg === 'menu') {
  estadoUsuario[numero] = 'menu_principal';
  // Envia menu principal
}

⚡ Dicas de Uso

Execute o bot em ambiente com conexão estável (Wi-Fi ou servidor dedicado)

Sempre feche o navegador do Venom corretamente antes de reiniciar o bot

Para múltiplas contas do WhatsApp, crie sessões diferentes (alterando {{SESSION_NAME}})

Evite alterações no node_modules — personalize apenas o código do bot

🧠 Possíveis Extensões

Integração com banco de dados (MongoDB, SQLite ou Firestore)

Envio de mídia (imagens, vídeos, PDFs)

Sistema de fila de atendimento

Painel web para gerenciar conversas em tempo real

📄 Licença

Este projeto está sob a licença MIT — veja o arquivo LICENSE
 para mais detalhes.
