///////Checkar qual item foi clicado/////
function itemClickedCheck(){
  const itemIs = event.target.getAttribute('id');
  if(itemIs == 'voidItem_1'){
    itemCheckToClaim();
  }
  else if(itemIs == 'voidItem_2'){
    itemCheckToClaim();
  }
  else if(itemIs == 'voidItem_3'){
    itemCheckToClaim();
  }
  else if(itemIs == 'voidItem_4'){
    itemCheckToClaim();
  }
  else if(itemIs == 'voidItem_5'){
  }
  else if(itemIs == 'voidItem_6'){
    itemCheckToClaim()
  }
}

/////////////{VER ITEMS DE OUTROS USUARIOS}/////////////////
function itemUserInfos(){
  const itemIs = event.target.getAttribute('id');
  if(itemIs == 'item_01'){
    itemInfoCheckUser();
  }
  else if(itemIs == 'item_02'){
    itemInfoCheckUser();
  }
  else if(itemIs == 'item_03'){
    itemInfoCheckUser();
  }
  else if(itemIs == 'item_04'){
    itemInfoCheckUser();
  }
  else if(itemIs == 'item_05'){
  }
  else if(itemIs == 'item_06'){
    itemInfoCheckUser();
  }
  else if(itemIs == 'item_07'){
  }
}

//////////////////////////////////////////

//////////Claim Calculator//////////////
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
  justClick();
  
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
  justClick();
  
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

///////////////////////////////////////////////////

//Checagem De Boss De Resgate para Boss Selecionado//
function checkBossAuth(){//checkSelBoss.value
  if(bossSelNome.value === whoeIs){
    checkSelBoss.value = ':white_check_mark:'+whoeIs;
  }else{
    checkSelBoss.value = ':x:'+whoeIs;
  }
}

////////////////////////////////////////////

//////BD AO RESGATARUTEM///////
function bdModifyOnClaim(){
  path.collection('Bosses').doc(userNowDoc.value).collection('items').doc(itemPathTarget.value).update({
    item_value: itemUseResult.value,
  });
}

//////////////////////////////////////////////////

/////Avise Aos Mod///////
function sendNudes(){
    //Relogio
  var data = new Date(),
      time = data.toLocaleTimeString();
  //Run Notify.
  // confirmItemSend();
    //Comunicação com O Serve Do Discord
  const request = new XMLHttpRequest();
  request.open("POST", ron+nal+dinho+soc+cer+game+play); //Função Post E Qual Servidor
  request.setRequestHeader('Content-type', 'application/json'); //Não sei bem

  //Formato Da Mensagem do Discord
  const params = {
    username: botName,     //Nick do Bot Opcional
    avatar_url: botAvatar,   //Opcional Avatar do Bot
    //content:" Testa", //Mensagem Comum Discord que o Bot vai mandar (Opcional)
    "embeds": [       //Mensagem que o bot vai mandar em Embed
    {
      "author": {
        "name": bossSelNome.value,
        "url": bossSelLink.value,
        "icon_url": bossSelAvatar.value
      },
      "title": "**__" + bossSelNick.value + "__**" + " *Resgatou Item* " + "**__"+itemNameTarget.value+"__**",
      //"url": "https://google.com/",
      "description": "",
      "color": —,
      "fields": [
        {
          "name": " **"+itemNameTarget.value +"** " + itemDescount.value + "x",
          "value": "**"+bossSelNome.value+"**" + " *Resgatou:* " + "**" + itemDescount.value+ " " +itemNameTarget.value+"**",
          "inline": true
        },
        {
          "name": "**(" +itemUseResult.value+ "x)** *Restantes*",
          "value": "**"+checkSelBoss.value+"**",
          "inline": true
        },
        {
          "name": "**"+inputDescript.value+" **",
          "value": "*"+time+"*"
        }
      ],
      "thumbnail": {
        "url": itemIconTarget.value
      },
      "footer":
        {
          "text": "Site NOM",
          "icon_url": "https://i.imgur.com/pv8rDm5.png",
        },
     // "image": {
     //   "url": "https://i.imgur.com/SefZShA.png" //Embed Image
     //   }
      }
    ],
  }
  request.send(JSON.stringify(params));//Conteudo que vai ser enviado
}

//////////////////////////////////////////////////////////////

////Musica do botão Sacrificar tudo////
function nonAct(){
  
}

function sacriOver(){
  SacrificeALL.style.setProperty('--sacrificeAnimation', 'sacrificeRotate');
  runMusic.play();
  fadeIn();
}
function sacriOuter(){
  SacrificeALL.style.setProperty('--sacrificeAnimation', 'none');
  fadeOut();
}

