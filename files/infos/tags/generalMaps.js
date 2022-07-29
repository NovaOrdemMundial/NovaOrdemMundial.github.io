

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
