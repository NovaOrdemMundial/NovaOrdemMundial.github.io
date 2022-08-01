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