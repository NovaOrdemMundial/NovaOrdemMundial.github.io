//        --//Variaveis//--       //
const bossEsquerda  = document.getElementById('bossesRoxos');
const bossDireita   = document.getElementById('bossesEspeciais');
const bossTabScreen = document.getElementById('bossScreen');
const bossTabWindow = document.getElementById('bossWindow');
const trapTabClose  = document.getElementById('closeTabs');
const bossSecretArea= document.getElementById('bossSecrets');

//const dataBoss  = document.createElement('span');
const itemBoss  = document.createElement('input');
const storyBoss = document.createElement('input');
const dataBoss    = localStorage.getItem('userData');
///     //  Mapa da tela inicial //     ///
const wallpaper      = document.getElementById('wallpaper');
const corpo          = document.getElementById('corpo');
const selectBossText = document.getElementById('-sub');
///   //  Mapa Da Guia (Boss)  //    ///
const bossNome    = document.getElementById('userName');
const bossNick    = document.getElementById('nick');
const linksFild   = document.getElementById('extraField');
const bannerBoss  = document.getElementById('bannerUser');
const storyField  = document.getElementById('storyContent');
const collection  = document.getElementById('collection');
const bossLevel   = document.createElement('input');
const twitchLink  = document.createElement('input');
const inventario  = document.getElementById('inventory');
/// /// /// ///{DebuggMap}/// /// /// /// ///
const userDebb       = document.getElementById('userNome');
const typeDebb       = document.getElementById('userType');
const targetNowField = document.getElementById('targetsNow');
const targetSelField = document.getElementById('targetsSelected');

//Mapas Ocultos
const warningWindow = document.getElementById('warningWindows');
const avisosSuperior= document.getElementById('avisosSuperiores');
const symbolsOfVoice= document.getElementById('passSymbolCicle');
//Create This
const bossSelDoc    = document.createElement('input');
const bossSelNick   = document.createElement('input');
const bossSelNome   = document.createElement('input');
const bossSelAvatar = document.createElement('input');
const bossSelLink   = document.createElement('input');
const bossSelID     = document.createElement('input');
const checkSelBoss  = document.createElement('input');
/////////////////////////////////////
const bossTargetDoc   = document.createElement('input');
const userNowDoc      = document.createElement('input');
/////////Criação de Alguns Elementos///////////////
const itemFrame = document.createElement('IFRAME');
itemFrame.setAttribute('scrolling', 'no');

///        /////Loads Necessarios////////            ///
//Loads
const whoeIs    = localStorage.getItem('LoggedHas');
const pathIs    = localStorage.getItem('LoggedPath');
const typeIs    = localStorage.getItem('UserType');
//const aiddIs     = localStorage.getItem('identification');




const getBossName = localStorage.getItem('bossName')//localStorage.setItem('bossName', boss.nome);



//          /////////////   Olho Do Menu  ///////////////        ///
const menuBotao      = document.getElementById('menuButton');
const olhoAberto     = document.getElementById('openLooped');
const olharCensura   = document.getElementById('eyedCensured');
const olhoAbrindo    = document.getElementById('eyedReopen');
const olhoDesaparece = document.getElementById('eyedDespawn');
const arrowBackMenu  = document.getElementById('backArrows');
const liveButton     = document.getElementById('liveBtn');
const scoreButton    = document.getElementById('scorBtn');
const passButton     = document.getElementById('passBtn');
const youtubeButton  = document.getElementById('ytBtn');
const twitterButton  = document.getElementById('twBtn');
const discordButton  = document.getElementById('dsBtn');
const aboutButton    = document.getElementById('abBtn');
const menuMapsGuide  = document.getElementById('menuMaps');
//Original Sources
var abertoLoopLink      = 'https://novaordemmundial.github.io/design/files/UI/Eye%20Menu%20Button%20Animated%202.webm';
var olharCensuraLink    = 'https://novaordemmundial.github.io/design/files/UI/Censure%20Eye.webm';
var abrirOlhoLink       = 'https://novaordemmundial.github.io/design/files/UI/Eye%20Reopen.webm';
var olhoDesapareceLink  = 'https://novaordemmundial.github.io/design/files/UI/Eye%20Despawn.webm';
olhoAberto.src     = abertoLoopLink;
olharCensura  .src = olharCensuraLink;
olhoAbrindo   .src = abrirOlhoLink;
olhoDesaparece.src = olhoDesapareceLink;



    ///////////////Funcionalidades Do Password/////////////////
const passwordBtn     = document.getElementById('passBtn');
const passBackScreen  = document.getElementById('passBackScreen');
const passScreen      = document.getElementById('passScreen');
const menusVenishTrap = document.getElementById('menusVenish');
const passBTNClose    = document.getElementById('cnlPass');
const passBTNClear    = document.getElementById('clrPass');
const passBTNConfirm  = document.getElementById('cfnPass');
const passScanCheck   = document.getElementById('passIndentify');
const statusCheck     = document.getElementById('checkStatus');
const passTextField   = document.querySelectorAll('.inpPass');

/////////////Uma pequena constante//////////////////////
const logCheck = document.getElementById('checkStatus');

/////////////{Item Selecionado}////////////
//>Constantes e criação das Janelas//
const win1            = document.createElement('DIV');  win1.setAttribute('id', 'warningMassage1');
const win2            = document.createElement('DIV');  win2.setAttribute('id', 'warningMassage2');//
const titleTextW1     = document.createElement('H1');   titleTextW1.innerHTML = '{ITEM}{COUNT}';
const imageThumb      = document.createElement('IMG');
const videoThumb      = document.createElement('VIDEO');
const sourceVideo     = document.createElement('SOURCE');
///WIN2 OPENSOURCE//

const titleText     = document.createElement('H1');
const subTitleTxT   = document.createElement('H2');
const descText      = document.createElement('H3');
const obsText       = document.createElement('H4');
const footerText    = document.createElement('H5');
const countText     = document.createElement('SPAN');
const confirmButton = document.createElement('BUTTON');   confirmButton.setAttribute('class', 'mButton');
const cancelButton  = document.createElement('BUTTON');   cancelButton.setAttribute('id', 'cancelClaim');   cancelButton.classList.add('class', 'bacsfx');
cancelButton.setAttribute('onclick', 'onItemViewerClose(), onMenusTabsClose()');
const sacrifyButton = document.createElement('BUTTON');   sacrifyButton.setAttribute('id', 'SacrificeALL'); sacrifyButton.classList.add('class', 'btnconf');
sacrifyButton.setAttribute('onmouseover', 'sacriOver()'); sacrifyButton.setAttribute('onmouseout', 'sacriOuter()');
const inputDescript = document.createElement('INPUT');  inputDescript.setAttribute('id', 'InputDesc');


//TargetsInputs
const itemIDTarget      = document.createElement('INPUT');  itemIDTarget    .setAttribute('disabled', 'true');
const itemNameTarget    = document.createElement('INPUT');  itemNameTarget  .setAttribute('disabled', 'true');
const itemCountTarget   = document.createElement('INPUT');  itemCountTarget .setAttribute('disabled', 'true');
const itemIconTarget    = document.createElement('INPUT');  itemIconTarget  .setAttribute('disabled', 'true');
const itemTypeTarget    = document.createElement('INPUT');  itemTypeTarget  .setAttribute('disabled', 'true');
const itemPathTarget    = document.createElement('INPUT');  itemPathTarget  .setAttribute('disabled', 'true');
const itemCountLocal    = document.createElement('INPUT');  itemCountLocal  .setAttribute('disabled', 'true')

const itemClaimed       = 1;
const itemSacrified     = 5;

//////////////////{GUIA CUSTUMIZAR}//////////////////
const customButton    = document.getElementById('custBtn');
const themeTitle      = document.getElementById('themeTitle');
const themeField      = document.getElementById('ThemeCategory');
const soundTitle      = document.getElementById('soundTitle');
const soundField      = document.getElementById('SoundCategory');
const secretTitle     = document.getElementById('secretTitle');
const secretField     = document.getElementById('SecretCategory');
const collectionTitle = document.getElementById('collTitle');
const collectionField = document.getElementById('CollectionsCategory');
const outraTitle      = document.getElementById('miscTitle');
const outraField      = document.getElementById('OutraCategory');



//Links Externos
//avisosSuperior
const linkTitle     = document.createElement('H1');
const linkSubTitle  = document.createElement('H2');
const linkAsk       = document.createElement('H5');
const linkImage     = document.createElement('IMG');
const linkVideo     = document.createElement('VIDEO');
const linkSim       = document.createElement('BUTTON'); linkSim.classList.add('class', 'btnconf');
const linkNao       = document.createElement('BUTTON'); linkNao.classList.add('class', 'bacsfx');

var socialLink = '';


linkVideo.muted = true;
linkVideo.loop = true;
linkVideo.autoplay = true;
linkVideo.load();




///////////////////////////////////////

///////Ao Resgatar/////////
const itemDescount  = document.createElement('INPUT');  itemDescount  .setAttribute('disabled', 'true');
const itemUseResult = document.createElement('INPUT');  itemUseResult .setAttribute('disabled', 'true');

///Sistema de Highlights///
const slidePanel = document.getElementById('slide');

////////////////////////////////////////////////////////////////////////

//  //////////Ativação na tela de password////////////  //
const symbolBox = document.createElement('SPAN');
