///////Fecha menus Especificos/////////
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

//////////////////////////////////////////////////////////////////////

///////Fecha Items De Menu/////////////
////////Menus Venish/////////////
menusVenishTrap.addEventListener('click', () => {
  onMenusTabsClose();
  onItemViewerClose();
  customColse();
});

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

/////////////////////////////////////////////////////////////////////////

////////////Fecha Avisos/////////////
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