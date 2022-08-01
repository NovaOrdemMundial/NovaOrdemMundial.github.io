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

////////////MENUS TABS/////////////////
function onMenusTabsClose(){
  passScreen.style.opacity = '0'
  menusVenishTrap.style.pointerEvents = 'none';
  setTimeout(() => {
    passBackScreen.style.opacity = '0';
    setTimeout(() =>{
      menusVenishTrap.style.setProperty('--menusVenishDisplay', 'none');
      passBackScreen.style.setProperty('--PassScreenDisplay', 'none');
      warningWindows.innerHTML = '';
    }, 300);
  }, 300);
}

////////////Custom Closes/////////
//Ao Fechar o Menu De Customizações//
function customColse(){
  document.documentElement.style.setProperty('--customDisplayView', '120%');
  setTimeout(() =>{
    document.documentElement.style.setProperty('--customScreenView', '0');
    setTimeout(() =>{
      document.documentElement.style.setProperty('--customScreenStatus', 'none');
      themeField.innerHTML = '';
      soundField.innerHTML = '';
      secretField.innerHTML = '';
      collectionField.innerHTML = '';
      outraField.innerHTML = '';
    }, 300)
  }, 200)
}

///////////CLOSE OTHER DEX/////////
function closeAvisoSuperior(){
  document.documentElement.style.setProperty('--AvisoMSGOpacity', '0');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--AvisoOpacity', '0');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--AvisoDisplay', 'none');
      avisosSuperior.innerHTML = '';
    }, 200)
  },300)
}