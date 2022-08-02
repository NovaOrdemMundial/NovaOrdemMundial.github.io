﻿//////////////Mapeamento////////////////
function audioConfig(){
  hoverSFX.src   = sfx.button_hover;
  clickSFX.src   = sfx.button_click;
  backSFX.src    = sfx.button_back;
  closeSFX.src   = sfx.button_close;
  confirmSFX.src = sfx.button_confirm;
}

////////////////////////////////////////////////////////////////////

//////Botões listado em SFX//////////////
      ///// Botões Afetados por SFX /////

for(var a = 0; a < menuButtonsArr.length; a++){
  menuButtonsArr[a].addEventListener('mouseover', () => {
    hoverSFX.currentTime = 0;
    hoverSFX.play();
  })
  menuButtonsArr[a].addEventListener('click', () => {
    clickSFX.currentTime = 0;
    clickSFX.play();
  })
}

////////////////////////////////////////////////////

////////////BOTÃO MUTAR//////////////
//Função Mutar
muteAll.addEventListener('click', ()=>{
  console.log(maxVolume.value);
  if(maxVolume.value < 1){
    maxVolume.value = 300;
    muteAll.setAttribute('class', 'sondded');
  }else{
    maxVolume.value = 0;
    muteAll.setAttribute('class', 'unsondded');
  }
 const volumeFilter   = '0.'+maxVolume.value;
 hoverSFX.volume   = volumeFilter;
 clickSFX.volume   = volumeFilter;
 rolledStart.volume = volumeFilter;
 rolledLoop.volume = volumeFilter;
 rolledComplete.volume = volumeFilter;
});

//////////////////////////////////////////////////////////////////////

/////////////Função Fade in e Fade out para o botão sacrifice///////////////

function fadeIn(){
  window.volumeTimeIn   = setTimeout(fadeIn, 60);//
  const volumeFramesUp  = parseInt(musicVolume.value) + 1;
  const volumeIn        = ('000'+volumeFramesUp).slice(-3);
  musicVolume.value     = volumeIn;
  const volumeFilter    = '0.'+volumeIn;
  inpVolume.value       = volumeIn;
  if(volumeIn > maxVolume.value){
    clearTimeout(volumeTimeIn);
  }
  runMusic.volume = volumeFilter;
}

function fadeOut(){
  clearTimeout(volumeTimeIn);
  window.volumeTimeOut      = setTimeout(fadeOut, 5);
  const volumeFramesDown    = parseInt(musicVolume.value) - 1;
  const volumeIn            = ('000'+volumeFramesDown).slice(-3);//
  musicVolume.value         = volumeIn;
  const volumeFilter        = '0.'+volumeIn;
  inpVolume.value           = volumeIn;
  if(volumeIn > 1){
    SacrificeALL.style.pointerEvents = 'none';
  }
  if(volumeIn < 1){
    clearTimeout(volumeTimeOut);
    runMusic.volume = 0.0;
    setTimeout(() =>{
      SacrificeALL.style.pointerEvents = 'auto';
    }, 300);
  }
  runMusic.volume = volumeFilter;
}

function nonAct(){
  
}