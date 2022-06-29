
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
