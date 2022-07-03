
function ifMatch(){
  checkStatus.style.setProperty('--passCheckIs', 'correct');
  checkStatus.style.setProperty('--animationStateIs', 'running');
  setTimeout(() =>{
    checkStatus.style.setProperty('--passCheckIs', 'none');
    checkStatus.style.setProperty('--animationStateIs', 'paused');
  }, 8000)
}

function ifNotMatch(){
  checkStatus.style.setProperty('--passCheckIs', 'wrong');
  checkStatus.style.setProperty('--animationStateIs', 'running');
  setTimeout(() =>{
    checkStatus.style.setProperty('--passCheckIs', 'none');
    checkStatus.style.setProperty('--animationStateIs', 'paused');
  }, 8000)
}

//Botão Sacrificar Tudo
SacrificeALL.addEventListener('mouseover', () => {
  SacrificeALL.style.setProperty('--sacrificeAnimation', 'sacrificeRotate');
});
SacrificeALL.addEventListener('mouseout', () => {
  SacrificeALL.style.setProperty('--sacrificeAnimation', 'none');
});
