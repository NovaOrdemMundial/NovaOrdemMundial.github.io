      ////{Funções da Tela de Password}////
///////////////Comportamento das Input na tela de Password///////////////////
function boxNext(insert, index, list){
  const proximo   = list[index + 1];
  const anterior  = list[index - 1];
  if(!proximo){
    return
  }
  if(!anterior){
    return
  }
  
  insert.addEventListener('input', () => {
    if(insert.value.length === insert.maxLength){
      proximo.focus();
      proximo.select();
      insert.style.textShadow = '0 0 0.6vw #FFF5';
      insert.value = insert.value.toUpperCase();
    }/*
    else if(insert.value.length === 0){
      anterior.focus();
      anterior.select();
    }*/
  });
  
  insert.addEventListener('keydown', () =>{
    if (event.keyCode == 8){
      anterior.focus();
      anterior.select();
      insert.style.textShadow = '';
    }
  });
}

function dropPassIn(){
  for(var o = 0; o < passTextField.length; o++){
    passScanCheck.innerHTML = passTextField[o].value.toUpperCase();
  }
}

document.querySelectorAll('.inpPass').forEach(boxNext);
////////////Password Funcionalidades///////////
passBTNClear.addEventListener('click', () =>{
  passKeysClear();
});

passBTNConfirm.addEventListener('click', () => {
  passScanCheck.innerHTML = '';
  for(var o = 0; o <passTextField.length; o++){
    passScanCheck.innerHTML += passTextField[o].value;
    passCheck();
    passUnlockSet();
  }
});

function passKeysClear(){
  for(var o = 0; o <passTextField.length; o++){
    passTextField[o].value = '';
    passScanCheck.innerHTML = '------------------------';
  }
}


    ////////////Credenciais///////////////
//Cabe Em Um documento de variaveis separado

/////////////Uma pequena constante//////////////////////
const logCheck = document.getElementById('checkStatus');


logCheck.addEventListener('click', () => {
  passScanCheck.innerHTML = '';
  for(var o = 0; o <passTextField.length; o++){
    passScanCheck.innerHTML += passTextField[o].value;
  }
  passBossCheck();
})
/////////////////{Pass Check Comum}/////////////////////////
function passCheck(){
  
}

////////////////{?????????}/////////////////
statusCheck.addEventListener('mouseover', () =>{
  setTimeout(() => {
    statusCheck.style.cursor = 'pointer';
  },3000);
})
statusCheck.addEventListener('mouseout', () =>{
  statusCheck.style.cursor = '';
});

//////////{Anonimo Novamente}///////////
userDebb.addEventListener('click', function setsDeUser(){
  localStorage.setItem('LoggedHas',       '');
  localStorage.setItem('LoggedPath',      '');
  localStorage.setItem('identification',  '');
  localStorage.setItem('UserType',        '');
  algumascoisinhas();
  document.location.reload(true);
});
//////////////////{É essencial que isso seja inserido depois das Funções da Tela de Password}/////////////////////
function passBossCheck(){
const eachThis= path.collection('Bosses');
  eachThis.get().then((select) => {
    const bossLogg1  = select.docs[0].data();
    const bossLogg2  = select.docs[1].data();
    const bossLogg3  = select.docs[2].data();
    const bossLogg4  = select.docs[3].data();
    const bossLogg5  = select.docs[4].data();
    const bossLogg6  = select.docs[5].data();
    const bossLogg7  = select.docs[6].data();
    //const bossLogg8  = select.docs[7].data();
    //const bossLogg9  = select.docs[8].data();
    //const bossLogg10  = select.docs[9].data();
    if(passScanCheck.innerHTML === bossLogg1.pass){
      localStorage.setItem('LoggedHas',       bossLogg1.nome);
      localStorage.setItem('LoggedPath',      bossLogg1.doc);
      localStorage.setItem('identification',  bossLogg1.id);
      localStorage.setItem('UserType',        bossLogg1.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg2.pass){
      localStorage.setItem('LoggedHas',       bossLogg2.nome);
      localStorage.setItem('LoggedPath',      bossLogg2.doc);
      localStorage.setItem('identification',  bossLogg2.id);
      localStorage.setItem('UserType',        bossLogg2.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg3.pass){
      localStorage.setItem('LoggedHas',       bossLogg3.nome);
      localStorage.setItem('LoggedPath',      bossLogg3.doc);
      localStorage.setItem('identification',  bossLogg3.id);
      localStorage.setItem('UserType',        bossLogg3.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg4.pass){
      localStorage.setItem('LoggedHas',       bossLogg4.nome);
      localStorage.setItem('LoggedPath',      bossLogg4.doc);
      localStorage.setItem('identification',  bossLogg4.id);
      localStorage.setItem('UserType',        bossLogg4.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg5.pass){
      localStorage.setItem('LoggedHas',       bossLogg5.nome);
      localStorage.setItem('LoggedPath',      bossLogg5.doc);
      localStorage.setItem('identification',  bossLogg5.id);
      localStorage.setItem('UserType',        bossLogg5.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg6.pass){
      localStorage.setItem('LoggedHas',       bossLogg6.nome);
      localStorage.setItem('LoggedPath',      bossLogg6.doc);
      localStorage.setItem('identification',  bossLogg6.id);
      localStorage.setItem('UserType',        bossLogg6.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    else if(passScanCheck.innerHTML === bossLogg7.pass){
      localStorage.setItem('LoggedHas',       bossLogg7.nome);
      localStorage.setItem('LoggedPath',      bossLogg7.doc);
      localStorage.setItem('identification',  bossLogg7.id);
      localStorage.setItem('UserType',        bossLogg7.tipo);
      ifMatch();
      passConfirmAnim();
      document.location.reload(true);
    }
    // else if(passScanCheck.innerHTML === bossLogg8.pass){
      // localStorage.setItem('LoggedHas',       bossLogg8.nome);
      // localStorage.setItem('LoggedPath',      bossLogg8.doc);
      // localStorage.setItem('identification',  bossLogg8.id);
      // localStorage.setItem('UserType',        bossLogg8.tipo);
      // ifMatch();
      // passConfirmAnim();
    // }
    else{
      ifNotMatch();
      passDenyAnim();
    }
    algumascoisinhas();
  })
}

////Pass Of Gods/////
function hurtsSearch(){
  document.documentElement.style.setProperty('--SymbolCiclesDisplay', 'flex');
  document.documentElement.style.setProperty('--rollTheGod', 'flickpick');
  setTimeout(()=> {
    document.documentElement.style.setProperty('--SymbolCiclesOpacity', '1');
  }, 100);
  symbolsOfVoice.append(symbolBox);
  
  setTimeout(()=>{
    document.documentElement.style.setProperty('--SymbolCiclesOpacity', '0');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--SymbolCiclesDisplay', 'none');
      document.documentElement.style.setProperty('--rollTheGod', 'none');
      symbolBox.dataset.quem = 'A';
      symbolsOfVoice.innerHTML = '';
    }, 1000)
  }, 9000);
}