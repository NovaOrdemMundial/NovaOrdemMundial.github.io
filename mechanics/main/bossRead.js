//    //  Gerar Lista De Bosses  //    //
bossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox')
  criarBoss.setAttribute('class', bossList.classe + ' btnsfx');
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bossIs()');
  criarBoss.innerHTML = bossList.nome;
  criarBoss.dataset.level = bossList.classe;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossEsquerda.append(criarBoss);
})
//    //  Gerar Lista De Não Bosses  //    //
extraBossInfos.forEach((bossList) =>{
  const criarBoss = document.createElement('BUTTON');
  criarBoss.setAttribute('title', bossList.nome);
  criarBoss.setAttribute('style', 'background-image: url('+bossList.avatar_url+');');
  criarBoss.setAttribute('id', 'bossBox');
  criarBoss.setAttribute('class', bossList.classe + ` btnsfx ${bossList.nick}`);
  criarBoss.setAttribute('value', bossList.index);
  criarBoss.setAttribute('onclick', 'bonusIs()');
  criarBoss.innerHTML = bossList.nome;
  criarBoss.dataset.level = bossList.classe;
  //const nomeBoss = document.createElement('SPAN');
  //nomeBoss.innerHTML = bossList.nome;
  //criarBoss.append(nomeBoss);
  bossDireita.append(criarBoss);
});

//		//Ler Bosses nas Tab//		//
function bossIs(){ 
  const getBoss = event.target.value;
  const bossAtual = localStorage.getItem('userData');
  const boss = bossInfos[getBoss];
  localStorage.setItem('bossName', boss.nome+'Story');
  bossNome.innerHTML = boss.nome;
  bossNick.innerHTML = boss.nick;
  bossNick.setAttribute('title', `Ir para o canal de ${boss.nome} na Twitch.`)
  linksFild.innerHTML = boss.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+boss.boss_banner+')');
  bossLevel.value = boss.classe;
  twitchLink.value = boss.twitch_link;
  
  bossNick.addEventListener('click', () =>{
    window.open(twitchLink.value , '_blank');
  });
  
  //debbs
  bossSelDoc    .value  = boss.doc;
  bossSelNick   .value  = boss.nick;
  bossSelNome   .value  = boss.nome;
  bossSelAvatar .value  = boss.avatar_url;
  bossSelLink   .value  = boss.boss_link;
  bossSelID     .value  = boss.id;
  targetSelField.append(bossSelNome, bossSelNick, bossSelDoc, bossSelAvatar, bossLevel, twitchLink, bossSelLink);
  
  //Ler Items
  itemsAvalible.forEach((item) => {
    const itemSpawn = document.createElement('IMG');
    florais.stock = boss.florais;
    papercutout.stock = boss.papercut;
    itemSpawn.src = item.icon;
    itemSpawn.setAttribute('class', item.rarity);
    itemSpawn.setAttribute('id', item.name_id);
    itemSpawn.setAttribute('title', item.nome);
    itemSpawn.setAttribute('value', item.stock);
    itemSpawn.setAttribute('onclick', item.funcao);
    collection.append(itemSpawn);
  //Valor do item
    itemUnvalible(itemSpawn);
    
  });
  
  //Check
  checkBossAuth();
  targetSelField.append(checkSelBoss);
  
  ///Secret Check///
  secretIs();
  //Data Itens
  itemCheck();
  
  //Boss Tab Design
  bossTabOpen();
  bossTheme();
  //Outras Leituras
  bossStoryRead();
  //Status Load
  setTimeout(() => {
    statusMake(boss);
  }, 1000);
}

//			//Ler Não Bosses//			//
function bonusIs(){
  const getBoss = event.target.value;
  localStorage.setItem('userData', getBoss);
  const bossAtual = localStorage.getItem('userData');
  const visit = extraBossInfos[getBoss];
  bossNome.innerHTML = visit.nome;
  bossNick.innerHTML = visit.nick;
  bossNick.setAttribute('title', `Ir para o canal de ${visit.nome} na Twitch.`)
  linksFild.innerHTML = visit.extra1;
  bannerBoss.style.setProperty('--userBanner', 'url('+visit.boss_banner+')');
  bossLevel.value = visit.classe;
  twitchLink.value = visit.twitch_link;
  
  bossNick.addEventListener('click', () =>{
    window.open(twitchLink.value , '_blank');
  });
  //debbs
  bossSelDoc    .value  = visit.doc;
  bossSelNick   .value  = visit.nick;
  bossSelNome   .value  = visit.nome;
  bossSelAvatar .value  = visit.avatar_url;
  bossSelLink   .value  = visit.boss_link;//
  bossSelID     .value  = visit.id;
  targetSelField.append(bossSelNome, bossSelNick, bossSelDoc, bossSelAvatar, bossLevel, bossSelLink, twitchLink, checkSelBoss);//
  
  //Ler Items
  itemsAvalible.forEach((item) => {
    const itemSpawn = document.createElement('IMG');
    florais.stock = visit.florais;
    papercutout.stock = visit.papercut;
    itemSpawn.src = item.icon;
    itemSpawn.setAttribute('class', item.rarity);
    itemSpawn.setAttribute('id', item.name_id);
    itemSpawn.setAttribute('value', item.stock);
    itemSpawn.setAttribute('title', item.nome);
    itemSpawn.setAttribute('onclick', item.funcao);
    collection.append(itemSpawn);
  //Valor do item
    itemUnvalible(itemSpawn);
  });
  
  //Check
  checkBossAuth();
  targetSelField.append(checkSelBoss);
  
  //Check Itens
  itemCheck();
  
  //Boss Tab Design
  bossTabOpen();
  bossTheme();
  //Boss Story
  visitStoryRead();
  //Status Load
  setTimeout(() => {
    statusMake(visit);
  }, 1000);
}