const empty = document.createElement('IMG');
const red   = document.createElement('IMG');
const full = document.createElement('IMG');
empty.src = 'https://i.imgur.com/gEVSAwQ.gif';
red.src   = 'https://i.imgur.com/92tDKRl.gif';
full.src = 'https://i.imgur.com/92tDKRl.gif';
vazia.append(empty);
vermelha.append(red);
cheia.append(full);

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
