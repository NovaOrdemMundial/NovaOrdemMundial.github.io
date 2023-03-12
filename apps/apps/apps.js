eyeDespawn();

const pagesOfContent = [
  editor = {
    id:         'editor',
    icon:       'https://i.imgur.com/5BafBJL.png',
    mobile_icon:'https://i.imgur.com/JoHJjmq.png',
    title:      'Editor de Historias',
    subtitle:   '',
    content:    'Um local onde você pode criar historias, essas historias ficarão salvas em um banco de dados publico. <br/> Caso queira um espaço para vocês escrever suas historia de forma particular e até publicar para outras pessoas conseguir ler, basta mandar uma mensagem ao criador do app.',
    footer:     'Fique avontade pra criar diarios ou anotações.',
    link:       'https://novaordemmundial.github.io/apps/Editor',
    novo:   1,
    ad:     1,
    demo:   1,
    mobile: 0,
  },
  lista = {
    id:         'lista',
    icon:       'https://i.imgur.com/3ehJGG8.png',
    mobile_icon:'https://i.imgur.com/R4u28N5.png',
    title:      'Sua Lista De Compras',
    subtitle:   '',
    content:    'Precisa anotar coisas compradas ou o que vai comprar? Então essa é sua lista de compras, ela calcula seus produtos e exibe os resultados finais para você. <br/> <i>Você pode salvar uma lista em seus arquivos para abrir em outro lugar atravez do app.</i>',
    footer:     'As informações ficarão salvas em seu Navegador ou Dispositivo se assim Desejar.',
    link:       'https://novaordemmundial.github.io/apps/lista',
    novo:   1,
    ad:     0,
    demo:   0,
    mobile: 1,
  },
  sorteio = {
    id:         'YourLucky',
    icon:       'https://i.imgur.com/XHeCkjs.png',
    mobile_icon:'https://i.imgur.com/h4wel6l.png',
    title:      'Teste Sua Sorte',
    subtitle:   '',
    content:    'Nesse Espaço você sera capaz de adicionar ou remover itens a uma lista, esses itens serão sorteados com a mesma chance de ser escolhido. <i>A não ser que o item esteja repetido.</i>',
    footer:     'Pode Ser usado como Overlayer em lives.',
    link:       'https://novaordemmundial.github.io/live/sorte',
    novo:   0,
    ad:     0,
    demo:   0,
    mobile: 1,
  },
]

//////ITEMS DE CRIAÇÃO/////

pagesOfContent.forEach((page)=>{
  const card      = document.createElement('div');
  const cInfos    = document.createElement('DIV');
  const status    = document.createElement('button');
  const ads       = document.createElement('button');
  const demos     = document.createElement('button');
  const mobile    = document.createElement('button');
  const title     = document.createElement('H1');
  const subTitle  = document.createElement('H2');
  const cContent  = document.createElement('P');
  const footer    = document.createElement('H3');
  
  //Distribuição
  card.setAttribute('id', 'LLLL');
  status.classList.add('appStatus');
  ads   .classList.add('haveAd');
  demos .classList.add('isDemo');
  mobile.classList.add('mStatus');
  status.title = 'Mais Rencente Lançado';
  ads   .title = 'Possui Propagandas';
  demos .title = 'Demonstrativo';
  mobile.title = 'Disponivel para Celular';
  title.innerHTML     = page.title;
  subTitle.innerHTML  = page.subtitle;
  cContent.innerHTML  = page.content;
  footer.innerHTML    = page.footer;
  
  card.style.setProperty('--beforeBackground', `url(${page.icon})`);
  // card.style.backgroundImage = `url(${page.icon})`;
  
  
  //Informações
  cInfos.append(title, subTitle, cContent, footer);
  
  //Cartão Final
  card.append(cInfos);
  
  //Insersões
  if(page.novo == 1){
    card.append(status);
  }
  if(page.ad  ==  1){
    card.append(ads);
  }
  if(page.demo == 1){
    card.append(demos);
  }
  if(page.mobile == 1){
    card.append(mobile)
  }
  
  contentGuide.append(card);
  
  card.addEventListener('click', ()=>{
    window.open(page.link, '_self');
  });
});


//Mobile
pagesOfContent.forEach((tape, index)=>{
  const lineCard   = document.createElement('div');
  const infoBox    = document.createElement('div');
  const lineTitle  = document.createElement('h1');
  const descript   = document.createElement('p');
  const lineFooter = document.createElement('h3');
  const status     = document.createElement('button');
  const adverting  = document.createElement('button');
  const demos      = document.createElement('button');
  const mobile     = document.createElement('button');
  
  //Conteudo
  lineTitle.innerHTML = tape.title;
  descript.innerHTML  = tape.content;
  lineFooter.innerHTML= tape.footer;
  
  //Design
  lineCard.style.setProperty('--BackgroundMobile', `url(${tape.mobile_icon})`);
  lineCard.setAttribute('tabindex', index + 100);
  
  //Identificadores
  status   .classList.add('mNew');
  adverting.classList.add('mAds');
  demos    .classList.add('mDemo');
  mobile   .classList.add('mMobile');
  
  infoBox.append(lineTitle, descript, lineFooter);
  lineCard.append(infoBox);
  mobileGuide.append(lineCard);
  
  lineCard.addEventListener('click', ()=>{
    window.open(tape.link, '_self');
  });
  
  if(tape.novo == 1){
    lineCard.append(status);
  }
  if(tape.ad  == 1){
    lineCard.append(adverting);
  }
  if(tape.demo == 1){
    lineCard.append(demos);
  }
  if(tape.mobile == 1){
    lineCard.append(mobile);
  }
});

//Live Button Ads Format

const rockeyLive = document.createElement('VIDEO');
rockeyLive.src = 'https://rockeydoggy.github.io/media/animated/videos/Chanel%20Infos.webm';
rockeyLive.muted = true;
rockeyLive.controls = false;
rockeyLive.loop = true;
adBanner.title= 'Clique em "Sobre" para ver meios de contato ou Assiste la live 🥺';
adBanner.append(rockeyLive);

setTimeout(()=>{
  rockeyLive.play();
  adBanner.addEventListener('click', ()=>{
    window.open('https://twitch.tv/rockeydoggy');
  })
}, 5000);
