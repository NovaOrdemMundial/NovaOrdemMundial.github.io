const menuButtonsArr   = document.querySelectorAll('.btnsfx');
const justConfirm      = document.querySelectorAll('.btnconf');
const backButton       = document.querySelectorAll('.bacsfx');
////////////////////////////////////////////////////////////////////

//////Botões listado em SFX//////////////
      ///// Botões Afetados por SFX /////
audioPlace();
function audioPlace(){
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
      
      for(var c = 0; c < justConfirm.length; c++){
        justConfirm[c].addEventListener('click', () =>{
          clickSFX.currentTime = 0;
          clickSFX.play();
        })
      }
      
      for(var b = 0; b < backButton.length; b++){
        backButton[b].addEventListener('click', () =>{
          backSFX.currentTime = 0;
          backSFX.play();
        });
      }
}

function justAllow(){
          confirmSFX.currentTime = 0;
          confirmSFX.play();
}

function justDeny(){
          deniedSFX.currentTime = 0;
          deniedSFX.play();
}

function justClick(){
          clickSFX.currentTime = 0;
          clickSFX.play();
}

function justBack(){
          backSFX.currentTime = 0;
          backSFX.play();
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
 hoverSFX        .volume   = volumeFilter;
 clickSFX        .volume   = volumeFilter;
 confirmSFX      .volume = volumeFilter;
 deniedSFX       .volume = volumeFilter;
 backSFX         .volume = volumeFilter;
 closeSFX        .volume = volumeFilter;
 rolledStart     .volume = volumeFilter;
 rolledLoop      .volume = volumeFilter;
 rolledComplete  .volume = volumeFilter;
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
