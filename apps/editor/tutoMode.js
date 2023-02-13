///Hyper Warning
const hyperBox      = document.createElement('div');
const hyperTitle    = document.createElement('h1');
const hyperWarning  = document.createElement('p');
const hyperOBS      = document.createElement('h3');
const hyperButton   = document.createElement('button');

//Hyper Functions
function closeHyper(){
  document.documentElement.style.setProperty('--HyperOpacity', '0');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--hyperChange', 'none');
    fileSet.style.zIndex = '';
  },300)
}

//Info Mode Hyper Warning
function infoModeWarning(){
  fileSet.style.zIndex = '100';
  hyperhighlight.innerHTML = '';
  document.documentElement.style.setProperty('--hyperChange', 'block');
  document.documentElement.style.setProperty('--HHRight', '5vw');
  document.documentElement.style.setProperty('--HHBottom', '2vw');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--HyperOpacity', '1');
  },100);
  hyperTitle.innerHTML   = 'Modo Informativo';
  hyperWarning.innerHTML = 'O Modo informativo esta ativado, apartir de agora se o cursor estiver em cima de algo que necessita de informações ira aparecer uma caixa proximo ao cursor informando o que aquele destaque faz e até dando dicas de como usa-lo.'
  hyperOBS.innerHTML     = 'O Modo informativo pode ser ativado ou desativando quando quiser clicando no botão <b>"Modo Informativo"</b> no canto inferior direito da tela.';
  hyperButton.innerHTML  = 'Ok'
  hyperButton.addEventListener('click', closeHyper);
  hyperBox.append(hyperTitle, hyperWarning, hyperOBS, hyperButton);
  hyperhighlight.append(hyperBox);
}




///// Popup De Aviso e Tutorial
    //Ativador
var tutorialMode = localStorage.getItem('tuto');
if(tutorialMode === 'off'){
  TutoMode.removeAttribute('checked');
}else{
  TutoMode.setAttribute('checked', 'true');
  infoModeWarning();
}

bookName.addEventListener('click', ()=>{
  if(TutoMode.checked == true){
    localStorage.setItem('tuto', 'on');
  }else{
    localStorage.setItem('tuto', 'off');
  }
  tutotialTurnTo();
  setTimeout(()=>{
    if(localStorage.getItem('tuto') == 'on'){
      infoModeWarning();
    }
  }, 300);
});

    //Box Follow Cursor
const posXMid = Math.floor(window.innerWidth / 2);
const posYMid = Math.floor(window.innerHeight / 2);
const frees = (e) =>{
  const posY = Math.floor(e.clientY);
  const posX = Math.floor(e.clientX);
  const reposeInfoBox = () =>{
    if(posY > posYMid){
      const posYResist = Math.floor(posY / 3);
      helpPopup.style.top = `${posYResist}px`;
    }else{
      helpPopup.style.top = `${posY}px`;
    }
    if(posX > posXMid){
      const posXResist = Math.floor(posX / 1.43);
      helpPopup.style.left = `${posXResist}px`;
    }else{
      helpPopup.style.left= `${posX}px`;
    }
  }
  
  console.log(e.target.dataset.infos)
  if(e.target.dataset.infos === 'visibilidade'){
    reposeInfoBox();
    visibilityInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'logme'){
    reposeInfoBox();
    Identificação();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BGInfos'){
    reposeInfoBox();
    backgroundInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'PesoDeDados'){
    reposeInfoBox();
    DataWeight();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'SizeFont'){
    reposeInfoBox();
    sizingFont();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'ImageAdding'){
    reposeInfoBox();
    ImageInEditor();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'defaultFontChoose'){
    reposeInfoBox();
    deafultFont();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'MarkStyle'){
    reposeInfoBox();
    markPageStyle();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BookFileIs'){
    reposeInfoBox();
    fileNameIs();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'IndicePage'){
    reposeInfoBox();
    indiceStyle();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'NomeDaPagina'){
    reposeInfoBox();
    pageNameInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'SalvarNoDB'){
    reposeInfoBox();
    saveInDataBase();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BackupInPc'){
    reposeInfoBox();
    baixarBackup();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'PDFCreate'){
    reposeInfoBox();
    pintar();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'SalvarNoPc'){
    reposeInfoBox();
    salvarArquivo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'AbrirDoPc'){
    reposeInfoBox();
    abrirArquivo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BGTypeChoose'){
    reposeInfoBox();
    chooseColorType();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGSolid'){
    reposeInfoBox();
    corSolida();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGGradient'){
    reposeInfoBox();
    gradientColorInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGLinear'){
    reposeInfoBox();
    linearGradientInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGRadial'){
    reposeInfoBox();
    radialGradientInfo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGConic'){
    reposeInfoBox();
    conicGradientInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGGDeact'){
    reposeInfoBox();
    clearGradientInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGImage'){
    reposeInfoBox();
    imageBackgroundInfo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGImageLink'){
    reposeInfoBox();
    imageBackgroundLink();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BGIMGPosition'){
    reposeInfoBox();
    imageBackgroundPosition();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGIMGRepeat'){
    reposeInfoBox();
    imageBackgroundRepeat();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGIMGCode'){
    reposeInfoBox();
    imageBackgroundCode();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'BGGeneralStyle'){
    reposeInfoBox();
    imageBackgroundGeneral();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'AdicionandoCoresGradient'){
    reposeInfoBox();
    gradientColorAdd();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'GradientPosition'){
    reposeInfoBox();
    gradientPositionColor();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'GradientRotate'){
    reposeInfoBox();
    degradeRotação();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'previsualizador'){
    reposeInfoBox();
    backgroundPrevisualização();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'BackgroundTamanho'){
    reposeInfoBox();
    backgroundTamanhoInfo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'CancelarBackground'){
    reposeInfoBox();
    CancelBackgroundEditor();
    document.documentElement.style.setProperty('--NeedHelp', '1');
  }
  else if(e.target.dataset.infos === 'ConfirmarBackground'){
    reposeInfoBox();
    ConfirmBackgroundEditor();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'bookstatusinformation'){
    reposeInfoBox();
    BookStatusInfo();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'LogInInfo'){
    reposeInfoBox();
    LogMeInfos();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'ServerState'){
    reposeInfoBox();
    tipoDeServer();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else if(e.target.dataset.infos === 'Rockey'){
    reposeInfoBox();
    Rockey();
    document.documentElement.style.setProperty('--NeedHelp', '1');
    document.documentElement.style.setProperty('--FocusTutorial', '1');
  }
  else{
    document.documentElement.style.setProperty('--NeedHelp', '0');
    document.documentElement.style.setProperty('--FocusTutorial', '0');
  }
};
    

function tutotialTurnTo(){
  if(TutoMode.checked == true){
    document.addEventListener('mousemove', frees);
  }else{
    document.removeEventListener('mousemove', frees);
  }
}


tutotialTurnTo();

//
const TipoAviso = document.createElement('h1');
const SubTitulo = document.createElement('h2');
const Aviso     = document.createElement('p');


//Editor Infos
function ShortcutHelp(){
    helpPopup.innerHTML = '';
    TipoAviso.innerHTML = 'ATALHOS';
    Aviso.innerHTML     = '<i>- ctrl + S = Salvar No Banco De Dados. <br/><br/>- ctrl + Q = Exportar uma copia do arquivo para seu computador. <br/><br/>- ctrl + G = Imprimir ou exportar em PDF texto da pagina.</i>';
    helpPopup.append(TipoAviso, Aviso);
}

function Identificação(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Identificação';
  Aviso.innerHTML     = 'Você precisa se identificar para saber-mos quais historias serão exibidas...';
  helpPopup.append(TipoAviso, Aviso);
}

function visibilityInfos(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Visibilidade';
  Aviso.innerHTML     = `Caso tenha pedido uma pagina para as pessoas verem suas historias, essa opção definira se a historia é visivel ou não para quem acessar sua pagina.`;
  helpPopup.append(TipoAviso, Aviso);
}

function backgroundInfos(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Background';
  Aviso.innerHTML     = 'Ah uma variedade de background que podem ser usados no fundo da pagina, essa area fica o codigo que compoe o fundo. <br/>Você pode escolher uma cor solida ou clicar no botão ao lado para editar um background com mais detalhes usando nosso Editor de Backgrounds';
  helpPopup.append(TipoAviso, Aviso);
}

function DataWeight(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Esse é o peso que o arquivo do editor possui, caso esse peso chegue a 1.300.000 pode haver instabilidade ao salvar. <br/> O peso atual é de <x>${charLength.innerHTML}</x>b`;
  helpPopup.append(Aviso);
}

function sizingFont(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'O Tamanho da Fonte é baseada em vw (view width), preparada para se adaptar a largura da tela, então seus valores são baseados no tamanho da tela logo assim não sendo baseado em px (pixel).';
  helpPopup.append(Aviso);
}

function ImageInEditor(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Adicionando Imagens';
  Aviso.innerHTML     = 'É possivel adicionar imagens no editor, porém elas não são redimencionaveis, o ideal é ja colocar as imagens editadas no tamanho que você deseja. <br /> <i>- Ao adicionar imagem, sera pedido o link direto da imagem com final (jpg, jpeg, png, gif). <br/>- Você também pode arrastar a imagem direto do site para dentro do editor.</i>';
  helpPopup.append(TipoAviso, Aviso);
}

function deafultFont(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'A fonte padrão é a fonte selecionada para ser a fonte limpa, ou seja, se o texto não tiver nenhuma formatação a fonte padrão se mantera como fonte principal.';
  helpPopup.append(Aviso);
}

function indiceStyle(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Index Da Pagina';
  Aviso.innerHTML     = 'Index é basicamente a indice da pagina.<br/> Basicamente o numero da pagina em sua organização em ordem crescente (Indice 0 sera a primeira, indice 1 sera a proxima).';
  helpPopup.append(TipoAviso, Aviso);
}
function markPageStyle(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Cor Da Marcação';
  Aviso.innerHTML     = 'Paginas Marcadas sempre terão o fundo dourado, porém seus simbolos de marcação e cor na lista de paginas marcadas terão a cor que você selecionou para <b>Cor Da Marcação</b>.';
  helpPopup.append(TipoAviso, Aviso);
}
function fileNameIs(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Nome do Arquivo ⚠️';
  Aviso.innerHTML     = `O Nome do arquivo da historia é basicamente o nome que identifica essa historia no banco de dados, você percebera que mesmo alterando o nome da historia o nome de arquivo permanecera o mesmo, isso porque se mudar o editor não consiguira achar mais a historia. <br/>Se deseja mudar o nome de arquivo da historia recomendo que crie uma historia nova e copie o nome de arquivo da antiga para a historia nova.<br/> Arquivo atual:<i>${BookFile.value}</i>`;
  helpPopup.append(TipoAviso, Aviso);
}

function pageNameInfos(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Page Name';
  Aviso.innerHTML     = 'É importante salientar que ao mudar o nome da pagina você não estara mudando nem o nome de arquivo e nem a ordem que a pagina obedece, o nome da pagina é simplesmente estetico e informativo.';
  helpPopup.append(TipoAviso, Aviso);
}

function saveInDataBase(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Salvar ⚠️';
  Aviso.innerHTML     = 'Ao salvar esse arquivo usando o "ctrl + S" ou o botão de salvar você estara salvando o as mudanças no banco de dados, caso queira uma copia desse arquivo em seu computador use o atalho "ctrl + Q" para salvar uma copia HTML no seu computador ou o atalho "ctrl + G" para salvar o modo de impressão.<br/> - <i>Ao Salvar no computador o arquivo continuara editavel mas não sera possivel formatalo ainda, esse arquivo abrira normalmente com o seu navegador</i><br/> - <i>Caso queira usar o arquivo sem internet é recomendado baixar o .css e deixa-lo na mesma pasta onde esta salvo seu backup.</i> <br/><br/><b>ATALHO:</b> (ctrl + S)';
  helpPopup.append(TipoAviso, Aviso);
}

function baixarBackup(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Backup';
  Aviso.innerHTML     = 'Esse botão ira baixar o conteudo do editor em .html, e salvara em seu computador em uma pasta que vc escolher.<br/> O arquivo pode ser aberto em qualquer navegador, o arquivo também ainda pode ser editado porém não pode ser formatado.<br /> Para abrir esse arquivo offline é necessario baixar o .css do editor e esse arquivo deve ser colocado na mesma pasta onde o .html esta salvo.<br />Caso queira pegar algum conteudo do seu arquivo baixado e colocar de volta no editor basta abrir o arquivo que você baixou, copiar o que você quer colocar, e colar no editor online novamente. <br /><b>Tente sempre manter um backup salvo.</b> <br /><br /><b>ATALHO:</b> (ctrl + Q).';
  helpPopup.append(TipoAviso, Aviso);
}

function pintar(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Impressão/PDF';
  Aviso.innerHTML     = 'Abrira a janela de impressão do navegador, isso exportara o conteudo do editor de texto para impressão, la você podera salvar o arquivo em .PDF também. <br /> Isso podera ser usado como backup também. <br/><br/><b>ATALHO:</b> (ctrl + G).';
  helpPopup.append(TipoAviso, Aviso);
}

function salvarArquivo(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Salvar No PC';
  Aviso.innerHTML     = 'Essa funcionalidade ira criar um arquivo para ser baixado, o arquivo possui um formato proprio que tera todo o conteudo e formatação da sua pagina atual e podera ser aberto novamente clicando no botão/atalho "Abrir Do PC".<br/>Ao abrir o arquivo do PC o conteudo anterior da pagina sera substituido pelo conteudo novo.<br/><br/><b>Mantenha Sempre um Backup Salvo.</b><br/><br/><b>Atalho:</b> (ctrl + E)';
  helpPopup.append(TipoAviso, Aviso);
}

function abrirArquivo(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Abrir Do PC';
  Aviso.innerHTML     = 'Abrira o explorador de arquivos para que você possa escolher um arquivo .foly que é salvo em seu computador ao usar o botão/atalho "Salvar No PC".<br/><br/><b>ATALHO:</b> (ctrl + O)';
  helpPopup.append(TipoAviso, Aviso);
}

function tipoDeServer(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Tipo de Servidor';
  Aviso.innerHTML     = 'Esse servidor é <r>publico</r>, <i>isso significa que sabendo sua <b>identificação</b> qualquer um pode abrir e editar suas historias, enquanto usar essa versão certifique-se de usar uma <b>identificação</b> complexa.</i><br/><br /><i>A versão <r>publica</r> possui um banco de dados limitato, então em alguns momentos o editor pode estar indisponivel.</i><br/><br /> Caso queira um servidor particular basta ajudar na live <i>twitch.tv/RockeyDoggy</i> com um donate/pix/bits equivalente a 20R$ a cima, depois basta ir no nosso discord e pedir seu editor proprio para o @Rockey.';
  helpPopup.append(TipoAviso, Aviso);
}

function Rockey(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Criado Por:';
  Aviso.innerHTML     = 'Oi, eu sou o Rockey, esse projeto foi feito por mim e clicando no meu nick você sera encaminhado para minha <b>Twitch</b> la tera minhas lives e um botão chamado <b>"SOBRE"</b> onde tera meus contatos publicos.<br/> <i>Obrigado por usar esse projeto 😀</i>';
  helpPopup.append(TipoAviso, Aviso);
}



//Background Style Infos
function chooseColorType(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Tipos de Background';
  Aviso.innerHTML     = 'Escolha um dos fundos para a editar e adicionar ao fundo geral...';
  helpPopup.append(TipoAviso, Aviso);
}
function corSolida(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Selecione uma cor solida para adicionar ao fundo da historia.';
  helpPopup.append(Aviso);
}

function gradientColorInfos(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Selecione duas ou mais cores para um fundo degrade.';
  helpPopup.append(Aviso);
}

function imageBackgroundInfo(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Escolha de 1 a 3 padrões de imagem para compor o fundo da pagina.';
  helpPopup.append(Aviso);
}

function linearGradientInfos(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'As cores selecionadas seguirão uma posição linear, a 180 graus as cores seguirão de cima para baixo.';
  helpPopup.append(Aviso);
}

function radialGradientInfo(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Radial fara com que as cores sigam do meio para os cantos da pagina.';
  helpPopup.append(Aviso);
}

function conicGradientInfos(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Conico fara com que as cores seguirão uma rotação em cone do meio até o meio novamente.';
  helpPopup.append(Aviso);
}

function clearGradientInfos(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Isso desativara todo o sistema gradient.';
  helpPopup.append(Aviso);
}

function imageBackgroundLink(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Adicione um link de imagem (.jpeg, .jpg, .png, .gif), ela aparecera instantaneamente no fundo e abrira a opção para adicionar um segundo fundo.<br /> Você pode escolher a posição da imagem e como ela repetira.';
  helpPopup.append(Aviso);
}

function imageBackgroundPosition(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Mudara a posição da imagem de fundo para centralizar, fixar ao topo, ao fundo... <br/> Isso ajudara a posicionar melhor o fundo.';
  helpPopup.append(Aviso);
}

function imageBackgroundRepeat(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Ativa o metodo de repetição da imagem de fundo sendo "X" para as laterais e "Y" para altura, para ver melhor a repetição é recomendado que modifique o tamanho do fundo logo acima na opção "Tamanho".';
  helpPopup.append(Aviso);
}

function imageBackgroundCode(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Esse codigo é o codigo do fundo da imagem atual e é adicionado ao codigo geral com as outras 3 imagens.';
  helpPopup.append(Aviso);
}

function imageBackgroundGeneral(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'Esse é o codigo geral, o gradient, cor solida e imagem se juntam aqui para formar o fundo que você montou. <br/> Ao aplicar esse codigo sera adicionado ao editor.';
  helpPopup.append(Aviso);
}

function gradientColorAdd(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'O degrade só passara a funcionar apartir do momento que tiver mais de 1 cor.';
  helpPopup.append(Aviso);
}

function gradientPositionColor(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = 'A posição da cor do gradient deve ser feita de 0 a 100 de forma crescente: <b><br/>Primeira cor: 0 <br/>Segunda cor:  20 <br/> Terceira cor: 40<br/> quarta cor:   80<br/></b> <i>As ultimas cores devem ser sempre maiores que as primeiras cores ou do contrario a cor solidificara.</i>';
  helpPopup.append(Aviso);
}

function degradeRotação(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Rotação do degrade para rotacionar o posicionamento das cores, atualmente esta rotacionado a ${LinearRotate.value} graus`;
  helpPopup.append(Aviso);
}

function backgroundPrevisualização(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Essa é uma preview do fundo que você esta montando.`;
  helpPopup.append(Aviso);
}

function backgroundTamanhoInfo(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `O tamanho da imagem define a repetição ou preenchimento.<br/> ao usar recomendo definir o tipo de medida logo após o numero.<br/> Tipos de Medida: <br/>[cm | px | % | vw | vh | mm | pc | pt | in | em | rem | ch | vmax | vmin]<br/> - Exemplo: [20%], [220px], [20vw], [12cm] ou [8rem]. <br/> - Quando os campos "Largura" ou "Altura" estiverem vazios serão substituidos por "auto".`;
  helpPopup.append(Aviso);
}

function CancelBackgroundEditor(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Ao cancelar o background a janela sera fechada sem aplicar nada, porém quando voltar aqui estara tudo do jeito que deixou até que a pagina seja atualizada.`;
  helpPopup.append(Aviso);
}

function ConfirmBackgroundEditor(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Ao Confirmar o Background o fundo sera aplicado ao editor e podera ser salvo usando o atalho ou o botão de salvar; <br/> - <i>O Fundo salvo ira ser aplicado no fundo de uma nova pagina criada</i>. <br/> - <i>Ao atializar a pagina o editor de background sera resetado independente da pagina ativa, caso queira copiar o fundo de uma pagina basta copiar o codigo da pagina antiga e colar na pagina nova</i>.`;
  helpPopup.append(Aviso);
}

function BookStatusInfo(){
  helpPopup.innerHTML = '';
  Aviso.innerHTML     = `Isso indica se sua historiaf esta privado ou publico em sua pagina pessoal. <br/> Essa pagina esta: <b>${event.target.innerHTML}</b>`;
  helpPopup.append(Aviso);
}

function LogMeInfos(){
  helpPopup.innerHTML = '';
  TipoAviso.innerHTML = 'Mudar Identidade/Alter ego';
  Aviso.innerHTML     = `Um botão para você mudar seu alterego. <br/> - <i>Ao mudar de alterego mudara os livros escritos, pois essa é sua nova ou outra identificação como autor.</i>`;
  helpPopup.append(TipoAviso, Aviso);
}
