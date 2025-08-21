const venom = require('venom-bot');

const usuariosAtendidos = new Set();
const estadoUsuario = {};

venom
  .create({
    session: 'chatbot-arena-emige',
    multidevice: true,
    headless: false,
  })
  .then(client => start(client))
  .catch(erro => {
    console.error('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  console.log('🤖 Bot Arena Emigê iniciado!');

  client.onMessage(async message => {
    if (message.isGroupMsg) return;

    const numero = message.from;
    const msg = message.body.trim().toLowerCase();

    if (!estadoUsuario[numero]) {
      estadoUsuario[numero] = 'menu_principal';
    }
    // Boas-vindas
    if (!usuariosAtendidos.has(numero)) {
      usuariosAtendidos.add(numero);
      await client.sendText(numero,
`Olá! Seja bem-vindo(a) à ARENA EMIGÊ, o seu espaço de areia preferido para esportes, lazer e bons momentos! 🌴⚽🏐

Escolha uma opção:

1️⃣ Agendar aulas  
2️⃣ Reservar quadra  
3️⃣ Day Use  
4️⃣ Cardápio  
5️⃣ Reservas e Aniversários  
6️⃣ Localização e horários  
7️⃣ Falar com um atendente

🔁 Para voltar a este menu a qualquer momento, digite *menu*.`);
      return;
    }

    // ---------------- Menu Principal ----------------
    if (estadoUsuario[numero] === 'menu_principal') {
      switch(msg) {

        // Opção 1: Agendar aulas
        case '1':
          await client.sendText(numero,
`1️⃣ Agendar aulas

Show de bola! 

Escolha um professor para continuar:

1️⃣ Professor Rafinha - Futevôlei
2️⃣ Professor Renan - Treinamento Funcional
3️⃣ Professor João - Beach Tennis

Digite o número do professor desejado.

⚠ Importante:
- Consulte a disponibilidade de Gympass (Wellhub) para aulas selecionadas;
- As vagas são limitadas; e
- Mensalistas têm prioridade na ocupação das vagas.`);
          estadoUsuario[numero] = 'submenu_aulas';
          return;

        // Opção 2: Reservar quadra
        case '2':
          await client.sendText(numero,
`Bora garantir sua quadra? 🔥
As reservas são feitas por período de 1h, com possibilidade de prorrogação.

Me diga por gentileza:
📅 Dia da reserva:
🕐 Horário desejado:
👥 Quantas pessoas:

⚠ Importante: cada reserva precisa de um responsável que fará o pagamento integral do horário reservado.

📩 Assim que receber seus dados, confirmaremos o recebimento.

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 3: Day Use
        case '3':
          await client.sendText(numero,
`Nosso Day Use acontece aos *sábados* e *domingos* com muita areia, sol, música e diversão! 

🎟 O acesso inclui:  
- Entrada livre nas duas quadras (com revezamento)  
- Uso de banheiros e ducha

💰 Valor: R$ 25,00 por pessoa  
🕘 Horário: das 8h às 14h

O pagamento será feito no local, respeitando a ordem de chegada.

⚠ Importante: 
- Será entregue, individualmente, uma pulseira de identificação para os participantes pagantes  
- Somente quem estiver com a pulseira no braço poderá acessar as quadras

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 4: Cardápio
        case '4':
          await client.sendText(numero,
`Nosso bar está recheado de petiscos e bebidas geladas!

Clique no link abaixo para acessar o cardápio completo:
[🔗 Link do cardápio PDF ou site]

🍽 Além das opções do cardápio, temos também o Prato do Dia, preparado com carinho e sempre com uma surpresa gostosa!

Alguma dúvida ou pedido? Pode mandar abaixo!

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 5: Reservas e Aniversários
        case '5':
          await client.sendText(numero,
`Quer comemorar com os pés na areia? 

Temos mesas no segundo andar disponíveis para aniversários e eventos especiais! Ideal para curtir com a galera!

Organizamos reservas para aniversários, confraternizações e encontros esportivos.

Para começar, me envie:
📅 Data do evento
🕐 Horário desejado
👥 Quantidade estimada de pessoas

Em seguida, vamos te conectar com um atendente para fechar todos os detalhes!

⚠ Atenção: 
- A reserva será cancelada após 30 minutos de atraso sem aviso prévio  
- É permitida apenas a entrada de bolo de aniversário. Não é permitido trazer outras comidas ou bebidas

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 6: Localização e horários
        case '6':
          await client.sendText(numero,
`📍 Estamos localizados na Rua Japurá, nº 704, Bairro Amazonas, Contagem-MG.

🕘 Horários de funcionamento:  
- Segunda a sexta: 06h às 11h e de 15h às 23h  
- Sábados: 8h às 14h e 18h às 23h  
- Domingos: 8h às 14h

🚘 Não possuímos estacionamento próprio, mas há vagas disponíveis nas ruas ao redor

🔗 Clique abaixo para abrir no Google Maps:  
[https://shre.ink/arenaemige]

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 7: Falar com um atendente
        case '7':
          await client.sendText(numero,
`Certo! Já vou te conectar com um dos nossos atendentes. 

⏳ Pode levar alguns minutinhos, mas fique tranquilo(a), você será atendido(a) o mais breve possível.

💡 Enquanto isso, se quiser adiantar, escreva aqui sua dúvida ou solicitação.

🔁 Caso queira olhar novamente as opções, digite *menu* para voltar ao menu principal.`);
          return;

        case 'menu':
          await client.sendText(numero,
`Como podemos te ajudar? Escolha uma opção abaixo:

1️⃣ Agendar aulas  
2️⃣ Reservar quadra  
3️⃣ Day Use  
4️⃣ Cardápio  
5️⃣ Reservas e Aniversários  
6️⃣ Localização e horários  
7️⃣ Falar com um atendente

🔁 Para voltar a este menu a qualquer momento, digite *menu*.`);
          return;

          
      }
    }

    // ---------------- Submenu da opção 1 ----------------
    if (estadoUsuario[numero] === 'submenu_aulas') {
      switch(msg) {
        case '1':
          await client.sendText(numero,
`1️⃣ Professor Rafinha - Futevôlei

🕝 Segunda a quinta: 
- 17h às 21h

📅 Mensalistas: 
- 1x/sem R$150,00;
- 2x/sem R$230,00 (mais procurado); 
- 3x/sem R$320,00; e 
- 4x/sem R$400,00.

Quer conhecer antes de fechar? Faça uma aula experimental.

📲 Agende direto com o Professor Rafinha (ele mesmo marca as aulas e responde rapidinho 😉):[https://shre.ink/professorrafinha]

🔁 Para voltar ao menu a qualquer momento, digite *menu*.`);
          return;

        case '2':
          await client.sendText(numero,
`2️⃣ Professor Renan - Treinamento Funcional

🎯 Teen Class (10-15 anos): 
- Seg/Qua 16h
- 1x/sem R$110,00 | 2x/sem R$180,00

💪 Performance: 
- Ter/Qui 10h
- 1x/sem R$160,00 | 2x/sem R$220,00

🔥 Treino Funcional: 
- Seg/Qua 19h e 20h
- 1x/sem R$120,00 | 2x/sem R$200,00

📲 Agende direto com o Professor Renan (ele mesmo marca as aulas e responde rapidinho 😉):[https://shre.ink/professorrenan]

🔁 Para voltar ao menu a qualquer momento, digite *menu*.`);
          return;

        case '3':
          await client.sendText(numero,
`3️⃣ Professor João - Beach Tennis

📅 Horários e valores: consulte com o professor

📲 Fale com ele: [https://shre.ink/professorjoao]`);
          return;
        
        case 'menu':
          await client.sendText(numero,
`Como podemos te ajudar? Escolha uma opção abaixo:

1️⃣ Agendar aulas  
2️⃣ Reservar quadra  
3️⃣ Day Use  
4️⃣ Cardápio  
5️⃣ Reservas e Aniversários  
6️⃣ Localização e horários  
7️⃣ Falar com um atendente

🔁 Para voltar a este menu a qualquer momento, digite *menu*.`);
          estadoUsuario[numero] = 'menu_principal';

      }
    }

  }); // Fim client.onMessage
} // Fim função start
