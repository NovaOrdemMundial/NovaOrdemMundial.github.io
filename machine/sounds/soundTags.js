////////////Sistemas De Som////////////////
const maxVolume       = document.getElementById('VolumeMax');
const audioVolume     = document.createElement('INPUT'); audioVolume.value = maxVolume.value;
const audioLimiter    = ('000'+audioVolume.value);
const volumeFilter    = '0.'+audioLimiter;
const hoverSFX        = new Audio(sfx.button_hover);   hoverSFX.volume = 0.3;
const clickSFX        = new Audio(sfx.button_click);   clickSFX.volume = 0.3;
const backSFX         = new Audio(sfx.button_back);
const closeSFX        = new Audio(sfx.button_close);
const confirmSFX      = new Audio(sfx.button_confirm);
const deniedSFX       = new Audio(sfx.button_deny);    deniedSFX.volume = 0.3;



        ///////  MUSICAS  //////
const runMusic      = new Audio(soundtracks.sacrifice_button);
const inpVolume     = document.getElementById('volumecount');
const musicVolume   = document.createElement('input'); musicVolume.value = 0;
runMusic.volume     = 0.300;
runMusic.loop = true;
