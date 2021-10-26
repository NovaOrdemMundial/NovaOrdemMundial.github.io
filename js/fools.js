////////variaveis/////////

/////////Ações na Pagina/////////
  //Segredo Do Fools//
//Vars
var secEle = document.getElementById("secretFool");
var ricky = document.getElementById("rickyRoll");
var bner = document.getElementById("banner");
function youFools(){
  secretFool.style.display = "initial";
  bner.style.backgroundImage="none";
  ricky.load();
  ricky.play();
}
//Parar o Segredo
function okImFool(){
  secretFool.style.display = "";
  bner.style.backgroundImage="url(https://i.imgur.com/WZbs2oH.png)";
  ricky.pause();
  
}

//Variaveis Do Cartão
var nome = document.getElementsByClassName("two")[0];
var nome2 = document.getElementsByClassName("brid")[0];
var nick = document.getElementById("nick");
var health = document.getElementById("healthSts");
var difficulty = document.getElementById("difSts");
var force = document.getElementById("forcSts");
var resistence = document.getElementById("resSts");
var banner = document.getElementsByClassName("banner")[0];

////////Variveis De Padrão///////////////////////////////
var bannerIMG = "url(https://i.imgur.com/WZbs2oH.png)";
var bgImgBody = "url(https://i.imgur.com/AOD3TJJ.png) left center no-repeat, linear-gradient(-185deg, rgba(10,5,15,1), rgba(35,30,40,1))"
////////////////////////////////////////////////////////


//////Banner e Cores//////////
banner.style.backgroundImage = bannerIMG;

//////////Nomes e Infos////////////////
//                                  //
//                                 //
  nome.innerHTML = "FOOLS";
  nome2.innerHTML = "FOOLS";
  nick.innerHTML = "Fools113";
//                               //
//                              //
///////////////Status//////////////////////
//                                      //
  health.style.width = "19%";
  difficulty.style.width = "48%";
  force.style.width = "75%";
  resistence.style.width = "38%";
//                                   //
//////////////////////////////////////

//////Open Twitch/////////
function openTwitch(){
  window.open("https://www.twitch.tv/fools113", "_blank")
}

/////////Carregar Historico///////////
//||Variaveis Do Story||
var story = document.getElementById("pStory");

//LINHA 1
  var leftInfo1 = document.createElement("DIV");
  leftInfo1.setAttribute("class", "leftInfo");
  //Informação
  leftInfo1.innerHTML = "Fools113";

  var centerInfo1 = document.createElement("DIV");
  centerInfo1.setAttribute("class", "centerInfo");
  //Informação
  centerInfo1.innerHTML = "-50HP";

  var rightInfo1 = document.createElement("DIV");
  rightInfo1.setAttribute("class", "rightInfo");
  //Informação
  rightInfo1.innerHTML = "RockeyDoggy";

var lin1 = document.createElement("DIV");
lin1.setAttribute("class", "killBar");
lin1.appendChild(leftInfo1)+lin1.appendChild(centerInfo1)+lin1.appendChild(rightInfo1);

//Linha 2
  var leftInfo2 = document.createElement("DIV");
  leftInfo2.setAttribute("class", "leftInfo");
  //Informação
  leftInfo2.innerHTML = "Fools113";

  var centerInfo2 = document.createElement("DIV");
  centerInfo2.setAttribute("class", "centerInfo");
  //Informação
  centerInfo2.innerHTML = "✬";

  var rightInfo2 = document.createElement("DIV");
  rightInfo2.setAttribute("class", "rightInfo");
  //Informação
  rightInfo2.innerHTML = "Se Tornou O Boss";

var lin2 = document.createElement("DIV");
lin2.setAttribute("class", "killBar");
lin2.appendChild(leftInfo2)+lin2.appendChild(centerInfo2)+lin2.appendChild(rightInfo2);

//Linha 3
  var leftInfo3 = document.createElement("DIV");
  leftInfo3.setAttribute("class", "leftInfo");
  //Informação
  leftInfo3.innerHTML = "rGreque";

  var centerInfo3 = document.createElement("DIV");
  centerInfo3.setAttribute("class", "centerInfo");
  //Informação
  centerInfo3.innerHTML = "-50 HP";

  var rightInfo3 = document.createElement("DIV");
  rightInfo3.setAttribute("class", "rightInfo");
  //Informação
  rightInfo3.innerHTML = "Fools113";

var lin3 = document.createElement("DIV");
lin3.setAttribute("class", "killBar");
lin3.appendChild(leftInfo3)+lin3.appendChild(centerInfo3)+lin3.appendChild(rightInfo3);

//Linha 4
  var leftInfo4 = document.createElement("DIV");
  leftInfo4.setAttribute("class", "leftInfo");
  //Informação
  leftInfo4.innerHTML = "Fools113";

  var centerInfo4 = document.createElement("DIV");
  centerInfo4.setAttribute("class", "centerInfo");
  //Informação
  centerInfo4.innerHTML = "-50 HP";

  var rightInfo4 = document.createElement("DIV");
  rightInfo4.setAttribute("class", "rightInfo");
  //Informação
  rightInfo4.innerHTML = "Fools113";

var lin4 = document.createElement("DIV");
lin4.setAttribute("class", "killBar");
lin4.appendChild(leftInfo4)+lin4.appendChild(centerInfo4)+lin4.appendChild(rightInfo4);

//Linha 5
  var leftInfo5 = document.createElement("DIV");
  leftInfo5.setAttribute("class", "leftInfo");
  //Informação
  leftInfo5.innerHTML = "RafaaSmile";

  var centerInfo5 = document.createElement("DIV");
  centerInfo5.setAttribute("class", "centerInfo");
  //Informação
  centerInfo5.innerHTML = "-0.21 HP";

  var rightInfo5 = document.createElement("DIV");
  rightInfo5.setAttribute("class", "rightInfo");
  //Informação
  rightInfo5.innerHTML = "Fools113";

var lin5 = document.createElement("DIV");
lin5.setAttribute("class", "killBar");
lin5.appendChild(leftInfo5)+lin5.appendChild(centerInfo5)+lin5.appendChild(rightInfo5);

//Linha 6
  var leftInfo6 = document.createElement("DIV");
  leftInfo6.setAttribute("class", "leftInfo");
  //Informação
  leftInfo6.innerHTML = "Sbevee_";

  var centerInfo6 = document.createElement("DIV");
  centerInfo6.setAttribute("class", "centerInfo");
  //Informação
  centerInfo6.innerHTML = "-3.48 HP";

  var rightInfo6 = document.createElement("DIV");
  rightInfo6.setAttribute("class", "rightInfo");
  //Informação
  rightInfo6.innerHTML = "Fools113";

var lin6 = document.createElement("DIV");
lin6.setAttribute("class", "killBar");
lin6.appendChild(leftInfo6)+lin6.appendChild(centerInfo6)+lin6.appendChild(rightInfo6);

//Linha 7
  var leftInfo7 = document.createElement("DIV");
  leftInfo7.setAttribute("class", "leftInfo");
  //Informação
  leftInfo7.innerHTML = "Fools113";

  var centerInfo7 = document.createElement("DIV");
  centerInfo7.setAttribute("class", "centerInfo");
  //Informação
  centerInfo7.innerHTML = "-50 HP";

  var rightInfo7 = document.createElement("DIV");
  rightInfo7.setAttribute("class", "rightInfo");
  //Informação
  rightInfo7.innerHTML = "rGreque";

var lin7 = document.createElement("DIV");
lin7.setAttribute("class", "killBar");
lin7.appendChild(leftInfo7)+lin7.appendChild(centerInfo7)+lin7.appendChild(rightInfo7);

//Linha 8
  var leftInfo8 = document.createElement("DIV");
  leftInfo8.setAttribute("class", "leftInfo");
  //Informação
  leftInfo8.innerHTML = "Fools113";

  var centerInfo8 = document.createElement("DIV");
  centerInfo8.setAttribute("class", "centerInfo");
  //Informação
  centerInfo8.innerHTML = "✬";

  var rightInfo8 = document.createElement("DIV");
  rightInfo8.setAttribute("class", "rightInfo");
  //Informação
  rightInfo8.innerHTML = "Se Tornou o Boss";

var lin8 = document.createElement("DIV");
lin8.setAttribute("class", "killBar");
lin8.appendChild(leftInfo8)+lin8.appendChild(centerInfo8)+lin8.appendChild(rightInfo8);

//Linha 9
  var leftInfo9 = document.createElement("DIV");
  leftInfo9.setAttribute("class", "leftInfo");
  //Informação
  leftInfo9.innerHTML = "Draaaxy";

  var centerInfo9 = document.createElement("DIV");
  centerInfo9.setAttribute("class", "centerInfo");
  //Informação
  centerInfo9.innerHTML = "-5 HP";

  var rightInfo9 = document.createElement("DIV");
  rightInfo9.setAttribute("class", "rightInfo");
  //Informação
  rightInfo9.innerHTML = "Fools113";

var lin9 = document.createElement("DIV");
lin9.setAttribute("class", "killBar");
lin9.appendChild(leftInfo9)+lin9.appendChild(centerInfo9)+lin9.appendChild(rightInfo9);

//Linha 10
  var leftInfo10 = document.createElement("DIV");
  leftInfo10.setAttribute("class", "leftInfo");
  //Informação
  leftInfo10.innerHTML = "Fools113";

  var centerInfo10 = document.createElement("DIV");
  centerInfo10.setAttribute("class", "centerInfo");
  //Informação
  centerInfo10.innerHTML = "♔";

  var rightInfo10 = document.createElement("DIV");
  rightInfo10.setAttribute("class", "rightInfo");
  //Informação
  rightInfo10.innerHTML = "Ascendeu";

var lin10 = document.createElement("DIV");
lin10.setAttribute("class", "killBar");
lin10.appendChild(leftInfo10)+lin10.appendChild(centerInfo10)+lin10.appendChild(rightInfo10);

//Insert
story.appendChild(lin10)+story.appendChild(lin9)+story.appendChild(lin8)+story.appendChild(lin7)+story.appendChild(lin6)+story.appendChild(lin5)+story.appendChild(lin4)+story.appendChild(lin3)+story.appendChild(lin2)+story.appendChild(lin1);


//Landscape Functions
  //Vars
var pStory = document.getElementById("pStory");
var inventory=document.getElementsByClassName("inventory")[0];
var storyScreen = document.getElementById("stoLLapse");
var invText = document.getElementById("invTXT");
//Detect
setTimeout(function coll(){
  var screenS = screen.width;
  var storyScreen = document.getElementById("stoLLapse");
  var invText = document.getElementById("invTXT");
  var pStory = document.getElementById("pStory");
  var inventory=document.getElementsByClassName("inventory")[0];
  var bordas = document.getElementsByClassName("centralizeBordas")[0].offsetWidth;
  var corpo = document.getElementById("corpo");
  var ricky = document.getElementById("rickyRoll");
  
  //if(screenS > 565){
  //  storyScreen.setAttribute("onClick", "openStory()");
  //  invText.setAttribute("onClick", "openInv()");
  //  pStory.setAttribute("onmouseover", "zoomStory()");
  //  pStory.setAttribute("onmouseout", "outStory()");
  //  secretFool.style.display = "";
  //  ricky.pause();
  //  bner.style.backgroundImage="";
  //  corpo.style.background = bgImgBody;
  //  corpo.style.backgroundSize = "auto 100%";
  //}
  //if(screenS < 565){
  //  bner.style.backgroundImage= bannerIMG;
  //  corpo.style.background = "";
  //  storyScreen.removeAttribute("onClick");
  //  invText.removeAttribute("onClick");
  //  pStory.removeAttribute("onclick");
  //  pStory.removeAttribute("onmouseover");
  //  pStory.removeAttribute("onmouseout");
  //  pStory.style.height = "";
  //  inventory.style.height = "";
  //  pStory.style.transform = "";
  //  pStory.style.background = "";
  //  pStory.style.boxShadow = ""
  //  invText.innerHTML="Inventario"
  //  storyScreen.innerHTML="Historico"
  //}
  
  if(screenS > 565){
    storyScreen.setAttribute("onClick", "openStory()");
    invText.setAttribute("onClick", "openInv()");
    pStory.setAttribute("onmouseover", "zoomStory()");
    pStory.setAttribute("onmouseout", "outStory()");
    bner.style.backgroundImage="";
    corpo.style.background = bgImgBody;
    corpo.style.backgroundSize = "auto 100%";
    //secretFool.style.display = "";
    //ricky.pause();
    if(inventory.style.height == ""){
      invText.style.textShadow = "0 0 10px #FFF"
      invText.style.color = "#FFF"
    }
  }
  if(screenS < 565){
    bner.style.backgroundImage= bannerIMG;
    corpo.style.background = "";
    storyScreen.removeAttribute("onClick");
    invText.removeAttribute("onClick");
    pStory.removeAttribute("onclick");
    pStory.removeAttribute("onmouseover");
    pStory.removeAttribute("onmouseout");
    pStory.style.height = "";
    inventory.style.height = "";
    pStory.style.transform = "";
    pStory.style.background = "";
    pStory.style.boxShadow = ""
    invText.style.textShadow = ""
    invText.style.color = ""
    storyScreen.style.textShadow = ""
    storyScreen.style.color = ""
    if(ricky.paused){
      bner.style.backgroundImage= bannerIMG;
    }else{
      bner.style.backgroundImage= "";
    }
  }
  setTimeout(coll, 100);
}, 50);

function openStory(){
  inventory.style.height = "0%";
  storyScreen.style.textShadow = "0 0 10px #FFF"
  storyScreen.style.color = "#FFF"
  invText.style.textShadow = ""
  invText.style.color = ""
  setTimeout(function(){
    pStory.style.height = "55%";
  }, 200);
}
function openInv(){
  pStory.style.height = "0%";
  invText.innerHTML="Inventario"
  storyScreen.style.textShadow = ""
  storyScreen.style.color = ""
  invText.style.textShadow = "0 0 10px #FFF"
  invText.style.color = "#FFF"
  setTimeout(function(){
    inventory.style.height = "55%";
  }, 200)
}

function zoomStory(){
  //variaveis
  var bordas = document.getElementsByClassName("centralizeBordas")[0].offsetWidth;
  //funções
  pStory.style.transform = "scale(150%) translate(-40%, -15%) rotateY(180deg)";
  pStory.style.background = "#000";
  pStory.style.boxShadow = "0 0 400px 180px #000"
  
  if(bordas < 800){
    pStory.style.transform = "scale(150%) translate(-40%, -0%) rotateY(180deg)";
  }
}
function outStory(){
  pStory.style.transform = "";
  pStory.style.background = "";
  pStory.style.boxShadow = ""
  
}

//Botão de Fechar
  //vid Vars
var vidd1 = document.getElementById("cBTN1");
var vidd2 = document.getElementById("cBTN2");
var vidd3 = document.getElementById("cBTN3");
var endBTN= document.getElementById("endBTN");
var border = document.getElementsByClassName("mainBorder")[0];
var corpo = document.getElementsByClassName("corpo")[0];

setTimeout(function(){
  
  vidd1.style.opacity = "0";
  vidd2.load();
  vidd2.play();
  vidd2.style.opacity = "1"
  endBTN.setAttribute("onclick", "closeAll()");
}, 500)

function closeAll(){
  var screenS = screen.width;
  vidd2.style.opacity = "0";
  vidd3.style.opacity = "1";
  vidd3.play();
  endBTN.removeAttribute("onclick");
  window.open("https://novaordemmundial.github.io", "_self")
  if(screenS > 565){
    corpo.style.width = "0%";
    border.style.width = "0%";
  }
  if(screenS < 565){
    corpo.style.height = "0%";
    border.style.height = "0%";
  }
}
///
