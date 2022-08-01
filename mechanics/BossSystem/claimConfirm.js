//Checagem De Boss De Resgate para Boss Selecionado//
function checkBossAuth(){//checkSelBoss.value
  if(bossSelNome.value === whoeIs){
    checkSelBoss.value = ':white_check_mark:'+whoeIs;
  }else{
    checkSelBoss.value = ':x:'+whoeIs;
  }
}

//////BD AO RESGATARUTEM///////
function bdModifyOnClaim(){
  path.collection('Bosses').doc(userNowDoc.value).collection('items').doc(itemPathTarget.value).update({
    item_value: itemUseResult.value,
  });
}

/////Avise Aos Mod///////
function sendNudes(){
    //Relogio
  var data = new Date(),
      time = data.toLocaleTimeString();
  //Update
  // dataExtra.value = inputMess.getAttribute("value");
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
      "color": 15105570,
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