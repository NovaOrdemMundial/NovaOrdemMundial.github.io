//////////////////SECRETS OF ABOUT US///////////// < -- Arquivo De Senhas
const debugHave               = localStorage.getItem('debug');
const sbeekHave               = localStorage.getItem('sbeeker');
const wrongHave               = localStorage.getItem('wrongpass');//
const puresHave               = localStorage.getItem('pure');
const fightClassicSFX         = localStorage.getItem('fcgSFX');

///////Como o Usuario Deixou ao Iniciar///////// (Secret Status)
const debugStatus            = localStorage.getItem('debugOn');
const sbeekerStatus          = localStorage.getItem('sbeekerOn');
const senhaStatus            = localStorage.getItem('senhaOn');
const pureStatus             = localStorage.getItem('puresOn');
const fightClassicSFXStatus  = localStorage.getItem('fcgSFXOn');

////////////////////////////////////////////////////////////////////////////

const passwordCascad = [
  padrao = {
    possui:     'true',
    unlock_id:  -1,
    quantidade: 1,
    ativado:    'selectedItem',
    icon_url:   '',
    rarity:     'pinkUnlock',
    categoria:  'Theme',
    nome_item:  'Padrão',
    descrição:  'Reseta o tema para o Padrão',
    password:   'nopass',
  },
  debugMode = {
    possui:     debugHave,
    unlock_id:  0,
    quantidade: 1,
    ativado:    debugStatus,
    icon_url:   'https://media.discordapp.net/attachments/840407472144777228/994143612776484904/unknown.png',
    rarity:     'redUnlock',
    categoria:  'Secret',
    nome_item:  'Debug View',
    descrição:  'Visualizar site com muito mais informações',
    password:   'LOOKLIKEADEV',
    cssModify:  "'--debuggViewer', 'block'",
  },
  sbeeker = {
    possui:     sbeekHave,
    unlock_id:  1,
    quantidade: 1,
    ativado:    sbeekerStatus,
    icon_url:   'https://i.imgur.com/0vN6YKB.png',
    rarity:     'greyUnlock',
    categoria:  'Secret',
    nome_item:  'Sbeeker',
    descrição:  'Sbeeker Foi um Boss por ganhar o evento em live (Minecraft Speedrun Multiplayer)',
    password:   'YIN-YANGEWEEBO',
  },
  senhaerrada = {
    possui:     wrongHave,
    unlock_id:  2,
    quantidade: 1,
    ativado:    'UnselectedItem',
    icon_url:   'https://i.imgur.com/BFLIRFv.png',
    rarity:     'greyUnlock',
    categoria:  'Party',
    nome_item:  'Wrong Pass',
    descrição:  '¿Você Acertou a Senha Errada?',
    password:   'WRONGPASS',
  },
  classicFightSFX = {
    possui:       fightClassicSFX,
    unlock_id:    3,
    quantidade:   1,
    ativado:      fightClassicSFXStatus,
    icon_url:     'https://i.imgur.com/XWFDHQR.png',
    rarity:       'blueUnlock',
    categoria:    'SoundPack',
    nome_item:    'Arcade SFX',
    descrição:    'Pra quem gosta de uma nostalgia isso é otimo,  mudara os efeitos sonoros do site para efeitos sonoros de jogos de luta classicos.',
    password:     '6FICHASPORFAVOR',
    notification: 'https://novaordemmundial.github.io/audio/musics/CFGSFX/Neogeo%20boot%20screen%20Edited.mp3',
  },
  pure = {
    possui:     puresHave,
    unlock_id:  4,
    quantidade: 1,
    ativado:    pureStatus,
    icon_url:   'https://i.imgur.com/uQ7swKl.png',
    rarity:     'pinkUnlock',
    categoria:  'Theme',
    nome_item:  'Pureeee<x>h</x>',
    descrição:  'bem vindo ao meu jardim!',
    password:   'THORNSUNFLOWERS',
  },
];


///////////////////

///////Notifications//////////
const acgsfxNotify = new Audio(classicFightSFX.notification);
