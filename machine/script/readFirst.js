algumascoisinhas();
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

//    //  /// Olho No Fundo ///   ///       ///
 const eye = document.querySelector('#eyeIris');
 window.addEventListener('mousemove', (event) => {
 const x = -(window.innerWidth / 2 - event.pageX) / 7;
 const y = -(window.innerHeight / 2 - event.pageY) / 7;
 eye.style.transform = `translateY(${y}px) translateX(${x}px)`;         
}); 