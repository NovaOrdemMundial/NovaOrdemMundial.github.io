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