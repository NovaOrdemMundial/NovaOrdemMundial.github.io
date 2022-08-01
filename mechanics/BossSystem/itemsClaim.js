function claimItemNow(){
  const setItemDataCount = document.getElementById(itemIDTarget.value);
  const setItemCount     = document.getElementById(itemCountLocal.value);
  itemDescount.value = itemClaimed;
  itemUseResult.value = itemCountTarget.value - itemClaimed;
  
  setItemCount.innerHTML = itemUseResult.value;
  setItemDataCount.value = itemUseResult.value;
 
  targetSelField.append(itemDescount, itemUseResult);
  onItemViewerClose();
  bdModifyOnClaim();
  sendNudes();
  
  //Tela De Confirmação
  const divisaoSup= document.createElement('DIV');
  const tituloSup = document.createElement('H1');
  const itemIcon  = document.createElement('IMG');
  const subTitulo = document.createElement('H2');
  const msgAviso  = document.createElement('H3');
  const footerMsg = document.createElement('H4');
  
  //Aparencia
  avisosSuperior.addEventListener('click', closeAvisoSuperior);
  document.documentElement.style.setProperty('--AvisoDisplay', 'flex');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--AvisoOpacity', '1');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--AvisoMSGOpacity', '1');
    },300)
  },100);
  
  //Informações
  tituloSup.innerHTML   = 'Fomos Avisados {NOME}';
  itemIcon.src          = itemIconTarget.value;
  itemIcon.setAttribute('draggable', 'false');
  itemIcon.setAttribute('class', itemTypeTarget.value);
  msgAviso.innerHTML    = 'Parabéns {NOME}, você resgatou {COUNT}x {ITEM}. Agora te restaram {RESUME}x {ITEM}';
  footerMsg.innerHTML   = 'Assim que possivel sua recompensa sera aplicada.'
  avisosSuperior.append(divisaoSup);
  divisaoSup.append(tituloSup, itemIcon, msgAviso, footerMsg);
  avisosSuperior.innerHTML = avisosSuperior.innerHTML.replace(/{NOME}/g, whoeIs).replace(/{COUNT}/g, itemDescount.value).replace(/{ITEM}/g, itemNameTarget.value).replace(/{RESUME}/g, itemUseResult.value);
  
}

function sacrifyItemNow(){
  const setItemDataCount = document.getElementById(itemIDTarget.value);
  const setItemCount     = document.getElementById(itemCountLocal.value);
  itemDescount.value = itemSacrified;
  itemUseResult.value = itemCountTarget.value - itemSacrified;
  
  setItemCount.innerHTML = itemUseResult.value;
  setItemDataCount.value = itemUseResult.value;
  
  targetSelField.append(itemDescount, itemUseResult);
  onItemViewerClose();
  bdModifyOnClaim();
  sendNudes();
  
  //Tela De Confirmação
  const divisaoSup= document.createElement('DIV');
  const tituloSup = document.createElement('H1');
  const itemIcon  = document.createElement('IMG');
  const subTitulo = document.createElement('H2');
  const msgAviso  = document.createElement('H3');
  const footerMsg = document.createElement('H4');
  
  //Aparencia
  avisosSuperior.addEventListener('click', closeAvisoSuperior);
  document.documentElement.style.setProperty('--AvisoDisplay', 'flex');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--AvisoOpacity', '1');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--AvisoMSGOpacity', '1');
    },300)
  },100);
  
  //Informações
  tituloSup.innerHTML   = 'Fomos Avisados {NOME}';
  itemIcon.src          = itemIconTarget.value;
  itemIcon.setAttribute('draggable', 'false');
  itemIcon.setAttribute('class', itemTypeTarget.value);
  msgAviso.innerHTML    = 'Parabéns {NOME}, você resgatou {COUNT}x {ITEM}. Agora te restaram {RESUME}x {ITEM}';
  footerMsg.innerHTML   = 'Assim que possivel sua recompensa sera aplicada.'
  avisosSuperior.append(divisaoSup);
  divisaoSup.append(tituloSup, itemIcon, msgAviso, footerMsg);
  avisosSuperior.innerHTML = avisosSuperior.innerHTML.replace(/{NOME}/g, whoeIs).replace(/{COUNT}/g, itemDescount.value).replace(/{ITEM}/g, itemNameTarget.value).replace(/{RESUME}/g, itemUseResult.value);
  
}