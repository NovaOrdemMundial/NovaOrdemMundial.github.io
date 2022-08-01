//////////////////Items Looteaveis Do Boss////////////////
function itemCheck(){
  const bossDocField    = document.getElementById('bossSelDocs');
  const bossCollection  = path.collection('bosses');
  const InventoryLoot   = document.getElementById('lootlable');
  const aiddIs          = localStorage.getItem('identification');
  path.collection('Bosses').doc(bossSelDoc.value).collection('items').get().then((getItems) =>{
    getItems.docs.forEach((getted) =>{
      const items  = getted.data();
      const itemSpawn = document.createElement('img');
      itemSpawn.src = items.item_icon;
      //itemSpawn.setAttribute('value', items.item_value);
      itemSpawn.value = items.item_value;
      itemSpawn.setAttribute('title', items.item_title);
      itemSpawn.setAttribute('class', items.item_rarity);
      itemSpawn.setAttribute('id',    'voidItem_'+items.item_id);
      itemSpawn.dataset.type    = items.item_map;
      itemSpawn.dataset.quanto  = items.item_tag;
      //Contador
      const iCount = document.createElement('span');
      iCount.setAttribute('id', items.item_tag);
      iCount.innerHTML = items.item_value;
      InventoryLoot.append(itemSpawn, iCount);
      
      //Condições de Resgate de Itens
      if(itemSpawn.value < 1){
        itemSpawn.removeAttribute('id');
        itemSpawn.setAttribute('style', 'display:none;');
      }
      else if(bossSelID.value == aiddIs){
        itemSpawn.setAttribute('id',    'voidItem_'+items.item_id);
        itemSpawn.addEventListener('click', () => {
          itemClickedCheck();
        })
      }
      else{
        itemSpawn.setAttribute('id',    'item_0'+items.item_id);
        itemSpawn.addEventListener('click', () =>{
          itemUserInfos();
        });
      }
      if(iCount.innerHTML < 1 || isNaN(iCount.innerHTML)){
        iCount.setAttribute('style', 'display:none;');
      }
    })
  })
}

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

//////*Infos a Carregar no Inicio*/////
function algumascoisinhas(){
  const bossNamed   = localStorage.getItem('LoggedHas');
  const bossTyped   = localStorage.getItem('UserType');
  const bossPathed  = localStorage.getItem('LoggedPath');
  typeDebb.innerHTML = bossTyped;
  userDebb.innerHTML = bossNamed;
  /////////////////////////////
  userNowDoc.value = bossPathed;
  targetNowField.append(userNowDoc);
  //condições de Visão
  if(typeDebb.innerHTML === '' || typeDebb.innerHTML === 'null' || typeDebb.innerHTML === 'undefined'){
    typeDebb.style.opacity = '0';
    setTimeout(()=>{
      typeDebb.style.display = 'none';
    },500)
  }else{
    typeDebb.style.display = '';
    typeDebb.style.opacity = '';
  }
  if(userDebb.innerHTML === '' || userDebb.innerHTML === 'null' || userDebb.innerHTML === 'undefined'){
    userDebb.style.opacity = '0';
    setTimeout(()=>{
      userDebb.style.display = 'none';
    },500)
  }else{
    userDebb.style.display = '';
    userDebb.style.opacity = '';
  }
  if(userNowDoc.value === '' || userNowDoc.value === 'undefined' || userNowDoc.value === 'null'){
    userNowDoc.style.opacity = '0';
    setTimeout(()=>{
      userNowDoc.style.display = 'none';
    },500)
  }else{
    userNowDoc.style.display = '';
    userNowDoc.style.opacity = '';//
  }
}


