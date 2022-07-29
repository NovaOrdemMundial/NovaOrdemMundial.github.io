//			//Fechar Guias das camadas 25 - //			//

/*Close All Tabs*/
function venishTabs(){
  const InventoryLoot   = document.getElementById('lootlable');
  bossTabWindow.style.setProperty('--bossWindowOpacity', '0');
  bossTabScreen.style.setProperty('--bossScreenOpacity', '0');
  bossTabWindow.style.setProperty('--bossTransitionTime', '0.5s');//
  bossTabScreen.style.setProperty('--bossSTransitionTime', '1s');
  bossTabWindow.style.setProperty('--bossWindowWidth', '0%');
  bossTabWindow.style.setProperty('--bossWindowHeight', '0%');
  storyField.innerHTML = "";
  collection.innerHTML = '';
  InventoryLoot.innerHTML = '';
  setTimeout(() => {
    bossTabScreen .style.setProperty('--bossScreenDisplay', 'none');
    bossSecretArea.innerHTML = '';
  }, 700);
  setTimeout(()=>{
    trapTabClose  .style.setProperty('--closeTabDisplay', 'none');
    trapTabClose  .style.cursor = 'progress !important';//
    trapTabClose  .removeAttribute('onclick');
    setTimeout(() =>{
      trapTabClose .setAttribute('onclick', 'venishTabs()');
      trapTabClose .style.cursor = '';
      bossTabWindow.removeAttribute('class');
      inventario.removeAttribute('class');
    },200);
  }, 800);
  
  
  bossNick.removeEventListener('click', ()=>{});
}

//		//Abrir Tab de Boss(Visual)///

function bossTabOpen(){
  bossTabScreen.style.setProperty('--bossScreenDisplay', 'flex');
  trapTabClose .style.setProperty('--closeTabDisplay', 'block');
  setTimeout(() => {
    bossTabWindow.style.setProperty('--bossWindowOpacity', '1');
    bossTabScreen.style.setProperty('--bossScreenOpacity', '1');
    bossTabWindow.style.setProperty('--bossTransitionTime', '0.8s');
    bossTabScreen.style.setProperty('--bossSTransitionTime', '0.2s');
    bossTabWindow.style.setProperty('--bossWindowWidth', '70%');
    bossTabWindow.style.setProperty('--bossWindowHeight', '95%');
  }, 100);
}