// Claim All Itent
function itemCheckToClaim(){
  //constantes
  const itemName = event.target.title;
  const itemCount= event.target.value;
  const itemID   = event.target.getAttribute('id');
  const itemIcon = event.target.src;
  const itemType = event.target.getAttribute('class');
  const itemPath = event.target.dataset.type;
  const itemCDisp= event.target.dataset.quanto;
  
  //funcionalidades
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block'); //Abrir o menu
  menusVenishTrap.style.pointerEvents = 'auto';
  //Como o Icone vai ser Exibido
  titleTextW1.innerHTML = '{ITEM}{COUNT}';
  imageThumb.src = itemIcon;
  imageThumb.setAttribute('draggable', 'false');
  imageThumb.setAttribute('class', itemType);
  countText.innerHTML = itemCount+'x';
  inputDescript.removeAttribute('disabled');
  
  //Checar se o Item pode ser coletado
  if(itemCount < 1 ){
    confirmButton.setAttribute('id', 'notClaimableClaim');
    confirmButton.setAttribute('disabled', 'true');
  }else{
    confirmButton.setAttribute('id', 'confirmClaim');
    confirmButton.removeAttribute('disabled');
  }
  if(itemCount < 5 || itemCount == '' || isNaN(itemCount)){
    sacrifyButton.setAttribute('class', 'notClaimableClaim');
    sacrifyButton.setAttribute('disabled', 'true');
  }else{
    sacrifyButton.setAttribute('class', 'ClaimableClaim');
    sacrifyButton.removeAttribute('disabled');
  }
  
  //Projetar Tudo
  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindow.append(win2);
  
  //Descrição pra cada Item
  if(itemID == 'voidItem_1'){
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM}. {ITEM} Se trata de uma skin para sua barra de vida quando você se torna <i>Boss</i>, a baixo você pode escolher quem deseja presentear com {ITEM}';
    footerText.innerHTML = 'Se você esta nessa janela isso significa que você ja possui sua propria {ITEM} e pode oferecer essa a outro viewer do chat.';
    inputDescript.setAttribute('placeholder', 'Digite o Nick de quem você deseja presentear com {ITEMTITLE}');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton, confirmButton);
  }
  
  else if(itemID == 'voidItem_2'){
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM}. Ao usar {ITEM} você ou alguém de sua escolha sera presenteado com uma <i>Inscrição Paga</i> no nosso canal da <i>Twitch</i>, a baixo você pode escolher quem deseja presentear ou escolher se deseja receber o {ITEM} em alguma live especifica.';
    footerText.innerHTML = 'O {ITEM} pode ser resgatado para você ou para alguém que vc deseje presentear com sub, basta deixar o campo a baixo em branco caso seja pra você mesmo sem nenhuma especificação.';
    inputDescript.setAttribute('placeholder', 'Presentear alguém com {ITEMTITLE}');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton, confirmButton);
  }
  
  else if(itemID == 'voidItem_3'){
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM}. O {ITEM} te concede o cargo Vip no nosso canal da <i>Twitch</i> e <i>Discord</i>, ao resgatar nossos moderadores irão receber o sua notificação de resgate e assim que possivel sera aplicado seus cargos.';
    footerText.innerHTML = 'O {ITEM} pode ser resgatado para você ou para alguém que vc deseje passar o cargo, basta deixar o campo a baixo em branco caso seja pra você mesmo.';
    inputDescript.setAttribute('placeholder', 'Presentear alguém com {ITEMTITLE}');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton, confirmButton);
  }
  
  else if(itemID == 'voidItem_4'){
    
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM} e pode resgata-lo agora mesmo, o {ITEM} pode ser resgatado 1x clickando no botão "Resgatar" e os moderadores irão te devolver uma recompensa que você tenha gasto usando <i>Pontos De Canal</i> começando das recompensas de 10.000 pontos. <br />Você também pode clicar no botão "Sacrificar Tudo", isso ira consumir 5x do {ITEM} e os moderadores irão lhe devolver uma recompensa de canal maior que 10.000 e menor que 350.000, começando pelas recompensas de 350.000.';
    footerText.innerHTML = 'O {ITEM} só ira devolver pontos de canal de recompensas que você ja tenha resgatado, só use depois de resgatar recompensas de canal, do contrario nada sera devolvido.';
    inputDescript.setAttribute('placeholder', 'Caso seja uma recompensa expecifica');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    sacrifyButton.setAttribute('title', 'Sacrificar 5x {ITEMTITLE}');
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton, confirmButton, sacrifyButton);
  }
  else if(itemID == 'voidItem_5'){
    descText.innerHTML = 'Olá {NOME}, Esse é o Boss Atual, porém você não deveria estar aqui.';
    footerText.innerHTML = 'O {ITEM} é um sinalizador de quem é o atual boss.';
    inputDescript.setAttribute('placeholder', 'Porfavor volte para o menu anterior');
    inputDescript.setAttribute('disabled', 'true');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton);
  }
  else if(itemID == 'voidItem_6'){
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM}. {ITEM} Se trata de uma skin para sua barra de vida quando você se torna <i>Boss</i>, a baixo você pode escolher quem deseja presentear com {ITEM}';
    footerText.innerHTML = 'Se você esta nessa janela isso significa que você ja possui sua propria {ITEM} e pode oferecer essa a outro viewer do chat.';
    inputDescript.setAttribute('placeholder', 'Digite o Nick de quem você deseja presentear com {ITEMTITLE}');
    confirmButton.innerHTML = 'RESGATAR';
    confirmButton.setAttribute('title', 'Resgatar 1 {ITEMTITLE}');
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, countText, descText, footerText, inputDescript, cancelButton, confirmButton);
  }
  else if(itemID == 'voidItem_7'){
    descText.innerHTML = 'Olá {NOME}, o item que você clicou esta indiponivel por enquanto :(.';
    footerText.innerHTML = 'Espero que o item ja esteja disponivel quando você voltar {NOME}';
    inputDescript.setAttribute('placeholder', 'Me Desculpa :c');
    inputDescript.setAttribute('disabled', 'true');
    cancelButton.innerHTML = 'VOLTAR T.T';
    win2.append(descText, footerText, inputDescript, cancelButton);
  }
  else{
    subTitleTxT.innerHTML = 'Hmm, ok, tudo bem, fomos longe de mais, você definitivamente não deveria estar aqui';
    descText.innerHTML = 'Ok {NOME}, tente isso aqui...';
    cancelButton.innerHTML = 'FECHAR';
    win2.append(subTitleTxT, descText, cancelButton);
  }
  
  
  warningWindow.innerHTML = warningWindow.innerHTML.replace(/{ITEM}/g, '<i>'+itemName+'</i>').replace(/{COUNT}/g, '<o><i>'+itemCount + 'x</i></o>').replace(/{NOME}/g, '<i>'+userDebb.innerHTML+'</i>').replace(/{ITEMTITLE}/g, itemName).replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');  //Não Esqueça de Editar Isso
  setTimeout(()=>{
    warningWindow.style.opacity = '1';
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningWin2Opacity', '1');
    }, 400)
  }, 100)
  
  
  if(itemCount > 0){//claimItemNow
    if(confirmClaim){
      confirmClaim.addEventListener('click', claimItemNow);
    }else{
    confirmClaim.removeEventListener('click', claimItemNow);
    }
  }
  
  const sacrificeAllBtn = document.querySelector('#SacrificeALL');
  if(itemCount > 4){
    if(sacrificeAllBtn){
      sacrificeAllBtn.addEventListener('click', sacrifyItemNow);
    }
    else{
      sacrificeAllBtn.removeEventListener('click', sacrifyItemNow);
    }
  }
  
  if(InputDesc){
    InputDesc.addEventListener('focusout', descriptionField);
  }
  //Target Selecteds
  itemIDTarget   .value = itemID;
  itemNameTarget .value = itemName; 
  itemCountTarget.value = itemCount;
  itemIconTarget .value = itemIcon; 
  itemTypeTarget .value = itemType; 
  itemPathTarget .value = itemPath;
  itemCountLocal .value = itemCDisp;
  targetSelField.append(itemNameTarget, itemCountTarget, itemIconTarget, itemTypeTarget);
  
  //Send For Discord//
}

//Input De Descrição Update//
function descriptionField(){
  const descField = document.querySelector("#InputDesc");
  if(descField){
    inputDescript.value = descField.value;
  }
  targetSelField.append(inputDescript);
}

/////////////////
function itemInfoCheckUser(){
  //constantes
  const itemName = event.target.title;
  const itemCount= event.target.value;
  const itemID   = event.target.getAttribute('id');
  const itemIcon = event.target.src;
  const itemType = event.target.getAttribute('class'); //bossSelNome.value
  //funcionalidades
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block'); //Abrir o menu
  menusVenishTrap.style.pointerEvents = 'auto';
  //Como o Icone vai ser Exibido
  titleTextW1.innerHTML = '{ITEM}';
  imageThumb.src = itemIcon;
  imageThumb.setAttribute('draggable', 'false');
  imageThumb.setAttribute('class', itemType);
  countText.innerHTML = itemCount+'x';
  
  //Projetar Tudo
  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindow.append(win2);
  
  //Descrição pra cada Item
  if(itemID == 'item_01'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM}. <br />{ITEM} é uma skin de barra de vida quando {NOME} se tornar boss a barra de vida dele pode ter o design {ITEM}';
    footerText.innerHTML = 'Pede de presente pro(a) {NOME}';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_02'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM}. <br />{ITEM} é o que o proprio nome diz, {NOME} pode resgatar um Gift Sub para quem quiser a hora que quiser no nosso canal da Twitch.';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, descText, cancelButton);
  }
  
  else if(itemID == 'item_03'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM}, assim podendo tornar-se Vip a hora que quiser ou pode presentear alguém com o Cargo Vip no nosso canal na Twitch.';
    footerText.innerHTML = 'Se vc merecer {NOME} pode te dar um {ITEM} de presente';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_04'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM} e {ITEM} pode retornar Resgates por Pontos de Canal de <i>10.000 Pontos</i> a <i>300.000</i> para {NOME}';
    footerText.innerHTML = '{NOME} concerteza vai usar isso pra fechar lives.';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_05'){
    descText.innerHTML = '{ITEM} identifica o Boss atual, porém essa guia é desnecessário';
    footerText.innerHTML = 'Aproposito, como você chegou aqui?';
    cancelButton.innerHTML = 'MELHOR SAIR {NOME}';
    win2.append(titleTextW1, imageThumb, descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_06'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM}. <br />{ITEM} é uma skin de barra de vida quando {NOME} se tornar boss a barra de vida dele pode ter o design {ITEM}';
    footerText.innerHTML = 'Se você insistir muito o(a) {NOME} pode te presentear com a {ITEM}';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(titleTextW1, imageThumb, descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_07'){
    descText.innerHTML = 'Esse Item ainda não esta disponivel =/';
    footerText.innerHTML = 'Acho Melhor Voltar...';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(descText, footerText, cancelButton);
  }
  
  else if(itemID == 'item_08'){
    descText.innerHTML = 'Acho que vc esta indo longe demais.';
    footerText.innerHTML = 'Melhor voltar pra guia anterior, não tem nada aqui.';
    cancelButton.innerHTML = 'VOLTAR';
    win2.append(descText, footerText, cancelButton);
  }
  else{
    subTitleTxT.innerHTML = 'Bom, essa mensagem não deveria nem ser necessaria';
    descText.innerHTML = 'Gostaria de entender o porque ou oque você esta tentando acessar? me conta la no Discord, pode chamar que vou responder <a href="https://discord.gg/XmF6Sx8AAw">>Meu Discord<</a>, eu sou o que tem o cargo "Rei Negro".';
    footerText.innerHTML = 'Pode parar de tentar quebrar o site? =(';
    cancelButton.innerHTML = 'PARAR DE TENTAR QUEBRAR O SITE =D';
    win2.append(subTitleTxT, descText, footerText, cancelButton);
  }
  
  warningWindow.innerHTML = warningWindow.innerHTML.replace(/{ITEM}/g, '<i>'+itemName+'</i>').replace(/{COUNT}/g, '<o><i>'+itemCount + 'x</i></o>').replace(/{NOME}/g, '<i>'+bossSelNome.value+'</i>').replace(/{ITEMTITLE}/g, itemName).replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');  //Não Esqueça de Editar Isso
  setTimeout(()=>{
    warningWindow.style.opacity = '1';
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningWin2Opacity', '1');
    }, 400)
  }, 100)
}

function onItemViewerClose(){
  document.documentElement.style.setProperty('--warningWin2Opacity', '0');
  win1.setAttribute('style', 'opacity:0;');
  setTimeout(() =>{
    warningWindow.style.opacity = '0';
    setTimeout(() =>{
      win2.innerHTML= '';
      warningWindow.innerHTML = '';
      warningWindow.style.setProperty('--warningView', 'none');
      win2.removeAttribute('style');
      win1.removeAttribute('style');
      warningWindow.style.opacity = '';
      menusVenishTrap.style.setProperty('--menusVenishDisplay', 'none');
      menusVenishTrap.style.pointerEvents = 'none';
    }, 500)
  }, 400)
}


/////////////Colections Viewer/////////
function floraisViewer(){
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block'); //Abrir o menu
  menusVenishTrap.style.pointerEvents = 'auto';

  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindows.style.opacity = '1';
  document.documentElement.style.setProperty('--warningWin2Opacity', '1');
  warningWindow.innerHTML = '';
  itemFrame.src = 'https://novaordemmundial.github.io/barras/florais/Florais.html';
  titleText.innerHTML     = "Flora'Eyes";
  descText.innerHTML      = "Flora'Eyes é uma skin para barra de vida que fica no canto inferior da tela de live. <br/>Se você possuir essa skin de barra assim que se tornar boss a sua barra de vida assumira a aparencia de Flora'Eyes"
  obsText.innerHTML       = 'Caso queira mudar sua skin basta pedir no chat da live enquanto estiver ao vivo.';
  footerText.innerHTML    = 'Skins De Barra são muito trabalhosas e podem demorar para lançar.'
  cancelButton.innerHTML  = 'OK';
  warningWindow.append(win2);
  win2.append(titleText, itemFrame, descText, obsText, footerText, cancelButton);
}

function papercutoutViewer(){
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block'); //Abrir o menu
  menusVenishTrap.style.pointerEvents = 'auto';

  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindows.style.opacity = '1';
  document.documentElement.style.setProperty('--warningWin2Opacity', '1');
  warningWindow.innerHTML = '';
  itemFrame.src = 'https://novaordemmundial.github.io/barras/papercutout/paperSkin.html';
  titleText.innerHTML = "Papercut Bar";
  descText.innerHTML  = "Papercut é uma skin para barra de vida que fica no canto inferior da tela de live. <br/>Se você possuir essa skin de barra assim que se tornar boss a sua barra de vida assumira a aparencia de Papercut"
  obsText.innerHTML       = 'Caso queira mudar sua skin basta pedir no chat da live enquanto estiver ao vivo.';
  footerText.innerHTML = 'Skins De Barra são muito trabalhosas e podem demorar para lançar.'
  cancelButton.innerHTML = 'OK';
  warningWindow.append(win2);
  win2.append(titleText, itemFrame, descText, obsText, footerText, cancelButton);
}
