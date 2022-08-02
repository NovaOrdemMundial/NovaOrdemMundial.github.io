//https://dl.dropboxusercontent.com/s/48gga3mtybpxc9l/Never%20Gonna%20Give%20You%20Up%20-%20Loopable.mp4
//////Constantes Proprias///////
function secretIs(){
  const nickIdentify = document.getElementById('nick');
  const foolsSecretMessage = document.createElement('H4');
  foolsSecretMessage.innerHTML = `A Verdade Sobre ${foolsInfos.nome}`;
  if(nickIdentify.innerHTML === foolsInfos.nick){
    foolsSecretMessage.addEventListener('click', () =>{
      foolsSecret();
    })
    bossSecretArea.append(foolsSecretMessage);
  }
}


/////Segredo Do Fools Completo////// <Arquivo Proprio>
function foolsSecret(){
  venishTabs();
  rootStyle.setProperty('--secretScreenDisplay', 'flex');
  setTimeout(() =>{
    rootStyle.setProperty('--secretScreenOpacity', '1');
  }, 100);
  
  //Dialogo
  secretScreen.innerHTML = '';
  setTimeout(() =>{
    titleMsg       .setAttribute('class', 'secretText1');
    //mainDescriptMsg.removeClass('secretTextVisible').addClass('secretTextVisible');
    //subDescriptMsg .removeClass('secretTextVisible').addClass('secretTextVisible');
    //footerDescript .removeClass('secretTextVisible').addClass('secretTextVisible');
    titleMsg.innerHTML = 'Todo mundo tem segredos...'
    secretScreen.append(msgDiv);
    msgDiv.append(titleMsg);
    secretScreen.value = 0;
    
    secretScreen.addEventListener('click', msgOrders);
  }, 400);
}

const resetFoolsSecret = document.createElement('BUTTON');
function msgOrders(){
  if(secretScreen.value === 0){
    titleMsg       .removeAttribute('class');
    mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML = '';
    mainDescriptMsg.innerHTML = 'E Fools me pediu pra contar esse segredo por ele...';
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 1;
  }
  else if(secretScreen.value === 1){
    mainDescriptMsg.removeAttribute('class');
    mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML = '';
    mainDescriptMsg.innerHTML = 'no dia 27 de Maio de 2021 Fools tomou uma decisão controversia...';
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 2;
  }
  else if(secretScreen.value === 2){
    mainDescriptMsg.removeAttribute('class');
    mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML = '';
    mainDescriptMsg.innerHTML = 'decisão essa que daria vida a esse site...';
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 3;
  }
  else if(secretScreen.value === 3){
    mainDescriptMsg.removeAttribute('class');
    mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML = '';
    mainDescriptMsg.innerHTML = 'Fools deu o primeiro passo do confronto dessa comunidade apenas...';
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 4;
  }
  else if(secretScreen.value === 4){
    mainDescriptMsg.removeAttribute('class');
    titleMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML = '';
    titleMsg.innerHTML = 'Comendo o cú de quem ta lendo.';
    msgDiv.append(titleMsg);
    rolledStart.currentTime = 0;
    rolledStart.volume = '0.'+maxVolume.value;
    rolledStart.play();
    rolledLoop.volume = 0;
    rolledLoop.load();
    rolledStart.onended = () => {
      rolledLoop.currentTime = 0;
      rolledLoop.volume = '0.'+maxVolume.value;
      rolledLoop.play();
    }
    
    secretScreen.value = 5;
  }
  else if(secretScreen.value === 5){
    titleMsg            .removeAttribute('class');
    titleMsg            .setAttribute('class', 'secretText1');
    mainDescriptMsg     .setAttribute('class', 'secretText1');
    footerDescript      .setAttribute('class', 'secretText1');
    msgDiv.innerHTML    = '';
    titleMsg.innerHTML  = 'Valeu por acreditar na gente Fools';
    mainDescriptMsg.innerHTML = 'Graças a essa inicialização gerou-se motivação para que esse site e evento fosse mais a frente';
    footerDescript.innerHTML  = 'Sempre seremos gratos por esse apoio <3';
    msgDiv.append(titleMsg, mainDescriptMsg, footerDescript);
    secretScreen.value = 6;
  }
  else if(secretScreen.value === 6){
    titleMsg            .removeAttribute('class');titleMsg.setAttribute('class', 'secretText1');
    mainDescriptMsg     .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    footerDescript      .removeAttribute('class');footerDescript.setAttribute('class', 'secretText1');
    extraText           .setAttribute('class', 'secretText1');
    extraText2          .setAttribute('class', 'secretText1');
    imageDescript       .setAttribute('class', 'secretText1');
    imageDescript       .src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/b6809815-f7c4-4cc8-a958-27af48fc560e-profile_image-300x300.png';
    msgDiv.innerHTML    = '';
    extraText.innerHTML = 'Fools113';
    extraText2.innerHTML= '<a href="https://www.twitch.tv/fools113" target="blank_">twitch.tv/fools113</a>';
    mainDescriptMsg.innerHTML = 'Acompanhe e siga o Fools Na Twitch.';
    footerDescript.innerHTML  = 'Lives todo Fim de Semana.';
    
    msgDiv.append(imageDescript, extraText, extraText2, mainDescriptMsg, footerDescript);
    secretScreen.value = 7;
  }
  else if(secretScreen.value === 7){
    titleMsg              .removeAttribute('class');titleMsg.setAttribute('class', 'secretText1');
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    footerDescript        .removeAttribute('class');footerDescript.setAttribute('class', 'secretText1');
    extraText             .removeAttribute('class');extraText.setAttribute('class', 'secretText1');
    extraText2            .removeAttribute('class');extraText2.setAttribute('class', 'secretText1');
    imageDescript         .removeAttribute('class');imageDescript.setAttribute('class', 'secretText1');
    imageDescript         .src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/3e77eacb-1c5a-4391-b132-dde55eacb774-profile_image-300x300.png';
    msgDiv.innerHTML    = '';
    extraText.innerHTML = 'Pinducast';
    extraText2.innerHTML= '<a href="https://www.twitch.tv/pinducast" target="blank_">twitch.tv/pinducast</a>';
    mainDescriptMsg.innerHTML = 'Ou acompanhe o Pinducast, podcast no qual Fools é um dos Host.';
    footerDescript.innerHTML  = 'Todo sabado a noite, Piducast.';
    
    msgDiv.append(imageDescript, extraText, extraText2, mainDescriptMsg, footerDescript);
    secretScreen.value = 8;
  }
  else if(secretScreen.value === 8){
    titleMsg              .removeAttribute('class');titleMsg.setAttribute('class', 'secretText1');
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    footerDescript        .removeAttribute('class');
    extraText             .removeAttribute('class');
    extraText2            .removeAttribute('class');
    imageDescript         .removeAttribute('class');
    imageDescript.src     = '';
    extraText.innerHTML   = '';
    extraText2.innerHTML  = '';
    msgDiv.innerHTML      = '';
    
    titleMsg.innerHTML = 'Informações sobre Fools como Boss';
    mainDescriptMsg.innerHTML = 'Fools foi o primeiro a se tornar boss no Canal e Site.'
    
    msgDiv.append(titleMsg, mainDescriptMsg);
    secretScreen.value = 9;
  }
  else if(secretScreen.value === 9){
    titleMsg              .removeAttribute('class');
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    imageDescript.src     = '';
    msgDiv.innerHTML      = '';
    
    mainDescriptMsg.innerHTML = 'Não só o primeiro boss como também Fools ainda é o Boss mais Poderoso do site.'
    
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 10;
  }
  else if(secretScreen.value === 10){
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML      = '';
    
    mainDescriptMsg.innerHTML = 'Devido as quantidades altas de Donate e por passar bastante tempo como Boss, Fools tem altos status como Boss aqui.'
    
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 11;
  }
  else if(secretScreen.value === 11){
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML      = '';
    
    mainDescriptMsg.innerHTML = 'E mais uma e ultima vez, Obrigado Fools!'
    
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 12;
  }
  else if(secretScreen.value === 12){
    mainDescriptMsg       .removeAttribute('class');mainDescriptMsg.setAttribute('class', 'secretText1');
    msgDiv.innerHTML      = '';
    
    mainDescriptMsg.innerHTML = 'Clique mais uma vez para voltar a seleção de Boss.'
    
    msgDiv.append(mainDescriptMsg);
    secretScreen.value = 13;
  }
  else if(secretScreen.value === 13){
   rootStyle.setProperty('--secretScreenOpacity', '0');
   secretScreen.removeEventListener('click', msgOrders);
   setTimeout(()=>{
     rootStyle.setProperty('--secretScreenDisplay', 'none');
     secretScreen.innerHTML = '';
     msgDiv.innerHTML = '';
   }, 300)
    
    const buffer = .44;
    
    rolledLoop.loop = false;
    
    rolledLoop.onended = () =>{
      rolledLoop.volume = 0;
      rolledLoop.pause();
      rolledComplete.currentTime = 0;
      rolledComplete.volume = '0.'+maxVolume.value;
      rolledComplete.play();
      setTimeout(() =>{
        rolledComplete.onended = () =>{
          rolledLoop.volume = '0.'+maxVolume.value;
          rolledLoop.currentTime = 0;
          rolledLoop.play();
          rolledLoop.loop = true;
          rolledLoop.addEventListener('timeupdate', ()=>{
            var buffer = .16;
            
            if(rolledLoop.currentTime > rolledLoop.duration - buffer){
              rolledLoop.volume = '0.'+maxVolume.value;
              rolledLoop.currentTime = 0;
              rolledLoop.play();
            }
            
          });
        }
      }, 1000);
    }
    
    giveMeUp.play();
    wallpaper.innerHTML = '';
    wallpaper.append(giveMeUp);
    secretScreen.value = 14;
    
    //Criar Botão de Reset
    resetFoolsSecret.innerHTML = 'Give You Up'
    resetFoolsSecret.setAttribute('class', 'GiveYouUp')
    resetFoolsSecret.addEventListener('click', giveYouUp);
    corpo.append(resetFoolsSecret);
  }
}

function giveYouUp(){
  wallpaper.innerHTML = '<div id="slide"></div>';
  rolledLoop.pause();
  rolledComplete.pause();
  rolledStart.pause()
  rolledLoop.currentTime = 0;
  rolledComplete.currentTime = 0;
  rolledStart.currentTime = 0;
  resetFoolsSecret.remove();
}