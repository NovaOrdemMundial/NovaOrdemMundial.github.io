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

//  //////////Ativação na tela de password////////////  //
const symbolBox = document.createElement('SPAN');

function passUnlockSet(){
  if(passScanCheck.innerHTML === sbeeker.password){
    passConfirmAnim();
    sbeeker.possui  = 'true';
    sbeeker.ativado = 'selectedItem';
  }
  else if(passScanCheck.innerHTML === debugMode.password){
    passConfirmAnim();
    debugMode.possui  = 'true';
    debugMode.ativado = 'selectedItem';
  }
  else if(passScanCheck.innerHTML === senhaerrada.password){
    passDenyAnim();
    senhaerrada.possui  = 'true';
    senhaerrada.ativado = 'selectedItem';
  }
  else if(passScanCheck.innerHTML === classicFightSFX.password){
    passConfirmAnim();
    classicFightSFX.possui  = 'true';
    classicFightSFX.ativado = 'selectedItem';
    acgsfxNotify.volume = '0.'+maxVolume.value;
    acgsfxNotify.currentTime = 0;
    acgsfxNotify.play();
  }
  else if(passScanCheck.innerHTML === pure.password){
    passConfirmAnim();
    pure.possui  = 'true';
    pure.ativado = 'selectedItem';
    symbolBox.dataset.quem = 'h';
    hurtsSearch();
  }else{
    passDenyAnim();
  }
  //Save All
  localStorage.setItem('sbeeker', sbeeker.possui);
  localStorage.setItem('sbeekerOn', sbeeker.ativado);
  localStorage.setItem('debug', debugMode.possui );
  localStorage.setItem('debugOn', debugMode.ativado);
  localStorage.setItem('wrongpass', senhaerrada.possui);
  localStorage.setItem('fcgSFX', classicFightSFX.possui);
  localStorage.setItem('fcgSFXOn', classicFightSFX.ativado);
  localStorage.setItem('pure', pure.possui);
  localStorage.setItem('puresOn', pure.ativado);

  
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


secretsDo();

///////Função dos Secredos//////////
function secretsDo(){
  //Sbeeker
  const sbeekerBossView = document.getElementsByClassName('Sbevee_/snekerroyal')[0];
  if(sbeeker.ativado === 'selectedItem'){
    sbeekerBossView.style.display = '';
  }else{
    sbeekerBossView.style.display = 'none';
  }
  
  //DebugView
  if(debugMode.ativado === 'selectedItem'){
    document.documentElement.style.setProperty('--debuggViewer', 'block');
  }else{
    document.documentElement.style.setProperty('--debuggViewer', 'none');
  }
  
  //Senha Errada
  if(senhaerrada.ativado === 'selectedItem'){
    //visibilidades
    //menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block'); //Abrir o menu
    //menusVenishTrap.style.pointerEvents = 'auto';
    win1.innerHTML = '';
    warningWindow.innerHTML = '';
    titleText.innerHTML   = 'SIM! {NOME}';
    subTitleTxT.innerHTML = 'Exatamente isso!'
    descText.innerHTML    = 'Você Acertou! A senha esta errada.';
    footerText.innerHTML  = 'Parabéns!?';//
    //Projeções
    warningWindow.append(win1);
    win1.append(titleText, subTitleTxT, descText, footerText);
    warningWindow.innerHTML = warningWindow.innerHTML.replace(/{NOME}/g, userDebb.innerHTML);
    warningWindow.style.setProperty('--warningView', 'flex');
    //Animação Janela Abrindo
    setTimeout(() => {
      warningWindow.style.opacity = '1';
      setTimeout(()=>{
        document.documentElement.style.setProperty('--warningWin1Opacity', '1');
      },300);
    }, 100);
    
    //////Animação De Fechamento da Janela
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningWin1Opacity', '1');
      senhaerrada.ativado = 'UnselectedItem';
      setTimeout(()=>{
        warningWindow.style.opacity = '';
        setTimeout(()=>{
          warningWindow.style.setProperty('--warningView', 'none');
        }, 200);
      }, 200);
    },7000);
  }
  
  //Arcade Fight Games SFX
  if(classicFightSFX.ativado === 'selectedItem'){
    sfx.button_hover    = 'https://novaordemmundial.github.io/audio/sfx/Button%20Ouver.mp3';
    sfx.button_click    = 'https://novaordemmundial.github.io/audio/sfx/Button%20Clicked.mp3';
    sfx.button_back     = '';
    sfx.button_close    = '';
    sfx.button_confirm  = '';
  }else{
    sfx.button_hover    = '/audio/sfx/Silence.mp3';
    sfx.button_click    = '/audio/sfx/Silence.mp3';
    sfx.button_back     = '/audio/sfx/Silence.mp3';
    sfx.button_close    = '/audio/sfx/Silence.mp3';
    sfx.button_confirm  = '/audio/sfx/Silence.mp3';
  }
  audioConfig();
  
   //Pure Theme
  if(pure.ativado === 'selectedItem'){
    purer();
  }else{
    clearPurer();//
  }
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

////////Correct Pass//////////
function passConfirmAnim(){
  for(var o = 0; o <passTextField.length; o++){
    passTextField[o].style.textShadow = '0 0 1vw #0F0'
    passTextField[o].style.transitionDelay = `${parseInt(o+'00') / 2}ms`;
    passScanCheck.color = '#9F9';
    passScanCheck.textShadow = '0 0 0.7vw #0F0';
    passScanCheck.setAttribute('class', 'acceptPass');
  }
  setTimeout(()=>{
    for(var o = 0; o <passTextField.length; o++){
      passTextField[o].style.transitionDelay = `${parseInt(o+'00') / 2}ms`;
      passTextField[o].style.textShadow = '';
      passScanCheck.color = '';
      passScanCheck.textShadow = '';
      passScanCheck.removeAttribute('class');
    }
    passKeysClear();
  }, 4000);
}

function passDenyAnim(){
  for(var o = 0; o <passTextField.length; o++){
    passTextField[o].style.transitionDelay = `${parseInt(o+'00') / 2}ms`;
    passTextField[o].style.textShadow= '0 0 1vw #F00';
    passScanCheck.setAttribute('class', 'dennyPass');
  }
  setTimeout(() => {
    for(var o = 0; o <passTextField.length; o++){
      passTextField[o].style.transitionDelay = `${parseInt(o+'00') / 2}ms`;
      passTextField[o].style.textShadow= '';
      passScanCheck.removeAttribute('class');
    }
  }, 4000);
}