const venom = require('venom-bot');
const usuariosAtendidos = new Set();
const estadoUsuario = {};

venom
  .create({
    session: '{{SESSION_NAME}}',
    multidevice: true,
    headless: false,
  })
  .then(client => start(client))
  .catch(erro => {
    console.error('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  console.log('🤖 {{BOT_NAME}} iniciado!');

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
`Olá! Seja bem-vindo(a) ao {{PLACE_NAME}}, o seu espaço preferido para esportes, lazer e bons momentos! 🌴⚽🏐

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

1️⃣ {{PROFESSOR_1}} - Futevôlei
2️⃣ {{PROFESSOR_2}} - Treinamento Funcional
3️⃣ {{PROFESSOR_3}} - Beach Tennis

Digite o número do professor desejado.

⚠ Importante:
- Consulte a disponibilidade de {{GYMPASS_NAME}} para aulas selecionadas;
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
- Entrada livre nas quadras (com revezamento)  
- Uso de banheiros e ducha

💰 Valor: {{DAY_USE_PRICE}} por pessoa  
🕘 Horário: {{DAY_USE_HOURS}}

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
{{MENU_LINK}}

🍽 Além das opções do cardápio, temos também o Prato do Dia, preparado com carinho e sempre com uma surpresa gostosa!

Alguma dúvida ou pedido? Pode mandar abaixo!

🔁 Digite *menu* para voltar ao menu principal.`);
          return;

        // Opção 5: Reservas e Aniversários
        case '5':
          await client.sendText(numero,
`Quer comemorar com os pés na areia? 

Temos mesas disponíveis para aniversários e eventos especiais! Ideal para curtir com a galera!

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
`📍 Estamos localizados em {{ADDRESS}}.

🕘 Horários de funcionamento:  
- {{WEEKDAY_HOURS}}  
- {{WEEKEND_HOURS}}

🚘 Não possuímos estacionamento próprio, mas há vagas disponíveis nas ruas ao redor

🔗 Clique abaixo para abrir no Google Maps:  
{{MAPS_LINK}}

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
`1️⃣ {{PROFESSOR_1}} - Futevôlei

🕝 Horários: {{SCHEDULE_PROF1}}

📅 Mensalistas: 
- 1x/sem {{PRICE_1}};
- 2x/sem {{PRICE_2}}; 
- 3x/sem {{PRICE_3}}; e 
- 4x/sem {{PRICE_4}}.

Quer conhecer antes de fechar? Faça uma aula experimental.

📲 Agende direto com {{PROFESSOR_1}}: {{PROF1_LINK}}

🔁 Para voltar ao menu a qualquer momento, digite *menu*.`);
          return;

        case '2':
          await client.sendText(numero,
`2️⃣ {{PROFESSOR_2}} - Treinamento Funcional

🎯 Teen Class (10-15 anos): 
- {{SCHEDULE_TEEN}}
- {{PRICE_TEEN}}

💪 Performance: 
- {{SCHEDULE_PERFORMANCE}}
- {{PRICE_PERFORMANCE}}

🔥 Treino Funcional: 
- {{SCHEDULE_FUNCTIONAL}}
- {{PRICE_FUNCTIONAL}}

📲 Agende direto com {{PROFESSOR_2}}: {{PROF2_LINK}}

🔁 Para voltar ao menu a qualquer momento, digite *menu*.`);
          return;

        case '3':
          await client.sendText(numero,
`3️⃣ {{PROFESSOR_3}} - Beach Tennis

📅 Horários e valores: consulte com o professor

📲 Fale com ele: {{PROF3_LINK}}`);
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
