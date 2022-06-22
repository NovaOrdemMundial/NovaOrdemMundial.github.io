//        --//Variaveis//--       //
const bossEsquerda  = document.getElementById('bossesRoxos');
const bossDireita   = document.getElementById('bossesEspeciais');
const bossTabScreen = document.getElementById('bossScreen');
const bossTabWindow = document.getElementById('bossWindow');
const trapTabClose  = document.getElementById('closeTabs');
//const dataBoss  = document.createElement('span');
const itemBoss  = document.createElement('input');
const storyBoss = document.createElement('input');
const dataBoss    = localStorage.getItem('userData');

///   //  Mapa Da Guia (Boss)  //    ///
const bossNome    = document.getElementById('userName');
const bossNick    = document.getElementById('nick');
const linksFild   = document.getElementById('extraField');
const bannerBoss  = document.getElementById('bannerUser');
const storyField  = document.getElementById('storyContent');

//     //     Barras E Limites    //     //
  const lifeMax   = 3400;
  const resisMax  = 1000;
  const resilMax  = 760;
  const forceMax  = 1000;
  const focusMax  = 60;
  const agilyMax  = 10;
