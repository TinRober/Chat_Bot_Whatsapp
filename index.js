const venom = require('venom-bot');

venom
  .create({
    session: 'chatbot-arena',
    multidevice: true,
    headless: false,
  })
  .then(client => start(client))
  .catch(erro => {
    console.error('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  console.log('🤖 Bot Arena iniciado!');

  client.onMessage(async message => {
    if (message.isGroupMsg) return;

    const msg = message.body.trim().toLowerCase();

    // Mostrar menu se a mensagem não for uma opção válida nem 'menu'
    const validOptions = ['1','2','3','4','5','6','menu'];
    if (!validOptions.includes(msg)) {
      await client.sendText(message.from,
`Olá! 👋 Seja bem-vindo(a) à ARENA , o seu espaço de areia preferido para esportes, lazer e bons momentos! 🌴⚽🏐

Como podemos te ajudar hoje? Escolha uma opção abaixo:

1️⃣ Agendar aulas.  
2️⃣ Reservar quadra.  
3️⃣ Obter informações sobre o Day Use.  
4️⃣ Ver cardápio do bar.  
5️⃣ Eventos e Aniversários.  
6️⃣ Falar com um atendente.  

🔁 Para voltar a este menu a qualquer momento, digite *menu*.`);
      return;
    }

    switch (msg) {
      // 1️⃣ Agendar Aulas e variantes
      case '1':
      case 'agendar':
      case 'agendar aula':
      case 'agendar aulas':
      case 'agenda':
      case 'agennda':
      case 'agendat':
      case 'agendaraula':
      case 'agendaraulas':
      case 'aula':
      case 'aulas':
      case 'aulah':
      case 'quero agendar':
      case 'queroagendar':
      case 'quero agendar aula':
      case 'queroagendaraula':
      case 'quero marcar aula':
      case 'fazer aula':
      case 'marcar aula':
      case 'quero faze aula':
      case 'aula de futevolei':
      case 'auladefutevolei':
      case 'futevolei':
      case 'futvolei':
      case 'ftv':
      case 'fute':
        await client.sendText(message.from,
`Show de bola! 💥
As aulas são agendadas com nossos professores credenciados e podem ser individuais ou em grupo.

Para seguir com o agendamento, me diga por favor:
👤 Seu nome completo.
🏐 Modalidade de interesse.
🕐 Horário desejado (manhã, tarde ou noite).

📩 Assim que receber seus dados, confirmaremos o recebimento.

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // 2️⃣ Reservar Quadra e variantes
      case '2':
      case 'reservarquadra':
      case 'reservar quadra':
      case 'reservarquadra':
      case 'volei':
      case 'volei de areia':
      case 'voleideareia':
      case 'voleiareia':
      case 'volei areia':
      case 'vôlei':
      case 'voli':
      case 'vôleio':
      case 'voleio':
      case 'vole':
      case 'reservar':
      case 'reserva':
      case 'reserva quadra':
      case 'alugar quadra':
      case 'alugarquadra':
      case 'aluga quadra':
      case 'marcar quadra':
      case 'quero reservar':
      case 'queroreservar':
      case 'quero jogar':
      case 'jogar':
      case 'jogarnaquadra':
      case 'jogar na quadra':
      case 'resrvar':
      case 'reserbar':
      case 'rezerva':
        await client.sendText(message.from,
`Bora garantir sua quadra? 🔥
As reservas são feitas por período de 1h, com possibilidade de prorrogação.

Me diga por gentileza:
📅 Dia da reserva.
🕐 Horário desejado.
👥 Quantas pessoas?

⚠ Importante: cada reserva precisa de um responsável que fará o pagamento integral do horário reservado.

📩 Assim que receber seus dados, confirmaremos o recebimento.

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // 3️⃣ Day Use e variantes
      case '3':
      case 'day use':
      case 'dayuse':
      case 'dayus':
      case 'uso da quadra':
      case 'usodaquadra':
      case 'uso diario':
      case 'uso':
      case 'day':
      case 'dey use':
      case 'dei use':
      case 'day usi':
      case 'quer day use':
      case 'querodayuse':
      case 'dayuus':
        await client.sendText(message.from,
`Nosso Day Use rola aos sábados e domingos com muita areia, sol, música e diversão! ☀🎶

O acesso inclui:

Entrada livre nas duas quadras (revezamento); e banheiros e ducha.

💰 Valor: R$ 30,00 por pessoa.
🕘 Das 8h às 14h.

⚠ Atenção: será entregue, individualmente, uma pulseira de identificação para os participantes pagantes.
Somente quem estiver com a pulseira no braço poderá acessar as quadras.

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // 4️⃣ Cardápio do Bar e variantes
      case '4':
      case 'cardápio':
      case 'cardapio':
      case 'ver cardapio':
      case 'vercardapio':
      case 'ver cardápio':
      case 'bar':
      case 'comida':
      case 'menu':
      case 'lanche':
      case 'bebida':
      case 'quero comer':
      case 'querocomer':
      case 'comer':
      case 'prato do dia':
      case 'pratododia':
      case 'pratu do dia':
      case 'karpadio':
      case 'kardapio':
      case 'cardapyu':
        await client.sendText(message.from,
`😋 Nosso bar está recheado de petiscos e bebidas geladas!
Clique no link abaixo para acessar o cardápio completo:
[🔗 Link do cardápio PDF ou site]

🍽 Além das opções do cardápio, temos também o Prato do Dia — preparado com carinho e sempre com uma surpresa gostosa!
👉 Consulte o prato do dia por aqui mesmo.

Alguma dúvida ou pedido? Pode mandar abaixo!

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // 5️⃣ Eventos e Aniversários e variantes
      case '5':
      case 'evento':
      case 'eventos':
      case 'aniversário':
      case 'aniversario':
      case 'eventosaniversario':
      case 'eventoaniversario':
      case 'comemorar':
      case 'comemoraniversario':
        await client.sendText(message.from,
`🎉 Eventos e Aniversários  
Quer comemorar com os pés na areia? 🌴

Oferecemos pacotes especiais para eventos, aniversários, confraternizações e encontros esportivos.

Para te ajudar melhor, me diga:
📅 Data desejada  
👥 Quantidade estimada de pessoas  

📩 Envie essas informações e confirmaremos o recebimento.

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // 6️⃣ Falar com Atendente e variantes
      case '6':
      case 'falar com atendente':
      case 'falarcomatendente':
      case 'falar com atendente humano':
      case 'atendente':
      case 'quero atendente':
      case 'queroatendente':
      case 'ajuda':
      case 'ajda':
      case 'quero falar com alguém':
      case 'quero falar com atendente':
      case 'quero falar':
      case 'flar com atendente':
      case 'flr atendente':
      case 'flar':
      case 'suporte':
      case 'humano':
      case 'falar com humano':
      case 'preciso de ajuda':
      case 'fale com alguem':
      case 'falar com algm':
      case 'falecomhumano':
        await client.sendText(message.from,
`Certo! Já vamos te conectar com um dos nossos atendentes. 💬

⏳ Pode levar alguns minutinhos, mas fique tranquilo(a), você será atendido(a) o mais breve possível.

Enquanto isso, se quiser adiantar, já pode escrever sua dúvida ou solicitação por aqui mesmo.

🔁 Digite *menu* para voltar ao menu principal.`);
        break;

      // Voltar ao menu
      case 'menu':
      case 'voltar':
      case 'início':
      case 'home':
      case 'inicio':
      case 'inisio':
      case 'menu principal':
      case 'menuprincipal':
      case 'menu-principal':
        await client.sendText(message.from,
`Olá! 👋 Seja bem-vindo(a) à ARENA , o seu espaço de areia preferido para esportes, lazer e bons momentos! 🌴⚽🏐

Como podemos te ajudar hoje? Escolha uma opção abaixo:

1️⃣ Agendar aulas.  
2️⃣ Reservar quadra.  
3️⃣ Obter informações sobre o Day Use.  
4️⃣ Ver cardápio do bar.  
5️⃣ Eventos e Aniversários.  
6️⃣ Falar com um atendente.  

🔁 Para voltar a este menu a qualquer momento, digite *menu*.`);
        break;

      default:
        await client.sendText(message.from,
`Desculpe, não entendi sua mensagem. Por favor, escolha uma das opções:

1️⃣ Agendar aulas  
2️⃣ Reservar quadra  
3️⃣ Obter informações sobre o Day Use  
4️⃣ Ver cardápio do bar  
5️⃣ Eventos e Aniversários  
6️⃣ Falar com um atendente

🔁 Digite *menu* para ver o menu novamente.`);
        break;
    }
  });
}
