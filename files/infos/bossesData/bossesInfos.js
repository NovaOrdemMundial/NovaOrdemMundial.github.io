        //    ---Datas--    //--//
const bossInfos = [
  foolsInfos = {
    nome:       'Fools',
    nick:       'ManoFools',
    tipo:       'Administrador',
    doc:        'fools_infos',
    boss_link:  '#Fools',
    twitch_link:'https://www.twitch.tv/manofools',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b6809815-f7c4-4cc8-a958-27af48fc560e-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/cCzYcl8.png',
    classe:     'roxoLvl',
    id:         '19751j572p18010110',
    extra1:     '',
    status: {
      vida:         4444,
      resistencia:  1000,
      resiliencia:  500,
      força:        1000,
      foco:         61,
      agilidade:    4,
    },
    florais:  1,
    papercut: 1,
    index: 0,
  },
  juninhoInfos = {
    nome:       'Juninho',
    nick:       '7greque',
    tipo:       'BOSS',
    doc:        'juninho_infos',
    boss_link:  '#Junin',
    twitch_link:'https://www.twitch.tv/7greque',
    avatar_url: 'https://i.imgur.com/HNFcmhV.png',
    boss_banner:'https://i.imgur.com/UjzWIes.png',
    classe:     'roxoLvl',
    extra1: '',
    status: {
      vida:         1000,
      resistencia:  1000,
      resiliencia:  0,
      força:        1000,
      foco:         5,
      agilidade:    1,
    },
    florais:  1,
    papercut: 0,
    index: 1,
  },
  sirkingInfos = {
    nome:       'Sir King',
    nick:       'S1rKing_',
    tipo:       'BOSS',
    doc:        'king_infos',
    boss_link:  '#Kingo',
    twitch_link:'https://www.twitch.tv/s1rking_',
    avatar_url: 'https://i.imgur.com/2MK2dvP.png',
    boss_banner:'https://i.imgur.com/C8bdCDJ.png',
    classe:     'roxoLvl',
    id:         '15m872185021cm1018',
    extra1: '',
    status: {
      vida:         97,
      resistencia:  10,
      resiliencia:  10,
      força:        70,
      foco:         8,
      agilidade:    1,
    },
    florais:  1,
    papercut: 0,
    index: 2,
  },
  pandasInfos = {
    nome:       'Pandas',
    nick:       'Pandas_S2',
    tipo:       'BOSS',
    doc:        'pandas_infos',
    boss_link:  '#Pandas',
    twitch_link:'https://www.twitch.tv/Pandas_S2',
    avatar_url: 'https://i.imgur.com/s5tL7wT.png',
    boss_banner:'https://i.imgur.com/kLIT76F.png',
    classe:     'roxoLvl',
    id:         '1945u841n210145801',
    extra1: '',
    status: {
      vida:         100,
      resistencia:  100,
      resiliencia:  0,
      força:        100,
      foco:         7,
      agilidade:    1,
    },
    florais:  1,
    papercut: 0,
    index: 3,
  },
  guiInfos = {
    nome:       'Gui',
    nick:       'godiira',
    tipo:       'BOSS',
    doc:        'gui_infos',
    boss_link:  '#Gui',
    twitch_link:'https://www.twitch.tv/godiira',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b8b99f58-bf8c-48e1-a0c8-6f92e8918778-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/zag6JTt.png',
    classe:     'roxoLvl',
    extra1: '',
    id:         '148684155548e41a15',
    status: {
      vida:         100,
      resistencia:  100,
      resiliencia:  0,
      força:        100,
      foco:         7,
      agilidade:    1,
    },
    florais:  1,
    papercut: 0,
    index: 4,
  },
  eddyInfos = {
    nome:       'Edney',
    nick:       'edney_de_pijama',
    tipo:       'BOSS',
    doc:        'edney_infos',
    boss_link:  '#Eddy',
    twitch_link:'https://www.twitch.tv/edney_de_pijama',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d42263cc-4f32-4af5-a352-a5d7bcb3c345-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/nnOBkyU.png',
    classe:     'roxoLvl',
    extra1: '',
    id:         '1128486t4120186e10',
    status: {
      vida:         9454,
      resistencia:  2481,
      resiliencia:  741,
      força:        5000,
      foco:         90, //90
      agilidade:    3,
    },
    florais:  0,
    papercut: 1,
    index: 5,
  },
  kingaInfos = {
    nome:       'Kinga',
    nick:       'Kinguinha',
    tipo:       'BOSS',
    doc:        'kinga_infos',
    boss_link:  '#Kinga',
    twitch_link:'https://www.twitch.tv/Kinguinha',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7d144b6c-ad05-41f4-b17c-d8964e2321e9-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/IxsFdSd.png',
    classe:     'roxoLvl',
    extra1:     '',
    id:         '115u138x7845y21301',
    status: {
      vida:         228,
      resistencia:  20,
      resiliencia:  8,
      força:        57,
      foco:         6,
      agilidade:    2,
    },
    florais:  0,
    papercut: 1,
    index: 6,
  },
  whityInfos = {
    nome:       'Whity',
    nick:       'WhityKun_',
    tipo:       'BOSS',
    doc:        'whity_infos',
    boss_link:  '#Whity',
    twitch_link:'https://www.twitch.tv/WhityKun_',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4841bc01-4b3b-4f33-993a-79307daa3585-profile_image-300x300.jpeg',
    boss_banner:'https://i.imgur.com/0XlEY54.png',
    classe:     'roxoLvl',
    extra1: '',
    id:         '15w15j68k186545151',
    status: {
      vida:         9041,
      resistencia:  3923,
      resiliencia:  0,
      força:        6454,
      foco:         1,
      agilidade:    2,
    },
    florais:  0,
    papercut: 0,
    index: 7,
  },
  springInfos = {
    nome:       'Spring',
    nick:       'ospring',
    tipo:       'BOSS',
    doc:        'spring_infos',
    boss_link:  '#Spring',
    twitch_link:'https://www.twitch.tv/ospring',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c311e9d4-9c76-4296-98fa-ce64652bc397-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/VGTUOe5.png',
    classe:     'roxoLvl',
    extra1: '',
    id:         '1dx86482hj1535aa48',
    status: {
      vida:         4210,
      resistencia:  1000,
      resiliencia:  0,
      força:        1000,
      foco:         5,
      agilidade:    1,
    },
    florais:  0,
    papercut: 0,
    index: 8,
  },
  snekerInfos = {
    nome:       'Sneker',
    nick:       'SnekerRoyal',
    tipo:       'BOSS',
    doc:        'sneker_infos',
    boss_link:  '#Sneker',
    twitch_link:'https://www.twitch.tv/snekerroyal',
    avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9e7914f9-2b0a-447d-a544-b8ef9584962f-profile_image-300x300.png',
    boss_banner:'https://i.imgur.com/QdpClyp.png',
    classe:     'roxoLvl',
    extra1: '',
    id:         '1p8q90018368158122',
    status: {
      vida:         141,
      resistencia:  10,
      resiliencia:  0,
      força:        20,
      foco:         1,
      agilidade:    1,
    },
    florais:  0,
    papercut: 0,
    index: 9,
  },
]
const extraBossInfos = [
  sbeekerInfos = {
    nome:       'Sbeeker',
    nick:       'Sbevee_/snekerroyal',
    tipo:       'BOSS',
    doc:        'sbeeker_infos',
    boss_link:  '#Sbeeker',
    twitch_link:'https://www.twitch.tv/snekerroyal',
    avatar_url: 'https://i.imgur.com/0vN6YKB.png',
    boss_banner:'https://i.imgur.com/fKw0EZY.png',
    classe:     'amareloLvl',
    extra1: '',
    status: {
      vida:         0,
      resistencia:  50,
      resiliencia:  0,
      força:        23,
      foco:         0,
      agilidade:    0,
    },
    florais:  1,
    papercut: 0,
    index: 0,
  },
  steveInfos = {
    nome:       'Steve',
    nick:       'sbevee_',
    tipo:       'Administrador',
    doc:        'steve_infos',
    boss_link:  '#Steve',
    twitch_link:'https://www.twitch.tv/sbevee_',
    avatar_url: 'https://i.imgur.com/bOYR5lr.png',
    boss_banner:'https://i.imgur.com/jpqYsWu.png',
    classe:     'greyLvl',
    extra1:     '',
    id:         '184j8423c31b818436',
    status: {
      vida:         4,
      resistencia:  3,
      resiliencia:  0,
      força:        3,
      foco:         0,
      agilidade:    0,
    },
    florais:  1,
    papercut: 0,
    index: 1,
  },
  rafaInfos = {
    nome:       'Rafa',
    nick:       'RafaaSmile',
    tipo:       'Visitante',
    doc:        'rafa_infos',
    boss_link:  '#Rafa',
    twitch_link:'https://www.twitch.tv/RafaaSmile',
    avatar_url: 'https://i.imgur.com/hwy02Dd.png',
    boss_banner:'https://i.imgur.com/kBZCmgi.png',
    classe:     'greyLvl',
    extra1: '',
    status: {
      vida:         0,
      resistencia:  0,
      resiliencia:  0,
      força:        0,
      foco:         0,
      agilidade:    0,
    },
    florais:  0,
    papercut: 0,
    index: 2,
  },
  draxyInfos = {
    nome:       'Mandrax',
    nick:       'Draaaxxy',
    tipo:       'Visitante',
    doc:        'mandrax_infos',
    boss_link:  '#Mandrax',
    twitch_link:'https://www.twitch.tv/Draaaxxy',
    avatar_url: 'https://i.imgur.com/vgBmKZk.png',
    boss_banner:'https://i.imgur.com/aIIr053.png',
    classe:     'greyLvl',
    extra1: '',
    status: {
      vida:         5,
      resistencia:  5,
      resiliencia:  0,
      força:        5,
      foco:         0,
      agilidade:    0,
    },
    florais:  0,
    papercut: 0,
    index: 3,
  },
  girlInfos = {
    nome:       'Girl',
    nick:       'little_bunbunny',
    tipo:       'Visitante',
    doc:        'girl_infos',
    boss_link:  '#Girl',
    twitch_link:'https://www.twitch.tv/little_bunbunny',
    avatar_url: 'https://i.imgur.com/xr4Jaeq.png',
    boss_banner:'https://i.imgur.com/nWLUjQw.png',
    classe:     'greyLvl',
    extra1: '',
    status: {
      vida:         446,
      resistencia:  10,
      resiliencia:  0,
      força:        10,
      foco:         0,
      agilidade:    0,
    },
    florais:  0,
    papercut: 0,
    index: 4,
  },
  pauloInfos = {
    nome:       'Paulo',
    nick:       'paulohenrique82_',
    tipo:       'Visitante',
    doc:        'paulo_infos',
    boss_link:  '#Paulus',
    twitch_link:'https://www.twitch.tv/paulohenrique82_',
    avatar_url: 'https://i.imgur.com/Wi9FAhU.png',
    boss_banner:'https://i.imgur.com/8Bo38bz.png',
    classe:     'greyLvl',
    extra1: '',
    status: {
      vida:         524,
      resistencia:  100,
      resiliencia:  0,
      força:        100,
      foco:         0,
      agilidade:    0,
    },
    florais:  0,
    papercut: 0,
    index: 6,
  },
]
