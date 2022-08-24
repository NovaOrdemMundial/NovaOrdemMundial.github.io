const theLink = document.createElement('INPUT');
theLink.value = window.location.hash;

const Pandos = ['#pandas', '#Pandas', '#Panda', '#panda', '#Pandoca', '#pandoca', '#Pandas_S2', '#pandas_s2'];
const Eddie  = ['#Eddy', '#eddy', '#Eddie', '#eddie', '#Edney', '#edney', '#edney_de_pijama', '#Edney_De_Pijama', '#Eddytor', '#eddytor'];
const Fooly  = ['#Fools', '#fools', '#Fooly', '#fooly', '#ManoFools', '#manofools', '#Fulls', '#fulls', '#Foolie', '#foolie', '#Fools113', '#fools113'];
const Jusnin = ['#Junin', '#junin', '#juninho', '#Juninho', '#Junesco', '#junesco', '#greque', '#Greque', '#7greque', '#7Greque', 'Junelson', 'junelson'];
const Kingos = ['#King', '#king', '#Kingo', '#kingo', '#Kingão', '#kingão', '#S1rKing', '#s1rking', '#SirKing', '#sirking'];
const Guis   = ['#Gui', '#gui', '#godiira', '#Godiira', '#godira', '#Godira', '#Guilherme', '#guilherme', '#GuiMusic', 'guimusic'];
const Kingas = ['#kinga', '#Kinga', '#kinguinha', '#Kinguinha', '#kingator', '#Kingator'];
const Stove  = ['#Steve', '#steve', '#sbeeve', '#Sbeeve', '#sbevee', '#Sbevee', '#Hetai', '#hentai', '#weebo', '#Weebo'];
const Raffas = ['#Rafa', '#rafa', '#Rafinha', '#rafinha', '#RafaaSmile', '#rafaasmile', '#Raffão', '#raffão', '#filho01', '#Filho01'];
const Mandras= ['#Mandrax', '#mandrax', '#Mandras', '#mandras', '#Draaaxxy', '#draaaxxy'];
const Girls  = ['#Girl', '#girl', '#little_bunbunny', '#Little_BunBunny', '#Girl_Stranger_Fear', '#girl_stranger_fear'];
const Whitys = ['#Whity', '#whity', '#White', '#white'];
const Paulus = ['#Paulo', '#paulo', '#PauloHenrique82', '#paulohenrique82', '#Filho02', '#filho02'];
const Sbeeko = ['#Sbeeker', '#sbeeker', '#Sbekeer', '#sbekeer', '#Steve&Sneker', '#steve&sneker'];

if(Pandos.includes(theLink.value)){
  bossIndx.value = 3;
  bossIs();
}
else if(Eddie.includes(theLink.value)){
  bossIndx.value = 5;
  bossIs();
}
else if(Fooly.includes(theLink.value)){
  bossIndx.value = 0;
  bossIs();
}
else if(Jusnin.includes(theLink.value)){
  bossIndx.value = 1;
  bossIs();
}
else if(Kingos.includes(theLink.value)){
  bossIndx.value = 2;
  bossIs();
}
else if(Guis.includes(theLink.value)){
  bossIndx.value = 5;
  bossIs();
}
else if(Kingas.includes(theLink.value)){
  bossIndx.value = 6;
  bossIs();
}
else if(Stove.includes(theLink.value)){
  bossIndx.value = 1;
  bonusIs();
}
else if(Raffas.includes(theLink.value)){
  bossIndx.value = 2;
  bonusIs();
}
else if(Mandras.includes(theLink.value)){
  bossIndx.value = 3;
  bonusIs();
}
else if(Girls.includes(theLink.value)){
  bossIndx.value = 4;
  bonusIs();
}
else if(Whitys.includes(theLink.value)){
  bossIndx.value = 5;
  bonusIs();
}
else if(Paulus.includes(theLink.value)){
  bossIndx.value = 6;
  bonusIs();
}
else if(Sbeeko.includes(theLink.value)){
  bossIndx.value = 0;
  bonusIs();
}
