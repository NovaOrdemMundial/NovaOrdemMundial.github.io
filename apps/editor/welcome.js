
          ///Animação de Boas Vindas///
var welcome       = document.createElement('video');
var closeWel      = document.createElement('video');
welcome.src       = 'https://rockeydoggy.github.io/media/animated/Eye%20Open.webm'
closeWel.src      = 'https://rockeydoggy.github.io/media/animated/Eye%20Closing.webm';
welcome.controls  = false;
closeWel.controls = false;
welcome.muted     = true;
closeWel.muted    = true;
closeWel.style.opacity = '0';
welcome.style.opacity = '0';
welcomeEye.append(welcome, closeWel);

welcome.addEventListener('canplaythrough', onSee);
mensagemAleatoria();


const corpos = document.querySelector('body');
corpos.style.overflow = 'hidden';

function onSee(){
  welcome.style.opacity = '1';
  welcome.play();
  closeWel.play();
  backtest.style.background = '#656099';
  iris.style.opacity        = '1';
  // olhaAqui();
  setTimeout(()=>{
    outFocus.style.opacity = '1';
  }, 5000);
  
  //AutoEnd
  setTimeout(()=>{
    closeStartScreen();
  }, 11000);
}
window.addEventListener('mousemove', olhaLa);
function olhaLa(e){
  const olharProsLados = -(window.innerWidth)  /15 + e.pageX / 7;
  const olharPraCima   = -(window.innerHeight) /15 + e.pageY / 7;
  iris.style.transform = `translateY(${olharPraCima}px) translateX(${olharProsLados}px)`;
  console.log(e.pageY);
}

function welcomeAnim(){
  const salute = document.querySelector('#WelcomeContent h2');
  const hiMSG  = document.querySelector('#WelcomeContent h3');
  salute.style.opacity    = '1';
  PoweredBy.style.opacity = '1';
  if(localStorage.getItem('Usuario') == null || localStorage.getItem('Usuario') == ''){
	  document.documentElement.style.setProperty('--BemVindo', `"Olá! Bem-Vindo(a) Ao Editor De Historias"`);
  }else{
	  document.documentElement.style.setProperty('--BemVindo', `"Olá ${localStorage.getItem('Usuario')}! Bem-Vindo De volta!"`);
  }
}
welcomeAnim();
function mensagemAleatoria(){

  const RandomMessages = [
    'E se explodirmos mais um universo?', 
    'Não tenha medo de explorar detalhes de uma ideia', 
    'As vezes começa bobo e termina caotico', 
    'No final sempre tem um romance', 
    '"Eu Penso Logo Existe"', 
    'Tente uma musica para se inspirar', 
    'Na falta de ideias, exagere historias bobas da vida real',
    'Começar uma historia pelo fim pode não ser emocionante de fazer, mas é emocionante de se ler',
    'O importante é começar'
  ];
  
  const messageLocale = document.querySelector('#WelcomeContent h3');
  const messageIs = RandomMessages[Math.floor(Math.random() * RandomMessages.length)];
  messageLocale.innerHTML = messageIs;
  messageLocale.style.opacity = '1';
}

const goToMee = document.querySelector('#PoweredBy h2 b');
goToMee.addEventListener('click', ()=>{
  window.open('https://twitch.tv/rockeydoggy', '_blank');
});

document.addEventListener('keydown', closeStartScreen);
document.addEventListener('mousedown', closeStartScreen);

function closeStartScreen(){
  const salute = document.querySelector('#WelcomeContent h2');
  const hiMSG  = document.querySelector('#WelcomeContent h3');
  hiMSG.style.opacity     = '0'; 
  salute.style.opacity    = '0';
  outFocus.style.opacity  = '0';
  document.removeEventListener('keydown', closeStartScreen);
  document.removeEventListener('mousedown', closeStartScreen);
  closeWel.currentTime = 0;
  closeWel.style.opacity = '1';
  setTimeout(()=>{
    welcome.style.opacity = '0';
    closeWel.play();
  }, 100);
  closeWel.addEventListener('ended', ()=>{
    setTimeout(()=>{
      welcomeEye.style.opacity = '0';
      Welcome.style.opacity = '0';
      welcome.removeEventListener('canplaythrough', onSee);
      window.removeEventListener('mousemove', olhaLa);
      setTimeout(()=>{
        welcomeEye.style.display = 'none';
        Welcome.style.display = 'none';
        outFocus.style.display = 'none';
        corpos.style.overflow = 'auto';
      }, 500)
    }, 500)
    setTimeout(()=>{
      PoweredBy.style.opacity = '0';
      setTimeout(()=>{
        PoweredBy.style.display = 'none';
      }, 3000)
    },10000)
  });
}
