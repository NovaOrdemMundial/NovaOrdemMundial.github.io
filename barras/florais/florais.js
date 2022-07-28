vaziaImg.src = 'https://i.imgur.com/gEVSAwQ.gif';
redBar.src   = 'https://i.imgur.com/92tDKRl.gif';
fullBar.src  = 'https://i.imgur.com/92tDKRl.gif';
const subtitulo = 'url(https://i.imgur.com/dhzHf17.png)';
const border    = 'url(https://i.imgur.com/US7RdKj.png);';
subtitle.style.background = subtitulo;

const vidaAtual = document.createElement('input');  vidaAtual.value = '0';
const vidaDano  = document.createElement('input');  vidaDano .value = '0';
const vidaCura  = document.createElement('input');  vidaCura .value = '0';

danu.addEventListener('click', (min, max) =>{
  const randomRange = Math.floor(Math.random() * (0 - 100)) + 0;
  vidaDano.value = randomRange;
  const resumeDamage = parseInt(vidaAtual.value) - parseInt(vidaDano.value);
  document.documentElement.style.setProperty('--VidaAtual', resumeDamage+'%');
  health.innerHTML = resumeDamage + ' hp';
})

leftTab.append(vidaAtual, vidaDano, vidaCura);
