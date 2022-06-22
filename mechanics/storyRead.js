
///          ////        Carregar Inventario Dos Bosses          ////                   ///

const snapStory = (rev) => {
  const result= rev;
  const leftDialog = document.createElement('SPAN');
  leftDialog.innerHTML = result.player;
  leftDialog.setAttribute('class', 'leftInf');
  
  const centerDialog = document.createElement('SPAN');
  centerDialog.innerHTML = result.action;
  centerDialog.setAttribute('class', 'centerInf');
  
  const rightDialog = document.createElement('SPAN');
  rightDialog.innerHTML = result.victim;
  rightDialog.setAttribute('class', 'rightInfo');
  
  const hLine = document.createElement('P');
  hLine.append(leftDialog, centerDialog, rightDialog);
  storyField.append(hLine);
};

      /// /// ////  /// //  /// ////  ////

function bossStoryRead(){
  console.log(event.target.value);
  
  if(event.target.value === '0'){
    FoolsStory.forEach(snapStory);
  }
  
  else if(event.target.value === '1'){
    JuninhoStory.forEach(snapStory);
  }
  else if(event.target.value === '2'){
    KingStory.forEach(snapStory);
  }
  else if(event.target.value === '3'){
    PandasStory.forEach(snapStory);
  }
  else if(event.target.value === '4'){
    GuiStory.forEach(snapStory);
  }
  else if(event.target.value === '5'){
    EdneyStory.forEach(snapStory);
  }
}

function visitStoryRead(){
  console.log(event.target.value);
  
  if(event.target.value === '0'){
    SbeekerStory.forEach(snapStory);//
  }
  if(event.target.value === '1'){
    SteveStory.forEach(snapStory);
  }
  if(event.target.value === '2'){
    RafaStory.forEach(snapStory);
  }
  if(event.target.value === '3'){
    MandraxStory.forEach(snapStory);
  }
  if(event.target.value === '4'){
    GirlStory.forEach(snapStory);
  }
  if(event.target.value === '5'){
    WhityStory.forEach(snapStory);
  }
  if(event.target.value === '6'){
    KingaStory.forEach(snapStory);
  }
  if(event.target.value === '7'){
    PauloStory.forEach(snapStory);
  }
}
