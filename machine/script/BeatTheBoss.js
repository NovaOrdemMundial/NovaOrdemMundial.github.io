function bossIs(){ //Lista de Bosses
  const getBoss = event.target.value;
  const bossAtual = localStorage.getItem('userData');
  const boss = bossInfos[getBoss];
  localStorage.setItem('bossName', boss.nome+'Story');
  bossNome.innerHTML = boss.nome;
  bossNick.innerHTML = boss.nick;
  bossNick.setAttribute('title', `Ir para o canal de ${boss.nome} na Twitch.`)
  linksFild.innerHTML = boss.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+boss.boss_banner+')');
  bossLevel.value = boss.classe;
  twitchLink.value = boss.twitch_link;
   
  bossNick.addEventListener('click', () =>{
    window.open(twitchLink.value , '_blank');
  });
  
  //debbs
  bossSelDoc    .value  = boss.doc;
  bossSelNick   .value  = boss.nick;
  bossSelNome   .value  = boss.nome;
  bossSelAvatar .value  = boss.avatar_url;
  bossSelLink   .value  = boss.boss_link;
  bossSelID     .value  = boss.id;
  targetSelField.append(bossSelNome, bossSelNick, bossSelDoc, bossSelAvatar, bossLevel, twitchLink, bossSelLink);
  
  //Ler Items
  itemsAvalible.forEach((item) => {
    const itemSpawn = document.createElement('IMG');
    florais.stock = boss.florais;
    papercutout.stock = boss.papercut;
    itemSpawn.src = item.icon;
    itemSpawn.setAttribute('class', item.rarity + ' btnconf');
    itemSpawn.setAttribute('id', item.name_id);
    itemSpawn.setAttribute('title', item.nome);
    itemSpawn.setAttribute('value', item.stock);
    itemSpawn.setAttribute('onclick', item.funcao);
    collection.append(itemSpawn);
  //Valor do item
    itemUnvalible(itemSpawn);
    
  });
  
  //Check
  checkBossAuth();
  targetSelField.append(checkSelBoss);
  
  ///Secret Check///
  secretIs();
  //Data Itens
  itemCheck();
  
  //Boss Tab Design
  bossTabOpen();
  bossTheme();
  //Outras Leituras
  bossStoryRead();
  //Status Load
  setTimeout(() => {
    statusMake(boss);
  }, 1000);
}

function bonusIs(){//Lista de Visitantes
  const getBoss = event.target.value;
  localStorage.setItem('userData', getBoss);
  const bossAtual = localStorage.getItem('userData');
  const visit = extraBossInfos[getBoss];
  bossNome.innerHTML = visit.nome;
  bossNick.innerHTML = visit.nick;
  bossNick.setAttribute('title', `Ir para o canal de ${visit.nome} na Twitch.`)
  linksFild.innerHTML = visit.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+visit.boss_banner+')');
  bossLevel.value = visit.classe;
  twitchLink.value = visit.twitch_link;
  
  bossNick.addEventListener('click', () =>{
    window.open(twitchLink.value , '_blank');
  });
  //debbs
  bossSelDoc    .value  = visit.doc;
  bossSelNick   .value  = visit.nick;
  bossSelNome   .value  = visit.nome;
  bossSelAvatar .value  = visit.avatar_url;
  bossSelLink   .value  = visit.boss_link;//
  bossSelID     .value  = visit.id;
  targetSelField.append(bossSelNome, bossSelNick, bossSelDoc, bossSelAvatar, bossLevel, bossSelLink, twitchLink, checkSelBoss);//
  
  //Ler Items
  itemsAvalible.forEach((item) => {
    const itemSpawn = document.createElement('IMG');
    florais.stock = visit.florais;
    papercutout.stock = visit.papercut;
    itemSpawn.src = item.icon;
    itemSpawn.setAttribute('class', item.rarity + ' btnconf');
    itemSpawn.setAttribute('id', item.name_id);
    itemSpawn.setAttribute('value', item.stock);
    itemSpawn.setAttribute('title', item.nome);
    itemSpawn.setAttribute('onclick', item.funcao);
    collection.append(itemSpawn);
  //Valor do item
    itemUnvalible(itemSpawn);
  });
  
  //Check
  checkBossAuth();
  targetSelField.append(checkSelBoss);
  
  //Check Itens
  itemCheck();
  
  //Boss Tab Design
  bossTabOpen();
  bossTheme();
  //Boss Story
  visitStoryRead();
  //Status Load
  setTimeout(() => {
    statusMake(visit);
  }, 1000);
}

/////////////////////////////////////////

////Design Da Tab De Boss Ao Abrir////
function bossTabOpen(){
  bossTabScreen.style.setProperty('--bossScreenDisplay', 'flex');
  trapTabClose .style.setProperty('--closeTabDisplay', 'block');
  audioPlace();
  setTimeout(() => {
    bossTabWindow.style.setProperty('--bossWindowOpacity', '1');
    bossTabScreen.style.setProperty('--bossScreenOpacity', '1');
    bossTabWindow.style.setProperty('--bossTransitionTime', '0.8s');
    bossTabScreen.style.setProperty('--bossSTransitionTime', '0.2s');
    bossTabWindow.style.setProperty('--bossWindowWidth', '70%');
    bossTabWindow.style.setProperty('--bossWindowHeight', '95%');
  }, 100);
}

//Tab Style
function bossTheme(){
  if(bossLevel.value === 'roxoLvl'){
    bossTabWindow.classList.add('tabRoxa');
    inventario.classList.add('invRoxo');
  }
  else if(bossLevel.value === 'greyLvl'){
    bossTabWindow.classList.add('tabCinza');
    inventario.classList.add('invCinza');
  }
  else if(bossLevel.value === 'amareloLvl'){
    bossTabWindow.classList.add('tabAmarela');
    inventario.classList.add('invAmarelo');
  }
}

///////////////////////////////

//            //Items Looteaveis//         ////
//////////////////Items Looteaveis Do Boss////////////////
function itemCheck(){
  const bossDocField    = document.getElementById('bossSelDocs');
  const bossCollection  = path.collection('bosses');
  const InventoryLoot   = document.getElementById('lootlable');
  const aiddIs          = localStorage.getItem('identification');
  path.collection('Bosses').doc(bossSelDoc.value).collection('items').get().then((getItems) =>{
    getItems.docs.forEach((getted) =>{
      const items  = getted.data();
      const itemSpawn = document.createElement('img');
      itemSpawn.src = items.item_icon;
      //itemSpawn.setAttribute('value', items.item_value);
      itemSpawn.value = items.item_value;
      itemSpawn.setAttribute('title', items.item_title);
      itemSpawn.setAttribute('class', items.item_rarity + ' btnconf');
      itemSpawn.setAttribute('id',    'voidItem_'+items.item_id);
      itemSpawn.dataset.type    = items.item_map;
      itemSpawn.dataset.quanto  = items.item_tag;
      //Contador
      const iCount = document.createElement('span');
      iCount.setAttribute('id', items.item_tag);
      iCount.innerHTML = items.item_value;
      InventoryLoot.append(itemSpawn, iCount);
      
      //Condições de Resgate de Itens
      if(itemSpawn.value < 1){
        itemSpawn.removeAttribute('id');
        itemSpawn.setAttribute('style', 'display:none;');
      }
      else if(bossSelID.value == aiddIs){
        itemSpawn.setAttribute('id',    'voidItem_'+items.item_id);
        itemSpawn.addEventListener('click', () => {
          itemClickedCheck();
        })
      }
      else{
        itemSpawn.setAttribute('id',    'item_0'+items.item_id);
        itemSpawn.addEventListener('click', () =>{
          itemUserInfos();
        });
      }
      if(iCount.innerHTML < 1 || isNaN(iCount.innerHTML)){
        iCount.setAttribute('style', 'display:none;');
      }
    })
  })
  audioPlace();
}

///////////////////////////////////////////

/////////////Barras De Status//////////////
function statusMake(boss){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(boss.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(boss.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(boss.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(boss.status.força / forceMax * 100);
  const focusResult   = Math.ceil(boss.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(boss.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}

function statusMake(visit){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(visit.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(visit.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(visit.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(visit.status.força / forceMax * 100);
  const focusResult   = Math.ceil(visit.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(visit.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}

/////////////////////////////////////////////

///////Ler Historicos///////////////////
//          ////        Carregar Historico Dos Bosses          ////                   ///

const snapStory = (rev) => {
  const result= rev;
  const leftDialog = document.createElement('SPAN');
  leftDialog.innerHTML = result.player;
  leftDialog.setAttribute('class', 'leftInf');
  
  const centerDialog = document.createElement('SPAN');
  centerDialog.innerHTML = result.action;
  centerDialog.setAttribute('class', 'centerInf');
  
  const rightDialog = document.createElement('SPAN');
  rightDialog.innerHTML = result.victim;
  rightDialog.setAttribute('class', 'rightInfo');
  
  const hLine = document.createElement('P');
  hLine.append(leftDialog, centerDialog, rightDialog);
  storyField.append(hLine);
};

      /// /// ////  /// //  /// ////  ////

function bossStoryRead(){
  
  if(event.target.value === '0'){
    FoolsStory.forEach(snapStory);
  }
  
  else if(event.target.value === '1'){
    JuninhoStory.forEach(snapStory);
  }
  else if(event.target.value === '2'){
    KingStory.forEach(snapStory);
  }
  else if(event.target.value === '3'){
    PandasStory.forEach(snapStory);
  }
  else if(event.target.value === '4'){
    GuiStory.forEach(snapStory);
  }
  else if(event.target.value === '5'){
    EdneyStory.forEach(snapStory);
  }
  else if(event.target.value === '6'){
    KingaStory.forEach(snapStory);
  }
}

function visitStoryRead(){
  
  if(event.target.value === '0'){
    SbeekerStory.forEach(snapStory);//
  }
  if(event.target.value === '1'){
    SteveStory.forEach(snapStory);
  }
  if(event.target.value === '2'){
    RafaStory.forEach(snapStory);
  }
  if(event.target.value === '3'){
    MandraxStory.forEach(snapStory);
  }
  if(event.target.value === '4'){
    GirlStory.forEach(snapStory);
  }
  if(event.target.value === '5'){
    WhityStory.forEach(snapStory);
  }
  if(event.target.value === '6'){
    PauloStory.forEach(snapStory);
  }
}

//////////////////////////////////

/////////Mecanismos De Defesa///////////
/////////////////////////Remover Item Caso Seja 0//////////////////////////////
function itemUnvalible(itemSpawn){
  if(itemSpawn.getAttribute('value') < 1){
    //itemSpawn.removeAttribute('src');
    itemSpawn.setAttribute('class', 'itemDisabled');
    itemSpawn.setAttribute('onclick', 'disabled()')
  }
}

function disabled(){
  
}
/////////////////////////////////////////////

///////Item Claim//////////////
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
  audioPlace();
  
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
    descText.innerHTML = 'Olá {NOME}, você possui {COUNT} {ITEM}. {ITEM} Se trata da primera skin de barra de vida quando você se torna <i>Boss</i>, a baixo você pode escolher quem deseja presentear com {ITEM}';
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
    inputDescript.setAttribute('placeholder', 'Caso seja uma recompensa especifica');
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
    //else{
    //  sacrificeAllBtn.removeEventListener('click', sacrifyItemNow);
    //}
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

///////////////////////////////////////////

//Input De Descrição Update//
function descriptionField(){
  const descField = document.querySelector("#InputDesc");
  if(descField){
    inputDescript.value = descField.value;
  }
  targetSelField.append(inputDescript);
}

///////////////////////////////////////////////////

/////////info item clicked////////
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
  audioPlace();
  
  //Descrição pra cada Item
  if(itemID == 'item_01'){
    descText.innerHTML = '{NOME} possui {COUNT} {ITEM}. <br />{ITEM} é a primeira skin de barra de vida quando {NOME} se tornar boss a barra de vida dele pode ter o design de {ITEM}';
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

/////////////////////////////////////////////////////////////////////

///////////////Skins Viewer/////////////////////////
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
