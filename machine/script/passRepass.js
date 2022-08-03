//////////////Mapeamento De Audio////////////////
function audioConfig(){
  hoverSFX.src   = sfx.button_hover;
  clickSFX.src   = sfx.button_click;
  backSFX.src    = sfx.button_back;
  closeSFX.src   = sfx.button_close;
  confirmSFX.src = sfx.button_confirm;
  deniedSFX.src  = sfx.button_deny;
}

      ////{Funções da Tela de Password}////
///////////////Comportamento das Input na tela de Password///////////////////
function boxNext(insert, index, list){
  const proximo   = list[index + 1];
  const anterior  = list[index - 1];
  if(!proximo){
    return
  }
  if(!anterior){
    return
  }
  
  insert.addEventListener('input', () => {
    if(insert.value.length === insert.maxLength){
      proximo.focus();
      proximo.select();
      insert.style.textShadow = '0 0 0.6vw #FFF5';
      insert.value = insert.value.toUpperCase();
    }/*
    else if(insert.value.length === 0){
      anterior.focus();
      anterior.select();
    }*/
  });
  
  insert.addEventListener('keydown', () =>{
    if (event.keyCode == 8){
      anterior.focus();
      anterior.select();
      insert.style.textShadow = '';
    }
  });
}

function dropPassIn(){
  for(var o = 0; o < passTextField.length; o++){
    passScanCheck.innerHTML = passTextField[o].value.toUpperCase();
  }
}

document.querySelectorAll('.inpPass').forEach(boxNext);
////////////Password Funcionalidades///////////
passBTNClear.addEventListener('click', () =>{
  passKeysClear();
});

passBTNConfirm.addEventListener('click', () => {
  passScanCheck.innerHTML = '';
  for(var o = 0; o <passTextField.length; o++){
    passScanCheck.innerHTML += passTextField[o].value;
    passCheck();
    passUnlockSet();
  }
});

function passKeysClear(){
  for(var o = 0; o <passTextField.length; o++){
    passTextField[o].value = '';
    passScanCheck.innerHTML = '------------------------';
  }
}


    ////////////Credenciais///////////////


logCheck.addEventListener('click', () => {
  passScanCheck.innerHTML = '';
  for(var o = 0; o <passTextField.length; o++){
    passScanCheck.innerHTML += passTextField[o].value;
  }
  passBossCheck();
})
/////////////////{Pass Check Comum}/////////////////////////
function passCheck(){
  
}

////////////////{?????????}/////////////////
statusCheck.addEventListener('mouseover', () =>{
  setTimeout(() => {
    statusCheck.style.cursor = 'pointer';
  },3000);
})
statusCheck.addEventListener('mouseout', () =>{
  statusCheck.style.cursor = '';
});

//////////////////{É essencial que isso seja inserido depois das Funções da Tela de Password}/////////////////////
function passBossCheck(){
  const eachThis= path.collection('Bosses');
  eachThis.get().then((select) => {
    const bossLogg1  = select.docs[0].data();
    const bossLogg2  = select.docs[1].data();
    const bossLogg3  = select.docs[2].data();
    const bossLogg4  = select.docs[3].data();
    const bossLogg5  = select.docs[4].data();
    const bossLogg6  = select.docs[5].data();
    const bossLogg7  = select.docs[6].data();
    //const bossLogg8  = select.docs[7].data();
    //const bossLogg9  = select.docs[8].data();
    //const bossLogg10  = select.docs[9].data();
    if(passScanCheck.innerHTML === bossLogg1.pass){
      localStorage.setItem('LoggedHas',       bossLogg1.nome);
      localStorage.setItem('LoggedPath',      bossLogg1.doc);
      localStorage.setItem('identification',  bossLogg1.id);
      localStorage.setItem('UserType',        bossLogg1.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg2.pass){
      localStorage.setItem('LoggedHas',       bossLogg2.nome);
      localStorage.setItem('LoggedPath',      bossLogg2.doc);
      localStorage.setItem('identification',  bossLogg2.id);
      localStorage.setItem('UserType',        bossLogg2.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg3.pass){
      localStorage.setItem('LoggedHas',       bossLogg3.nome);
      localStorage.setItem('LoggedPath',      bossLogg3.doc);
      localStorage.setItem('identification',  bossLogg3.id);
      localStorage.setItem('UserType',        bossLogg3.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg4.pass){
      localStorage.setItem('LoggedHas',       bossLogg4.nome);
      localStorage.setItem('LoggedPath',      bossLogg4.doc);
      localStorage.setItem('identification',  bossLogg4.id);
      localStorage.setItem('UserType',        bossLogg4.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg5.pass){
      localStorage.setItem('LoggedHas',       bossLogg5.nome);
      localStorage.setItem('LoggedPath',      bossLogg5.doc);
      localStorage.setItem('identification',  bossLogg5.id);
      localStorage.setItem('UserType',        bossLogg5.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg6.pass){
      localStorage.setItem('LoggedHas',       bossLogg6.nome);
      localStorage.setItem('LoggedPath',      bossLogg6.doc);
      localStorage.setItem('identification',  bossLogg6.id);
      localStorage.setItem('UserType',        bossLogg6.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg7.pass){
      localStorage.setItem('LoggedHas',       bossLogg7.nome);
      localStorage.setItem('LoggedPath',      bossLogg7.doc);
      localStorage.setItem('identification',  bossLogg7.id);
      localStorage.setItem('UserType',        bossLogg7.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    // else if(passScanCheck.innerHTML === bossLogg8.pass){
      // localStorage.setItem('LoggedHas',       bossLogg8.nome);
      // localStorage.setItem('LoggedPath',      bossLogg8.doc);
      // localStorage.setItem('identification',  bossLogg8.id);
      // localStorage.setItem('UserType',        bossLogg8.tipo);
      // ifMatch();
      // passConfirmAnim();
    // }
    else{
      ifNotMatch();
      passDenyAnim();
    }
    algumascoisinhas();
  })
}

///////////Pass Action on Correct///////////////
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

/////////////////////////////////////////////////////////////

///////////Efeitos Dos Passwords///////////////
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
    //Buttons With Sound
    const allowSFX = document.querySelectorAll('.mButton');
    const backSFX  = document.querySelectorAll('.voltar');
    for(var b = 0; b<allowSFX.length; b++){
      allowSFX[b].classList.add('btnsfx');
    }
    
    for(var v = 0; v<backSFX.length; v++){
      backSFX[v].classList.add('bacsfx');
    }
    
    //Sounds
    sfx.button_hover    = 'https://novaordemmundial.github.io/audio/sfx/Button%20Ouver.mp3';
    sfx.button_click    = 'https://novaordemmundial.github.io/audio/sfx/Button%20Clicked.mp3';
    sfx.button_back     = 'https://novaordemmundial.github.io/audio/sfx/ClassicFightGameSFX/Back.ogg';
    sfx.button_close    = 'https://novaordemmundial.github.io/audio/sfx/ClassicFightGameSFX/Back.ogg';
    sfx.button_confirm  = 'https://novaordemmundial.github.io/audio/sfx/ClassicFightGameSFX/Cofirmed.ogg';
    sfx.button_deny     = 'https://novaordemmundial.github.io/audio/sfx/ClassicFightGameSFX/Deny.ogg';
  }else{
    sfx.button_hover    = '/audio/sfx/Silence.mp3';
    sfx.button_click    = '/audio/sfx/Silence.mp3';
    sfx.button_back     = '/audio/sfx/Silence.mp3';
    sfx.button_close    = '/audio/sfx/Silence.mp3';
    sfx.button_confirm  = '/audio/sfx/Silence.mp3';
    sfx.button_deny     = '/audio/sfx/Silence.mp3';
  }
  audioConfig();
  
   //Pure Theme
  if(pure.ativado === 'selectedItem'){
    purer();
  }else{
    clearPurer();//
  }
}

/////////////////////////////////////////////////////////////////////////

//////////Design para senha certa e errada////////////////////////
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
  setTimeout(() ={
    justAllow();
  }, 200);
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
  setTimeout(() ={
    justDeny();
  }, 200);
}

//////////////////////////////////////////////////////////////////

/////////Password dos secretões//////////////
function hurtsSearch(){
  document.documentElement.style.setProperty('--SymbolCiclesDisplay', 'flex');
  document.documentElement.style.setProperty('--rollTheGod', 'flickpick');
  setTimeout(()=> {
    document.documentElement.style.setProperty('--SymbolCiclesOpacity', '1');
  }, 100);
  symbolsOfVoice.append(symbolBox);
  
  setTimeout(()=>{
    document.documentElement.style.setProperty('--SymbolCiclesOpacity', '0');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--SymbolCiclesDisplay', 'none');
      document.documentElement.style.setProperty('--rollTheGod', 'none');
      symbolBox.dataset.quem = 'A';
      symbolsOfVoice.innerHTML = '';
    }, 1000)
  }, 9000);
  setTimeout(() ={
    justAllow();
  }, 200);
}
