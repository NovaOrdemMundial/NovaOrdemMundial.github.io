//Variaveis Universais
var tChar = document.getElementById("tabChar");
var tCharPan = document.getElementById("tabCharPan");
var corpo = document.getElementById("centralizador");
var cCancel = document.getElementById("charCancel");
var menuBtn = document.getElementById("menuOpn");
var menuCent = document.getElementById("menuCentralize");
var exitBtn = document.getElementById("mSair");
var passScr = document.getElementById("passCentralizador");
var box03 = document.getElementById("charS3");

//Character Select//
function opnFools(){
  //Defaults Open
  tChar.style.display = "flex";
  tCharPan.style.display = "none";
  tChar.style.filter = "saturate(100%)";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  setTimeout(function(){
    window.open("https://novaordemmundial.github.io/fools", "_self")
  }, 800)
  //End Defaults Open
}

function opnJunin(){
  //Defaults Open
  tChar.style.display = "flex";
  tCharPan.style.display = "none";
  tChar.style.filter = "saturate(100%)";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function opnSteve(){
  //Defaults Open
  tChar.style.display = "flex";
  tCharPan.style.display = "none";
  tChar.style.filter = "saturate(0%)";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function opnRafa(){
  //Defaults Open
  tChar.style.display = "flex";
  tCharPan.style.display = "none";
  tChar.style.filter = "saturate(0%)";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function opnDrax(){
  //Defaults Open
  tChar.style.display = "flex";
  tChar.style.filter = "saturate(0%)";
  tCharPan.style.display = "none";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function opnGirl(){
  //Defaults Open
  tChar.style.display = "flex";
  tChar.style.filter = "saturate(0%)";
  tCharPan.style.display = "none";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function opnSbeeker(){
  //Defaults Open
  tChar.style.display = "flex";
  tCharPan.style.display = "none";
  tChar.style.filter = "saturate(60%) hue-rotate(150deg) contrast(95%) brightness(170%)";
  //Menu Button
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(180%)";
  
  setTimeout (function(){
    tChar.style.height = "99%";
    tChar.style.width = "99%";
    cCancel.style.opacity= "1";
  }, 100)
  //End Defaults Open
}

function charClose(){
  tCharPan.style.width = "";
  tChar.style.width = "";
  tChar.style.height = "";
  cCancel.style.opacity= "";
  //Menu Button
  menuBtn.style.transform = "";
  menuBtn.style.filter = "";
  
  setTimeout(function(){
    tCharPan.style.display = "none";
    tChar.style.display = "none";
  }, 450)
}

//Menus
function menuOpen(){
  menuBtn.style.transform = "rotate(540deg) scale(0)";
  menuBtn.style.filter = "drop-shadow(0 0 10px #95F) hue-rotate(100deg) contrast(160%)";
  menuCent.style.bottom = "0%";
  exitBtn.style.bottom = "0%";
}

//Close Menu
function menuOff(){
  menuCent.style.bottom = "-100%";
  exitBtn.style.bottom = "-100%";
  menuBtn.style.transform = "rotate(0deg) scale(1)";
  menuBtn.style.filter = "";
}

//                  Customização e Funções
var custCentr = document.getElementById("custCentralize");
function customOpn(){
  custCentr.style.top= "0%";
  menuCent.style.bottom = "-100%";
  exitBtn.style.bottom = "-100%";
}

//Fechar
function saveThis(){
  custCentr.style.top= "100%";
  //Menu Button
  menuBtn.style.transform = "rotate(0deg) scale(1)";
  menuBtn.style.filter = "";
}





///////////////  C  M  D  //////////////////
var dftDesign = document.getElementById('hDftDes');
var TstDes = document.getElementById('hTstDes');
var bgCust = document.getElementById('bgCust');
var makeBtn = document.createElement('button');
var sbkrUnl = document.getElementById('hSbkr');
function dft(){
  dftDesign.value = 1;
  TstDes.value = 1;
  makeBtn.setAttribute("class", "itemBox");
  makeBtn.setAttribute("title", "Diferente");
  makeBtn.setAttribute("id", "onDesign");
  makeBtn.setAttribute("onclick", "diferent()");
  makeBtn.innerHTML ="<p>Diferent</p>";
  bgCust.appendChild(makeBtn);
  setTimeout(function(){
  localStorage.setItem('hDft', dftDesign.value);
  localStorage.setItem("hTst", TstDes.value);
  }, 100)
}

function diferent(){
  dftDesign.value = 0;
  TstDes.value = 0;
  localStorage.setItem('hDft', dftDesign.value);
  localStorage.setItem("hTst", TstDes.value);
}

//Carregar
dftDesign.value = localStorage.getItem('hDft');
TstDes.value = localStorage.getItem("hTst");
sbkrUnl.value = localStorage.getItem("sbkWho");

if(dftDesign.value.match(1)){
  makeBtn.setAttribute("class", "itemBox");
  makeBtn.setAttribute("title", "Diferente");
  makeBtn.setAttribute("id", "onDesign");
  makeBtn.setAttribute("onclick", "diferent()");
  makeBtn.innerHTML ="<p>Diferent</p>";
  bgCust.appendChild(makeBtn);
}

//sbk
if(sbkrUnl.value == 1){
  var seLine = document.getElementsByClassName('tCeSe')[0];
  seLine.setAttribute('class', 'toJump tCeUn');
  
  //Box Confirm
  box03.setAttribute("class", "charbox dois sbeeker");
  //box03.setAttribute("id", "sbeeker");
  box03.setAttribute("onClick", "opnSbeeker()");
  box03.innerHTML = "<p>Sbeeker</p>";
}
// FIM DE CRIAÇÃO DE ELEMENTO


//Abrir e Fechar Menu De Password
function opnPass(){
  passScr.style.top = "0%";
  menuCent.style.bottom = "";
  exitBtn.style.bottom = "";
  menuBtn.style.transform = "";
  menuBtn.style.filter = "";
}


//Pass System
  //Jump To Next Focus
//////////NOT WORK//////////////
//var PossLatrs = document.getElementById('PossLatters');
//
//PossLatrs.onkeyup = function(e){
//  var target = e.srcElement || e.target;
//  var maxLength = parseInt(target.attributes["maxlength"].value, 1);
//  var myLength = target.value.length;
//  if(myLength >= maxLength){
//    var next = target.nextElementSibling;
//    next.focus();
//  }
//}

//for(i = 0; i <PossLatters.length; i++){
//  PossLatters[i].onkeyup = function(e){
//    var target = e.srcElement || e.target;
//    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
//    var myLength = target.value.length;
//    if(myLength >= maxLength){
//      var next = target.nextElementSibling;
//      next.focus();
//    }
//  }
//}
/////////////////NOT WORK///////////////////////||


//Pass Do
function getPass(){
  //Variaveis
var lt1 = document.getElementById("let01");
var lt2 = document.getElementById("let02");
var lt3 = document.getElementById("let03");
var lt4 = document.getElementById("let04");
var lt5 = document.getElementById("let05");
var lt6 = document.getElementById("let06");
var lt7 = document.getElementById("let07");
var lt8 = document.getElementById("let08");
var lt9 = document.getElementById("let09");
var lt10 = document.getElementById("let10");
var lt11 = document.getElementById("let11");
var lt12 = document.getElementById("let12");
var lt13 = document.getElementById("let13");
var lt14 = document.getElementById("let14");
var lt15 = document.getElementById("let15");
var lt16 = document.getElementById("let16");
var lt17 = document.getElementById("let17");
var lt18 = document.getElementById("let18");
var lt19 = document.getElementById("let19");
var lt20 = document.getElementById("let20");
var lt21 = document.getElementById("let21");
  
  var ltrBox = document.getElementsByClassName("letterBox");
  var confBTN = document.getElementById("passCFM");
  var letters = document.getElementsByClassName("ltrs");
  //ResultVar
var passIs=[lt1.value+lt2.value+lt3.value+lt4.value+lt5.value+lt6.value+lt7.value+lt8.value+lt9.value+lt10.value+lt11.value+lt12.value+lt13.value+lt14.value+lt15.value+lt16.value+lt17.value+lt18.value+lt19.value+lt20.value+lt21.value];
  //PassPulse
  
//Error Check
  for(i = 0; i <ltrBox.length; i++){
    ltrBox[i].style.boxShadow = "inset 0 0 15px 0px #F00, 0 0 15px #F00";
    ltrBox[i].style.border = "1px groove #F77";
  }
  confBTN.style.color = "#F77";
  confBTN.style.textShadow = "0 0 10px #F00";
  confBTN.style.border = "2px #F77 solid";
  confBTN.style.boxShadow = "inset 0 0 10px #F00, 0 0 10px #F00";
  
  
  //Design End//
  setTimeout(function(){
    for(i = 0; i <ltrBox.length; i++){
      ltrBox[i].style.boxShadow = "";
      ltrBox[i].style.border = "";
    }
    confBTN.style.color = "";
    confBTN.style.textShadow = "";
    confBTN.style.border = "";
    confBTN.style.boxShadow = "";
    
  }, 1000);
  
  
            // Weabozify  //
  if(passIs == "yin-yangeweebo"){
    yinWeebo()
  }
  if(passIs == "YIN-YANGEWEEBO"){
    yinWeebo()
  }
}
//Close and Clear Pass
function closePass(){
  //variaveis
  var letters = document.getElementsByClassName("ltrs");
  //Action
  passScr.style.top = null;
  for(i = 0; i <letters.length; i++){
    letters[i].value = null;
  }
}

//Pass Act
  //Weebfy
function yinWeebo(){
    //act1
  sbkrUnl.value = 1;
  var seLine = document.getElementById('seDef');
  var ltrBox = document.getElementsByClassName("letterBox");
  var confBTN = document.getElementById("passCFM");
  var letters = document.getElementsByClassName("ltrs");
  var box03 = document.getElementById("charS3");
  var warnCentral = document.getElementsByClassName("warningCentralize")[0];
  var warnText = document.getElementById("warningBox");
  var ltrBox = document.getElementsByClassName("letterBox");
  seLine.setAttribute('class', 'toJump tCeUn');
  localStorage.setItem("sbkWho", sbkrUnl.value);
  
  //Se Ja tiver//
  if(sbkrUnl.value == 1){
  }
  
  //Box Confirm||<
  box03.setAttribute("class", "charbox dois sbeeker");
  //box03.setAttribute("id", "sbeeker");
  box03.setAttribute("onClick", "opnSbeeker()");
  box03.innerHTML = "<p>Sbeeker</p>";
  
  //Checks Design
  confBTN.style.color = "#7F7";
  confBTN.style.textShadow = "0 0 10px #0F0";
  confBTN.style.border = "2px #7F7 solid";
  confBTN.style.boxShadow = "inset 0 0 10px #0F0, 0 0 10px #0F0";
  
  //Waning
  warnText.innerHTML = "<h4>Sbeeker Foi desbloqueado</h4>";
  warnCentral.style.opacity = "1";
  warnCentral.style.top = "0%";
  setTimeout(function(){
    warnCentral.style.opacity = "";
  }, 2100)
  
  for(i = 0; i <ltrBox.length; i++){
    ltrBox[i].style.boxShadow = "inset 0 0 15px 0px #0F0, 0 0 15px #0F0";
    ltrBox[i].style.border = "1px groove #7F7";
  }
  
  //End Pass Apresentation
  setTimeout(function(){
    closePass();
  }, 700);
  setTimeout(function(){
      passScr.style.top = null;
      for(i = 0; i <letters.length; i++){
        letters[i].value = null;
      }
    },1100);
}

