ytBtn.addEventListener('click', () =>{
  
  win1.innerHTML = '';
  
  const esse       = event.target;
  const ttImage    = '';
  const vVideo     = 'https://i.imgur.com/jifS773.mp4';
  const youtubeMSG = '...<br /><y>Videos de Clip, Momentos de live e alguns videos antigos ai.</y>';
  const linkDisp   = 'youtube.com/RockeyDoggy';
  socialLink = 'https://youtube.com/RockeyDoggy';
  linkVideo.setAttribute('onclick', 'goToLink()');
  win1.append(linkTitle, linkVideo, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{SOCIALVIDEO}/g, vVideo).replace(/{MESSAGE}/g, youtubeMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
  linkVideo.load();
  
})

twBtn.addEventListener('click', () =>{
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/0L7o436.png';
  const twitterMSG = '...<br/> <y>Só tem posts estranhos ai, mas se gostar segue la.</y>';
  const linkDisp   = 'twitter.com/RockeyDoggy';
  socialLink = 'https://twitter.com/RockeyDoggy';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

dsBtn.addEventListener('click', () => {
  win1.innerHTML = '';
  const esse       = event.target;
  const ttImage    = 'https://i.imgur.com/cGqNyOi.png';
  const twitterMSG = '...<br /><y> No Discord você pode interagir e conversar com os outros viewers ou entrar em contato com os moderadores ou desenvolvedores.</y>';
  const linkDisp   = 'discord.gg/XmF6Sx8AAw';
  socialLink = 'https://discord.gg/XmF6Sx8AAw';
  win1.append(linkTitle, linkImage, linkSubTitle, linkAsk);
  warningRedirect();
  
  win1.innerHTML = win1.innerHTML.replace(/{SOCIAL}/g, esse.innerHTML).replace(/{SOCIALIMAGE}/g, ttImage).replace(/{MESSAGE}/g, twitterMSG).replace(/{LINKDISPLAY}/g, linkDisp).replace(/{LINKTO}/g, socialLink);
  
  socialFunctions();
})

function warningRedirect(){
  warningWindow.style.setProperty('--warningView', 'flex');
  warningWindow.style.opacity = '1';
  document.documentElement.style.setProperty('--warningWin1Opacity', '1');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  linkTitle.innerHTML     = 'Indo para o {SOCIAL}';
  linkImage.src           = '{SOCIALIMAGE}';
  linkVideo.src           = '{SOCIALVIDEO}';
  linkImage.setAttribute('onclick', 'goToLink()');
  linkSubTitle.innerHTML  = 'Você sera direcionado Para o Nosso {SOCIAL} {MESSAGE}';
  linkAsk.innerHTML       = 'Você deseja mesmo ir para "{LINKDISPLAY}"?'
  linkSim.innerHTML       = 'SIM!';
  linkNao.innerHTML       = 'CLARO...';
  warningWindow.append(win1);
}

function socialFunctions(){
  win1.append(linkSim, linkNao);
  linkNao.addEventListener('click', () => {
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
    linkSim.removeEventListener('click', goToLink);
  });
  linkSim.addEventListener('click', goToLink);
  
  linkNao.addEventListener('mouseover', ()=>{
    linkNao.innerHTML = 'QUE NÃO!'
      linkNao.addEventListener('mouseout', ()=>{
        linkNao.innerHTML       = 'CLARO...'
      })
  })
}

function goToLink(){
  window.open(socialLink, '_blank');
    onMenusTabsClose();
    onItemViewerClose();
    customColse();
    linkSim.removeEventListener('click', goToLink);
}