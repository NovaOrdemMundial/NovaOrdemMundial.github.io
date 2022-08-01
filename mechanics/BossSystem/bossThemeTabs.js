//     Detectar Temas de Boss e classes     //

//Tab Style
function bossTheme(){
  if(bossLevel.value === 'roxoLvl'){
    bossTabWindow.classList.add('tabRoxa');
    inventario.classList.add('invRoxo');
  }
  else if(bossLevel.value === 'greyLvl'){
    bossTabWindow.classList.add('tabCinza');
    inventario.classList.add('invCinza');
  }
  else if(bossLevel.value === 'amareloLvl'){
    bossTabWindow.classList.add('tabAmarela');
    inventario.classList.add('invAmarelo');
  }
}