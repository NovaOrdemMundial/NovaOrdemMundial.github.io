
////////////__||Temas||__////////////
const wallpaperImg = document.createElement('IMG');
//Pures
function purer(){
  const wallpaperImg = document.createElement('IMG');
  wallpaperImg.src = 'https://i.imgur.com/YokRXV5.png';//
  wallpaperImg.setAttribute('style', 'filter:sepia(50%) hue-rotate(-10deg) contrast(60%);');
  menuMapsGuide.setAttribute('class', 'purers');
  slide.append(wallpaperImg);
  for(var t = 0; t < bossBox.length; t++){
    bossBox[t].classList.add("purerBoxTheme");//
  }
  olhoAberto.src     = 'https://novaordemmundial.github.io/design/themes/purer/Sunflower%20Looped.webm';
  olharCensura  .src = 'NovaOrdemMundial.github.io/design/themes/purer/Sunflower OnHover.webm';
  olhoAbrindo   .src = 'https://novaordemmundial.github.io/design/themes/purer/Sunflower%20OnOuter.webm';
  olhoDesaparece.src = 'https://novaordemmundial.github.io/design/themes/purer/Sunflower%20Dissolve.webm';
  menuBotao.classList.add('purerButtonTheme');
  wallpaperVignetta.style.backgroundImage = 'radial-gradient(#1110 15%, rgba(15,9,5,0.95) 65%)';
}

function clearPurer(){
  menuMapsGuide.removeAttribute('class');
  slide.innerHTML = '';
  for(var t = 0; t < bossBox.length; t++){
    bossBox[t].classList.remove("purerBoxTheme");//
  }
  olhoAberto    .src = abertoLoopLink;
  olharCensura  .src = olharCensuraLink;
  olhoAbrindo   .src = abrirOlhoLink;
  olhoDesaparece.src = olhoDesapareceLink;
  menuBotao.classList.remove('purerButtonTheme');
  wallpaperVignetta.style.backgroundImage = '';
  
}
