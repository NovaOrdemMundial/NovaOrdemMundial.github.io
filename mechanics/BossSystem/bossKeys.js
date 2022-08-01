
//    //  Tipos de Criação  //    //
bossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox')
  criarBoss.setAttribute('class', bossList.classe);
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bossIs()');
  criarBoss.innerHTML = bossList.nome;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossEsquerda.append(criarBoss);
})
//    //  Tipos de Criação  //    //
extraBossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox')
  criarBoss.setAttribute('class', bossList.classe);
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bonusIs()');
  criarBoss.innerHTML = bossList.nome;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossDireita.append(criarBoss);
});

function bossIs(){
  const getBoss = event.target.value;
  const bossAtual = localStorage.getItem('userData');
  const boss = bossInfos[getBoss];
  localStorage.setItem('bossName', boss.nome+'Story');
  bossNome.innerHTML = boss.nome;
  bossNick.innerHTML = boss.nick;
  linksFild.innerHTML = boss.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+boss.boss_banner+')');
  bossTabOpen();
  //Outras Leituras
  bossStoryRead();
  
  setTimeout(() => {
    statusMake(boss);
  }, 1000);
}

function bonusIs(){
  const getBoss = event.target.value;
  localStorage.setItem('userData', getBoss);
  const bossAtual = localStorage.getItem('userData');
  const visit = extraBossInfos[getBoss];
  bossNome.innerHTML = visit.nome;
  bossNick.innerHTML = visit.nick;
  linksFild.innerHTML = visit.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+visit.boss_banner+')');
  bossTabOpen();
  visitStoryRead();
  setTimeout(() => {
    statusMake(visit);
  }, 1000);
}


/*      //   Ler QualBoss   //      */

/*Close All Tabs*/
function venishTabs(){
  bossTabWindow.style.setProperty('--bossWindowOpacity', '0');
  bossTabScreen.style.setProperty('--bossScreenOpacity', '0');
  bossTabWindow.style.setProperty('--bossTransitionTime', '0.5s');
  bossTabScreen.style.setProperty('--bossSTransitionTime', '1s');
  bossTabWindow.style.setProperty('--bossWindowWidth', '0%');
  bossTabWindow.style.setProperty('--bossWindowHeight', '0%');
  trapTabClose .style.setProperty('--closeTabDisplay', 'none');
  storyField.innerHTML = "";
  setTimeout(() => {
    bossTabScreen.style.setProperty('--bossScreenDisplay', 'none');
  }, 700);
}

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
}//         //   Barras De Status   //          //

function statusMake(boss){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(boss.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(boss.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(boss.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(boss.status.força / forceMax * 100);
  const focusResult   = Math.ceil(boss.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(boss.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}

function statusMake(visit){
  const life       = document.getElementById('lifeDynamic');
  const resistence = document.getElementById('resisDynamic');
  const resilience = document.getElementById('resilDynamic');
  const force      = document.getElementById('forceDynamic');
  const focus      = document.getElementById('focusDynamic');
  const agility    = document.getElementById('agilyDynamic');
  //Bars calculator//
  const lifeResult    = Math.ceil(visit.status.vida / lifeMax * 100);
  const resisResult   = Math.ceil(visit.status.resistencia / resisMax * 100);
  const resilResult   = Math.ceil(visit.status.resiliencia / resilMax * 100);
  const forceResult   = Math.ceil(visit.status.força / forceMax * 100);
  const focusResult   = Math.ceil(visit.status.foco / focusMax * 100);
  const agilyResult   = Math.ceil(visit.status.agilidade / agilyMax * 100);
  
  //Bars Show
  life      .style.setProperty('--lifeStatus', lifeResult+'%');
  resistence.style.setProperty('--resistenceStatus', resisResult+'%');
  resilience.style.setProperty('--resilienceStatus', resilResult+'%');
  force     .style.setProperty('--forceStatus', forceResult+'%');
  focus     .style.setProperty('--focusStatus', focusResult+'%');
  agility   .style.setProperty('--agilityStatus', agilyResult+'%');
}

/////////////////////////Remover Item Caso Seja 0//////////////////////////////
function itemUnvalible(itemSpawn){
  if(itemSpawn.getAttribute('value') < 1){
    //itemSpawn.removeAttribute('src');
    itemSpawn.setAttribute('class', 'itemDisabled');
    itemSpawn.setAttribute('onclick', 'disabled()')
  }
}
