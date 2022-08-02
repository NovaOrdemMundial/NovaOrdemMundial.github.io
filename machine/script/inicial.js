function censuredEye(){
  olharCensura.play();
  olharCensura.style.opacity= '1';
  olhoAberto.style.opacity= '0';
  olhoAbrindo.style.opacity= '0';
  olhoDesaparece.style.opacity= '0';
  menuBotao.removeAttribute('onMouseOver');
  menuBotao.removeAttribute('onMouseOut');
  setTimeout(() => {
    menuBotao.setAttribute('onMouseOver', 'censuredEye()');
    menuBotao.setAttribute('onMouseOut', 'openEye()');
  },60);
}

function openEye(){
  olhoAbrindo.play();
  olhoAbrindo.style.opacity= '1';
  olhoAberto.style.opacity= '0';
  olharCensura.style.opacity= '0';
  olhoDesaparece.style.opacity= '0';
  
  menuBotao.removeAttribute('onMouseOver');
  menuBotao.removeAttribute('onMouseOut');
  setTimeout(() => {
    menuBotao.setAttribute('onMouseOver', 'censuredEye()');
    menuBotao.setAttribute('onMouseOut', 'openEye()');
    olhoAberto.play();
    olhoAberto.style.opacity= '1';
    olhoAbrindo.style.opacity= '0';
  },60);
}//
function eyeDespawn(){
  olhoDesaparece.play();
  olhoDesaparece.style.opacity= '1';
  olhoAberto.style.opacity= '0';
  olharCensura.style.opacity= '0';
  olhoAbrindo.style.opacity= '0';
  menuBotao.removeAttribute('onMouseOver');
  menuBotao.removeAttribute('onMouseOut');
  menuBotao.setAttribute('onClick', 'closeMenu()');
  menuBotao.style.filter = 'drop-shadow(0 0 0.5vw #666)';
  arrowBackMenu.style.transform = 'scale(0.2, 1.4) rotateX(-90deg)';
  arrowBackMenu.style.opacity = '0';
  arrowBackMenu.style.filter = 'saturate(0%) drop-shadow(0 0 0vw #FFF5)';
  //Botões que abrem o menu
  menuButtonsAnimation();
}
function closeMenu(){
  menuBotao.setAttribute('onMouseOver', 'censuredEye()');
  menuBotao.setAttribute('onMouseOut', 'openEye()');
  menuBotao.setAttribute('onClick', 'eyeDespawn()');
  menuBotao.style.filter = '';
  arrowBackMenu.style.transform = '';
  arrowBackMenu.style.opacity = '';
  arrowBackMenu.style.filter = '';
  
  menuButtonsReset();
}

function menuButtonsAnimation(){
  /*liveBtn.style.transform = 'translate(var(--menuButtonShow))';*/
  menuMapsGuide.style.setProperty('--buttonsTransition', 'all 0.7s ease-in-out');
  
  passBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
  passBtn.style.opacity = '1';
  passBtn.style.pointerEvents = 'auto';
  
  ytBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
  ytBtn.style.opacity = '1';
  ytBtn.style.pointerEvents = 'auto';
  
  setTimeout(() => {
    //custBtn.style.transform = 'translate(var(--menuButtonShow))';
    custBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    custBtn.style.opacity = '1';
    custBtn.style.pointerEvents = 'auto';
    
    twBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    twBtn.style.opacity = '1';
    twBtn.style.pointerEvents = 'auto';
  }, 200);
  
  setTimeout(() => {
    //scorBtn.style.transform = 'translate(var(--menuButtonShow))';
    // scorBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    // scorBtn.style.opacity = '1';
    // scorBtn.style.pointerEvents = 'auto';
    
    dsBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    dsBtn.style.opacity = '1';
    dsBtn.style.pointerEvents = 'auto';
  }, 400);
  
  setTimeout(() =>{
    //abBtn.style.transform = 'translate(var(--menuButtonShow))';
    abBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    abBtn.style.opacity = '1';
    abBtn.style.pointerEvents = 'auto';
    
    liveBtn.style.setProperty('--buttonsMarginBTW', '0 0%');
    liveBtn.style.opacity = '1';
    liveBtn.style.pointerEvents = 'auto';
  }, 600);
  setTimeout(() => {
    menuMapsGuide.style.setProperty('--buttonsTransition', 'all 0.08s ease-in');
  },1200);
}


function menuButtonsReset(){
  menuMapsGuide.style.setProperty('--buttonsTransition', 'all 0.7s ease-in');
  ytBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
  ytBtn.style.opacity = '0';
  ytBtn.style.pointerEvents = '';
  
  passBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
  passBtn.style.opacity = '0';
  passBtn.style.pointerEvents = 'none';
  
  
  setTimeout(() => {
    //twBtn.style.transform = '';
    twBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    twBtn.style.opacity = '0';
    twBtn.style.pointerEvents = '';
    
    custBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    custBtn.style.opacity = '0';
    custBtn.style.pointerEvents = '';
  }, 100)
  
  setTimeout(() =>{
    //dsBtn.style.transform = '';
    dsBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    dsBtn.style.opacity = '0';
    dsBtn.style.pointerEvents = '';
    
    // scorBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    // scorBtn.style.opacity = '0';
    // scorBtn.style.pointerEvents = '';
  }, 200)
  
  setTimeout(() =>{
    //ytBtn.style.transform = '';
    liveBtn.style.transform = '';
    liveBtn.style.opacity = '0';
    liveBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    
    abBtn.style.setProperty('--buttonsMarginBTW', '0 -10%');
    abBtn.style.opacity = '0';
    abBtn.style.pointerEvents = '';
  }, 300)
}


/////List Bosses ///
bossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox')
  criarBoss.setAttribute('class', bossList.classe + ' btnsfx');
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bossIs()');
  criarBoss.innerHTML = bossList.nome;
  criarBoss.dataset.level = bossList.classe;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossEsquerda.append(criarBoss);
})
//    //  Tipos de Criação  //    //
extraBossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox');
  criarBoss.setAttribute('class', bossList.classe + ` btnsfx ${bossList.nick}`);
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bonusIs()');
  criarBoss.innerHTML = bossList.nome;
  criarBoss.dataset.level = bossList.classe;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossDireita.append(criarBoss);
});

/////////////////////////////////////////////

//Como tudo vai se comportar ao clicar no botão "Customizações"
customButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--customScreenStatus', 'flex');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  customItemsSpawn();
  setTimeout(() =>{
    document.documentElement.style.setProperty('--customScreenView', '1');
    setTimeout(() => {
      document.documentElement.style.setProperty('--customDisplayView', '0%');
    }, 300);
  },100)
  
  doneCustom.addEventListener('click', ()=>{
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
  });
})

//Ao Fechar o Menu De Customizações//
function customColse(){
  document.documentElement.style.setProperty('--customDisplayView', '120%');
  setTimeout(() =>{
    document.documentElement.style.setProperty('--customScreenView', '0');
    setTimeout(() =>{
      document.documentElement.style.setProperty('--customScreenStatus', 'none');
      themeField.innerHTML = '';
      soundField.innerHTML = '';
      secretField.innerHTML = '';
      collectionField.innerHTML = '';
      outraField.innerHTML = '';
    }, 300)
  }, 200)
}

///////////////////////////////////////////

////////Botão Password do Menu////////
passwordBtn.addEventListener('click', () => {
  openPassScreen();
});

function openPassScreen(){
  passBackScreen.style.setProperty('--PassScreenDisplay', 'flex');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  setTimeout(() => {
    passBackScreen.style.opacity = '1';
    setTimeout(() => {
      passScreen.style.opacity = '1'
    }, 400);
  },100);
}

//////////////////////////////////////

//			Social Buttons On Menu 			//
ytBtn.addEventListener('click', () =>{
  
  win1.innerHTML = '';
  
  const esse       = event.target;
  const ttImage    = '';
  const vVideo     = 'https://i.imgur.com/jifS773.mp4';
  const youtubeMSG = '...<br /><y>Videos de Clip, Momentos de live e alguns videos antigos ai.</y>';
  const linkDisp   = 'youtube.com/RockeyDoggy';
  socialLink = 'https://youtube.com/RockeyDoggy';
  linkVideo.setAttribute('onclick', 'goToLink()');
  win1.append(linkTitle, linkVideo, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{SOCIALVIDEO}/g, vVideo).replace(/{MESSAGE}/g, youtubeMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
  linkVideo.load();
  
})

twBtn.addEventListener('click', () =>{
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/0L7o436.png';
  const twitterMSG = '...<br/> <y>Só tem posts estranhos ai, mas se gostar segue la.</y>';
  const linkDisp   = 'twitter.com/RockeyDoggy';
  socialLink = 'https://twitter.com/RockeyDoggy';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

dsBtn.addEventListener('click', () => {
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/cGqNyOi.png';
  const twitterMSG = '...<br /><y> No Discord você pode interagir e conversar com os outros viewers ou entrar em contato com os moderadores ou desenvolvedores.</y>';
  const linkDisp   = 'discord.gg/XmF6Sx8AAw';
  socialLink = 'https://discord.gg/XmF6Sx8AAw';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

function warningRedirect(){
  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindow.style.opacity = '1';
  document.documentElement.style.setProperty('--warningWin1Opacity', '1');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  linkTitle.innerHTML     = 'Indo para o {SOCIAL}';
  linkImage.src           = '{SOCIALIMAGE}';
  linkVideo.src           = '{SOCIALVIDEO}';
  linkImage.setAttribute('onclick', 'goToLink()');
  linkSubTitle.innerHTML  = 'Você sera direcionado Para o Nosso {SOCIAL} {MESSAGE}';
  linkAsk.innerHTML       = 'Você deseja mesmo ir para "{LINKDISPLAY}"?'
  linkSim.innerHTML       = 'SIM!';
  linkNao.innerHTML       = 'CLARO...';
  warningWindow.append(win1);
}

function socialFunctions(){
  win1.append(linkSim, linkNao);
  linkNao.addEventListener('click', () => {
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
    linkSim.removeEventListener('click', goToLink);
  });
  linkSim.addEventListener('click', goToLink);
  
  linkNao.addEventListener('mouseover', ()=>{
    linkNao.innerHTML = 'QUE NÃO!'
      linkNao.addEventListener('mouseout', ()=>{
        linkNao.innerHTML       = 'CLARO...'
      })
  })
}

///////////////////////////////////////

//////////{Anonimo Novamente}///////////
userDebb.addEventListener('click', function setsDeUser(){
  localStorage.setItem('LoggedHas',       '');
  localStorage.setItem('LoggedPath',      '');
  localStorage.setItem('identification',  '');
  localStorage.setItem('UserType',        '');
  algumascoisinhas();
  document.location.reload(true);
});

//////////////////////////////////////////////////////////

///////Highlight ao carregar//////////////////
function bossMessages(){
  //Criação dos Elementos
  const tituloText        = document.createElement('H1');
  const subTituloText     = document.createElement('H2');
  const descricaoText     = document.createElement('H3');
  const subDescricaoText  = document.createElement('H4');
  const rodapeText        = document.createElement('H5');
  const subRodapeText     = document.createElement('H6');
  const imageHighlight    = document.createElement('IMG');
  const videoHighlight    = document.createElement('VIDEO');
  
  tituloText      .innerHTML = highlight1.titulo;
  subTituloText   .innerHTML = highlight1.subtitulo;
  descricaoText   .innerHTML = highlight1.descrição;
  subDescricaoText.innerHTML = highlight1.subdescrição;
  rodapeText      .innerHTML = highlight1.rodape;
  subRodapeText   .innerHTML = highlight1.subrodape;
  imageHighlight  .src = highlight1.imagem;
  videoHighlight  .src = highlight1.video;
  
  slidePanel.append(tituloText, subTituloText, descricaoText, subDescricaoText, rodapeText, subRodapeText, imageHighlight, videoHighlight)
}

///////////////////////////////////////////////////////////////

///////////Menu e Links Sociais////////////////////
///Botões
ytBtn.addEventListener('click', () =>{
  
  win1.innerHTML = '';
  
  const esse       = event.target;
  const ttImage    = '';
  const vVideo     = 'https://i.imgur.com/jifS773.mp4';
  const youtubeMSG = '...<br /><y>Videos de Clip, Momentos de live e alguns videos antigos ai.</y>';
  const linkDisp   = 'youtube.com/RockeyDoggy';
  socialLink = 'https://youtube.com/RockeyDoggy';
  linkVideo.setAttribute('onclick', 'goToLink()');
  win1.append(linkTitle, linkVideo, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{SOCIALVIDEO}/g, vVideo).replace(/{MESSAGE}/g, youtubeMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
  linkVideo.load();
  
})

twBtn.addEventListener('click', () =>{
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/0L7o436.png';
  const twitterMSG = '...<br/> <y>Só tem posts estranhos ai, mas se gostar segue la.</y>';
  const linkDisp   = 'twitter.com/RockeyDoggy';
  socialLink = 'https://twitter.com/RockeyDoggy';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

dsBtn.addEventListener('click', () => {
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/cGqNyOi.png';
  const twitterMSG = '...<br /><y> No Discord você pode interagir e conversar com os outros viewers ou entrar em contato com os moderadores ou desenvolvedores.</y>';
  const linkDisp   = 'discord.gg/XmF6Sx8AAw';
  socialLink = 'https://discord.gg/XmF6Sx8AAw';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

////Janelas
function warningRedirect(){
  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindow.style.opacity = '1';
  document.documentElement.style.setProperty('--warningWin1Opacity', '1');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  linkTitle.innerHTML     = 'Indo para o {SOCIAL}';
  linkImage.src           = '{SOCIALIMAGE}';
  linkVideo.src           = '{SOCIALVIDEO}';
  linkImage.setAttribute('onclick', 'goToLink()');
  linkSubTitle.innerHTML  = 'Você sera direcionado Para o Nosso {SOCIAL} {MESSAGE}';
  linkAsk.innerHTML       = 'Você deseja mesmo ir para "{LINKDISPLAY}"?'
  linkSim.innerHTML       = 'SIM!';
  linkNao.innerHTML       = 'CLARO...';
  warningWindow.append(win1);
}

function socialFunctions(){
  win1.append(linkSim, linkNao);
  linkNao.addEventListener('click', () => {
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
    linkSim.removeEventListener('click', goToLink);
  });
  linkSim.addEventListener('click', goToLink);
  
  linkNao.addEventListener('mouseover', ()=>{
    linkNao.innerHTML = 'QUE NÃO!'
      linkNao.addEventListener('mouseout', ()=>{
        linkNao.innerHTML       = 'CLARO...'
      })
  })
}

function goToLink(){
  window.open(socialLink, '_blank');
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
    linkSim.removeEventListener('click', goToLink);
}

////////////////////////////////////////////////////////////////

//////////////Botão Customizar e Janela////////////////
//Como tudo vai se comportar ao clicar no botão "Customizações"
customButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--customScreenStatus', 'flex');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  customItemsSpawn();
  setTimeout(() =>{
    document.documentElement.style.setProperty('--customScreenView', '1');
    setTimeout(() => {
      document.documentElement.style.setProperty('--customDisplayView', '0%');
    }, 300);
  },100)
  
  doneCustom.addEventListener('click', ()=>{
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
  });
})

//Ao Fechar o Menu De Customizações//
function customColse(){
  document.documentElement.style.setProperty('--customDisplayView', '120%');
  setTimeout(() =>{
    document.documentElement.style.setProperty('--customScreenView', '0');
    setTimeout(() =>{
      document.documentElement.style.setProperty('--customScreenStatus', 'none');
      themeField.innerHTML = '';
      soundField.innerHTML = '';
      secretField.innerHTML = '';
      collectionField.innerHTML = '';
      outraField.innerHTML = '';
    }, 300)
  }, 200)
}

////////////Detecções ao Carregar a Janela de Customização//////////
function customItemsSpawn(){
  passwordCascad.forEach((secret) => {
    const secretCard = document.createElement('BUTTON');
    secretCard.setAttribute('style', `background-image:url(${secret.icon_url});`);
    secretCard.setAttribute('data-description', secret.descrição);
    secretCard.setAttribute('data-image', secret.icon_url);
    secretCard.setAttribute('class', secret.ativado);
    secretCard.setAttribute('value', secret.unlock_id);
    secretCard.innerHTML = secret.nome_item;
    secretCard.value = secret.unlock_id;
    
    //Eventos De Click e Over/Out
    secretCard.addEventListener('click', () => {
      quesegredoeesse();
    });
    secretCard.addEventListener('mouseover', () => {
      secretsInfos();
    });
    secretCard.addEventListener('mouseout', () => {
      stopShowSecretInfos();
    });
    //Condições pra spawnar
    if(secret.possui === 'true'){
      if(secret.categoria === 'Secret'){
        secretField.append(secretCard);
      }
      else if(secret.categoria === 'Party'){
        collectionField.append(secretCard);
      }
      else if(secret.categoria === 'SoundPack'){
        soundField.append(secretCard);
      }else if(secret.categoria === 'Theme'){
        ThemeCategory.append(secretCard);
      }else{
        outraField.append(secretCard);
      }
    }
  });
  customCategoryView();
}


//>>>Apartir daqui só recebe e envia informações<<<<//
////////Ativadores////////////////
function quesegredoeesse(){
  const alvo = event.target;
  //Debug View
  if(alvo.value === '0'){
    if(alvo.getAttribute('class').search('selectedItem') !== 0){
      debugMode.ativado = 'selectedItem';
    }else{
      debugMode.ativado = 'UnselectedItem';
    }
    localStorage.setItem('debugOn', debugMode.ativado);
    alvo.setAttribute('class', debugMode.ativado);
  }
  
  //Sbeeker
  if(alvo.value === '1'){
    if(alvo.getAttribute('class').search('selectedItem') !== 0){
      sbeeker.ativado = 'selectedItem';
    }else{
      sbeeker.ativado = 'UnselectedItem';
    }
    localStorage.setItem('sbeekerOn', sbeeker.ativado);
    alvo.setAttribute('class', sbeeker.ativado);
  }
  
  //Senha Errada
  if(alvo.value === '2'){
    if(alvo.getAttribute('class').search('selectedItem') !== 0){
      senhaerrada.ativado = 'selectedItem';
      setTimeout(()=>{
        senhaerrada.ativado = 'UnselectedItem';
        alvo.setAttribute('class', senhaerrada.ativado);
      }, 1000)
    }else{
      senhaerrada.ativado = 'UnselectedItem';
    }
    alvo.setAttribute('class', senhaerrada.ativado);
  }
  
  //Arcade Games SFX
  if(alvo.value === '3'){
    if(alvo.getAttribute('class').search('selectedItem') !== 0){
      classicFightSFX.ativado = 'selectedItem';
      acgsfxNotify.volume = '0.'+maxVolume.value;
      acgsfxNotify.currentTime = 0;
      acgsfxNotify.play();
    }else{
      classicFightSFX.ativado = 'UnselectedItem';
    }
    localStorage.setItem('fcgSFXOn', classicFightSFX.ativado);
    alvo.setAttribute('class', classicFightSFX.ativado);
  }
  
  //Thorn Sunflower
  if(alvo.value === '4'){
    if(alvo.getAttribute('class').search('selectedItem') !== 0){
      pure.ativado = 'selectedItem';
    }else{
      pure.ativado = 'UnselectedItem';
    }
    localStorage.setItem('puresOn', pure.ativado);
    alvo.setAttribute('class', pure.ativado);
  }
  
  secretsDo();
}

////Sistema de Descrição tela de Custom////
function secretsInfos(){
  const secretInfos = document.getElementById('customInfos');
  secretInfos.innerHTML = '';
  const alvo    = event.target;
  const thumb   = document.createElement('IMG');
  const sTitle  = document.createElement('H2');
  const sDescr  = document.createElement('H3');
  const subSecr = document.createElement('H4');
  thumb.src = alvo.getAttribute('data-image');
  thumb.setAttribute('draggable', 'false')
  sTitle.innerHTML = alvo.innerHTML;
  sDescr.innerHTML = alvo.getAttribute('data-description');
  secretInfos.append(thumb, sTitle, sDescr);
}

function stopShowSecretInfos(){
  const secretInfos = document.getElementById('customInfos');
}

////Formatação Visual das categorias Custom/////
function customCategoryView(){
  if(themeField.innerHTML == ''){
    themeTitle.style.display = 'none';
  }else{
    themeTitle.style.display = '';
  }
  if(soundField.innerHTML == ''){
    soundTitle.style.display = 'none';
  }else{
    soundTitle.style.display = '';
  }
  if(secretField.innerHTML == ''){
    secretTitle.style.display = 'none';
  }else{
    secretTitle.style.display = '';
  }
  if(collectionField.innerHTML == ''){
    collectionTitle.style.display = 'none';
  }else{
    collectionTitle.style.display = '';
  }
  if(outraField.innerHTML == ''){
    outraTitle.style.display = 'none';
  }else{
    outraTitle.style.display = '';
  }
}