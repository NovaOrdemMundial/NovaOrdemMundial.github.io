const titles    = / *\#[^#]*\)*/;
const subTitles = /##[^]*/;

const fontSel = document.querySelectorAll('.defFont');

var OldBackground = '';


var insideBook   = 'fake';
//Criar um PDF

document.addEventListener('keydown', function(e){
  
  if (e.ctrlKey) {
  }
  if(e.ctrlKey && e.key === 's' && e.target.tagName === 'DIV' ||e.ctrlKey && e.key === 's' && e.target.tagName === 'DIV'){
    if(insideBook === 'true'){
      saveAllFile();
    }
  }
  if(e.ctrlKey && e.key === 's'){
    
    if(insideBook === 'true'){
      e.preventDefault();
      saveAllFile();
    }
  }
  if(e.ctrlKey && e.key === 'e'){
    if(insideBook === 'true'){
      e.preventDefault();
      saveFileOnPC();
    }
  }
  if(e.ctrlKey && e.key === 'o'){
    if(insideBook === 'true'){
      e.preventDefault();
      oop.click();
    }
  }
  
  if(e.ctrlKey && e.key === 'g'){
    e.preventDefault();
    SavePDF();
  }
  
  /////Salvar um HTML no PC (Codigo Criado por uma IA e Modificado)/////
  if(e.ctrlKey && e.key === 'q'){
    exportInFile();
  }
  //////////////////////Fim dos codigos da IA/////////////////////////
  
  
  
  //Previnir que feche sem salvar
  if(e.ctrlKey && e.key === 'w'){
    e.preventDefault();
    saveAllFile();
    window.onbeforeunload = confirmExit;
    function confirmExit() {
      if(editor.innerHTML == historica){
        console.log('Não precisa Salvar');
      }else{
        return 'Algumas Alterações foram feitas e não foram salvas, Quer Fechar mesmo assim?';
      }
    }
  }
});

const exportInFile = ()=>{
  // Crie uma função que cria um elemento de link e o baixa
  if(insideBook === 'true'){
    function download(tudo, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([tudo], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    // Obtenha o conteúdo da div
    var content = document.querySelector("#editor").innerHTML;
    var tudo    = `<head><title>${PageName.value}</title> <link rel="stylesheet" href="https://rockeydoggy.github.io/css/editor.css"><link rel="stylesheet" href="../../editor/editor.css"></head> <body><div id="editor" contenteditable style="${editor.getAttribute('style')}">${content}</div></body>`;
    // Baixe o conteúdo como um arquivo chamado "conteúdo.html"
    download(tudo, `${bookPages.innerHTML}.html`, "text/html");
  }
}

const saveFileOnPC = ()=>{
  // Crie uma função que cria um elemento de link e o baixa
  if(insideBook === 'true'){
    function download(tudo, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([tudo], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    // Obtenha o conteúdo da div
    var content = document.querySelector("#editor").innerHTML;
    var tudo    = content;
    // Baixe o conteúdo como um arquivo chamado "conteúdo.html"
    download(tudo, `${bookPages.innerHTML}.foly`, "text/html");
  }
}

function openHistory(){
  const openFile = oop.files[0];
  const leitor   = new FileReader();
  leitor.addEventListener('load', ()=>{
    editor.innerHTML = leitor.result;
  });
  leitor.readAsText(openFile);
}

openOnPc.addEventListener('click', ()=>{
  oop.value = '';
});
oop.addEventListener('change', ()=>{
  openHistory();
});

downloadFile.addEventListener('click', ()=>{
  exportInFile();
});
printThis.addEventListener('click', ()=>{
  SavePDF();
});
saveOnPc.addEventListener('click', ()=>{
  saveFileOnPC();
});
openOnPc.addEventListener('click', ()=>{
  oop.click();
});

const loggedHas = localStorage.getItem('Usuario');
const Logged    = localStorage.getItem('TryLoggin');
//Load HaS
User.value = loggedHas;
insertName.value = loggedHas;
UserInTitle.innerHTML = loggedHas;
quem.value            = loggedHas;
LogInputReact();
PageIndex = localStorage.getItem('Ultima_Pagina');

//Coletar Informações
const bookAuthor      = document.createElement('p'); bookAuthor.innerHTML     = loggedHas;
const bookFileName    = document.createElement('p'); bookFileName.innerHTML   = '';
const bookPagesPatch  = document.createElement('p'); bookPagesPatch.innerHTML = '';
const bookPages       = document.createElement('p'); bookPages.innerHTML      = '';
const booksHaveCount  = document.createElement('p'); booksHaveCount.innerHTML = 0;

//Debugg de Criação
const bookTitle       = document.createElement('input'); bookTitle.value          = '';
const bookCover       = document.createElement('input'); bookCover.value          = '';
const bookDescrição   = document.createElement('input'); bookDescrição.value      = '';
const bookDedicatoria = document.createElement('input'); bookDedicatoria.value    = '';
const bookObservação  = document.createElement('input'); bookObservação.value     = '';
const bookNumero      = document.createElement('input'); bookNumero.value         = '';
const bookPageIndexes = document.createElement('input'); bookPageIndexes.value    = '';
const bookCor         = document.createElement('input'); bookCor.value            = '';
const bookStatus      = document.createElement('input'); bookStatus.value         = '';
const bookArquivo     = document.createElement('input'); bookArquivo.value        = '';
const pagesIndexMax   = document.createElement('input'); pagesIndexMax.value      = '';
const createNewPage   = document.createElement('button');createNewPage.innerHTML  = 'N';
const bookPageColor   = document.createElement('input'); bookPageColor.value      = '';
const getIndex        = document.createElement('input'); getIndex.value = '';
const pageIndexing    = document.createElement('input'); pageIndexing.value = PageIndex;
createNewPage.setAttribute('id', 'CreatePageButton'); createNewPage.title = 'Criar Nova Pagina...';
  
//Conteudo de avisos
const warnTitle = document.createElement('H1');
const warnText  = document.createElement('H2');
const warnLink  = document.createElement('lk');

createNewPage.addEventListener('click', ()=>{ //Criar Pagina
  
  if(editor.innerHTML == historica){
    console.log('Não precisa Salvar');
    const createAs        = Math.floor(parseInt(pagesIndexMax.value));
    const CreatedName     = `Pagina ${createAs}`;
    bookPages.innerHTML   = CreatedName;
    PageFile.innerHTML    = CreatedName;
    PageName.value        = `Pagina ${createAs}`;
    // PageFont.value     = pageNow.fonte;
    editor.innerHTML      = '';
    
    //Criar uma cor aleatoria
    const randomColor  = Math.floor(Math.random()*16777215).toString(16);
    const colorNumberIs= `#${randomColor}`;
    const hexColorCode = colorNumberIs.padEnd(7, "0");
    
    //File
    const SaveNew  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
    SaveNew.set({
      nome:     PageName.value,
      fonte:    PageFont.value,
      fundo:    BackgroundPage.value,
      historia: '<h2>Nova Pagina...</h2>',
      numero:   createAs,
      pagina:   PageFile.innerHTML,
      cor:      hexColorCode,
    });
    
    // NextButton.removeEventListener('click', goNextPage);
    // PrevButton.removeEventListener('click', goPreviewPage);
    
    pageIndexing.value = Math.floor(parseInt(PageIndex) + 1);
    setTimeout(()=>{
      nextPageRead();
    }, 500);
    
  }else{
    youNeedSave();
    saveAllFile();
  }
  
});

//New Page in Page
const newPageButton = document.createElement('button');
newPageButton.innerHTML = 'NOVA PAGINA';
newPageButton.classList.add('transBtn');
userInfos.append(newPageButton);
var pagesHave;

newPageButton.addEventListener('click', ()=>{
  if(editor.innerHTML == historica){
    const CreatedName     = `Pagina ${pagesHave}`;
    bookPages.innerHTML   = CreatedName;
    PageFile.innerHTML    = CreatedName;
    PageName.value        = `Pagina ${pagesHave}`;
    // PageFont.value     = pageNow.fonte;
    editor.innerHTML      = '';
    
    //Criar uma cor aleatoria
    const randomColor  = Math.floor(Math.random()*16777215).toString(16);
    const colorNumberIs= `#${randomColor}`;
    const hexColorCode = colorNumberIs.padEnd(7, "0");
    
    //File
    const SaveNew  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
    SaveNew.set({
      nome:     PageName.value,
      fonte:    PageFont.value,
      fundo:    BackgroundPage.value,
      historia: '<h2>Nova Pagina...</h2>',
      numero:   pagesHave,
      pagina:   PageFile.innerHTML,
      cor:      hexColorCode,
    });
    
    // NextButton.removeEventListener('click', goNextPage);
    // PrevButton.removeEventListener('click', goPreviewPage);
    
    pageIndexing.value = pagesHave;
    setTimeout(()=>{
      nextPageRead();
    }, 500);
    
  }else{
    youNeedSave();
    saveAllFile();
  }
});

////////////////////////////////////////////
imageSend.addEventListener('click', () =>{
  const urlimg = document.getElementById('ImgSource');
  const imgLink= prompt("Link Da Imagem");
  document.execCommand("insertImage", "0", imgLink);//
});

FontSize.addEventListener('click', () =>{
  fontList.style.maxHeight = "0vw";
  if(sizeOp.style.maxHeight  == 0 || sizeOp.style.maxHeight == '0vw'){
    sizeOp.style.maxHeight = '80vh';
  }else{
    sizeOp.style.maxHeight = '0vw';
  }
})

sizeOp.addEventListener('click', () =>{
    sizeOp.style.maxHeight = '0vw';
})

TitleBtn.addEventListener('click', ()=>{
  sizeOp.style.maxHeight = '0vw';
  if(fontList.style.maxHeight == 0 || fontList.style.maxHeight == "0vw"){
    fontList.style.maxHeight = "20vw";
  }else{
    fontList.style.maxHeight = "0vw";
  }
})

//Font Formatting
fontList.addEventListener('click', ()=>{
  fontList.style.maxHeight = "0vw";
  const fontNum = event.target;
  if(fontNum.value == '1'){
     document.documentElement.style.setProperty('--FileFont', 'Helvetica');
  }
  else if(fontNum.value == '2'){
     document.documentElement.style.setProperty('--FileFont', 'Verdana');
  }
  else if(fontNum.value == '3'){
     document.documentElement.style.setProperty('--FileFont', 'Trebuchet MS');
  }
  else if(fontNum.value == '4'){
     document.documentElement.style.setProperty('--FileFont', 'Agency FB');
  }
  else if(fontNum.value == '5'){
     document.documentElement.style.setProperty('--FileFont', 'Calibri');
  }
  else if(fontNum.value == '6'){
     document.documentElement.style.setProperty('--FileFont', 'Time New Roman');
  }
  else if(fontNum.value == '7'){
     document.documentElement.style.setProperty('--FileFont', 'Arial');
  }
});

editor.addEventListener('keyup', ()=>{
  charLength.innerHTML = editor.innerHTML.length;
  if(editor.innerHTML.length > 1000000){
    charLength.style.setProperty("--CharCountColor", "#F00");
    charLength.style.setProperty("--CharCountLight", "0 0 0.6vw #F00");
    charLength.title = 'Apartir de 1.000.000 (1 Milhão), algumas informações podem não ser salvas corretamente';
  }else{
    charLength.style.setProperty("--CharCountColor", "#333");
    charLength.style.setProperty("--CharCountLight", "0 0 1vw #000");
    charLength.title = 'Quantidade de Caracteres no Documento';
  }
})

//Sistema De Cores
if(localStorage.getItem('colorSave') !== null){
  const colorStory = localStorage.getItem('colorSave');
  UsedColor = JSON.parse(colorStory);
}else{
  var UsedColor = [];
}

loadColors();

//Formatação de cor
TextColor.addEventListener('focusout', ()=>{
  
  const colorValue = TextColor.value;
  const newColors = {hex: colorValue};
  UsedColor.push(newColors);
  if(UsedColor.length > 17){
    UsedColor.splice(0,1);
  };
  
  localStorage.setItem('colorSave', JSON.stringify(UsedColor));
  loadColors();
  
  document.execCommand("foreColor", false, TextColor.value);
  // var fontElements = document.getElementsByTagName("font");
  // for (var b = 0, len = fontElements.length; b < len; ++b) {
  //   if(fontElements[b].size == 2) {
  //     fontElements[b].removeAttribute("size");
  //     fontElements[b].style.color = colorValue;
  //   }
  // }
  
});

//Editor de Cor
TextColor.addEventListener('input', ()=>{
  document.execCommand("foreColor", false, TextColor.value);
  //document.execCommand('fontSize',false, 2);
  //document.execCommand("foreColor", false, TextColor.value);
  //var fontElements = document.getElementsByTagName("font");
  //for (var b = 0, len = fontElements.length; b < len; ++b) {
  //  if(fontElements[b].size == 2) {
  //    fontElements[b].removeAttribute("size");
  //    fontElements[b].style.color = TextColor.value;
  //  }
  //}
});

TextColor.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--TextHighlightedColor', 'none');
  document.documentElement.style.setProperty('--TextHighlightedBackground', '#0002');
});

SavedColors.addEventListener('click', ()=>{
  if(ListOfColor.style.maxHeight == '9vw'){
    ListOfColor.removeAttribute('style');
    document.documentElement.style.setProperty('--TextHighlightedColor', '#AAA');
    document.documentElement.style.setProperty('--TextHighlightedBackground', '#111');
  }else{
    ListOfColor.style.maxHeight = '9vw';
    ListOfColor.style.border = 'solid 0.25vw #555';
    document.documentElement.style.setProperty('--TextHighlightedColor', 'none');
    document.documentElement.style.setProperty('--TextHighlightedBackground', '#0002');
  }
});

//Carregar Cores ja usadas

function loadColors(){
  const colorReset = document.createElement('button');
  colorReset.title = 'Remover Cores';
  colorReset.addEventListener('click', ()=>{
    TextColor.value = "#10101005";
    UsedColor = [];
    loadColors();
  });
  
  ListOfColor.innerHTML = '';
  ListOfColor.append(colorReset);
  
  UsedColor.slice().reverse().forEach((cores, index)=>{
    const colorBlock = document.createElement('button');
    colorBlock.setAttribute('style', `background:${cores.hex};`);
    colorBlock.title = cores.hex;//teste
    ListOfColor.append(colorBlock);
    colorBlock.addEventListener('click', ()=>{
      document.execCommand("foreColor", false, cores.hex);
      TextColor.value = cores.hex;
    });
  });
  
}

//Remover Historico de cores


//Fechar Abas
editor.addEventListener('click', ()=>{
  ListOfColor.removeAttribute('style');
  fontList.removeAttribute('style');
  sizeOp.removeAttribute('style');
  document.documentElement.style.setProperty('--TextHighlightedColor', '#AAA');
  document.documentElement.style.setProperty('--TextHighlightedBackground', '#111');
  
  //Detect font size
  const selection = window.getSelection();
  const winSize   = window.innerWidth;
  if (selection) { 
    const size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size');
    const aaa = parseFloat(size).toPrecision(3) * 100 / winSize;
    const moreAaa = aaa * 6;
    const fixNumb = moreAaa.toFixed(1);
    if(fixNumb.endsWith(".0")){
      FontSize.innerHTML = parseFloat(fixNumb);
    }else{
      FontSize.innerHTML = parseFloat(moreAaa).toPrecision(4);
    }
  }
});

//Arquivos
saveFile.addEventListener('click', ()=>{
  saveAllFile();
});

        // Login Writter //
//Active log
ItsMe.addEventListener('click', ()=>{
  LogInputReact();
  loginScreen.style.setProperty('--LogView', 'flex');
  setTimeout(()=>{
    loginScreen.style.setProperty('--LogStyle', '1');
  }, 200)
})

//Confirm Log
logIn.addEventListener('click', ()=>{
  closeLogginScreen();
  localStorage.setItem('Usuario', insertName.value);
  localStorage.setItem('TryLoggin', 'Yes');
  booksHave.innerHTML = '';
  whenLoggin();
  loadBooks();
})

resetIn.addEventListener('click', ()=>{
  const loggedHasUpdated = localStorage.getItem('Usuario');
  closeLogginScreen();
  insertName.value = loggedHasUpdated;
});
//Text Functions
insertName.addEventListener('input', ()=>{
  if(insertName.value == ''|| insertName.value == null || insertName.value == undefined){
    logIn.innerHTML = '?';
  }else if(insertName.value == 'Quem Sou Eu?' || insertName.value == 'Quem é Você?' || insertName.value == 'Quem?' || insertName.value == 'Quem Sou?' || insertName.value == 'Perguntou?'){
    logIn.innerHTML = '?';
  }
  else{
    logIn.innerHTML = 'Confirmar';
  }
});

insertName.addEventListener('keyup', ()=>{
  if(event.keyCode == 13){
    closeLogginScreen();
    localStorage.setItem('Usuario', insertName.value);
    localStorage.setItem('TryLoggin', 'Yes');
    booksHave.innerHTML = '';
    whenLoggin();
    loadBooks();
  }
})

//Criar uma Historia
addBook.addEventListener('click', ()=>{
  
})



function LogInputReact(){
  if(insertName.value == ''|| insertName.value == null || insertName.value == undefined){
    logIn.innerHTML = '?';
  }else if(insertName.value == 'Quem Sou Eu?' || insertName.value == 'Quem é Você?' || insertName.value == 'Quem?' || insertName.value == 'Quem Sou?' || insertName.value == 'Perguntou?'){
    logIn.innerHTML = '?';
  }
  else{
    logIn.innerHTML = 'Confirmar';
  }
  
  if(Logged == "Yes"){
    loginScreen.style.setProperty('--LogView', 'none');
    loginScreen.style.setProperty('--LogStyle', '0');
  }else{
    loginScreen.style.setProperty('--LogView', 'flex');
    loginScreen.style.setProperty('--LogStyle', '1');
  }
  
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
    addBook.style.setProperty('--Abble', 'none');
    addBook.setAttribute('disabled', 'true');
  }else{
    addBook.style.setProperty('--Abble', 'inline');
    addBook.removeAttribute('disabled');
  }
}

function whenLoggin(){
  UserInTitle.innerHTML = insertName.value;
  bookAuthor.innerHTML  = insertName.value;
  quem.value            = insertName.value;
  
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
    addBook.style.setProperty('--Abble', 'none');
    addBook.setAttribute('disabled', 'true');
    ItsMe.removeAttribute('style');
    ItsMe.removeAttribute('style');
  }else{
    addBook.style.setProperty('--Abble', 'inline');
    addBook.removeAttribute('disabled');
    
    
    ItsMe.style.setProperty('--EyeActivityColor', '#7F7');
    ItsMe.style.setProperty('--EyeActivityLight', '0 0 0.8vw #0F0');
    
    fooly.collection(insertName.value).doc('Exemplo').set({
      nome:         'Exemplo',
      descrição:    'Livro De Exemplo',
      dedicatoria:  `Ao ${insertName.value}`,
      capa:         'https://privatissimumexaminatorium.files.wordpress.com/2013/01/modelo-de-capas-livro-pense-direito.jpg',
      observação:   'Esse livro é um exemplo de como são formatado os livros.',
      numero:       Math.floor(parseInt(booksHaveCount.innerHTML)+1),
    });
    setTimeout(()=>{
      fooly.collection(insertName.value).doc('Exemplo').delete().then((livrinhos)=>{
        ItsMe.style.cssText = 'background-color:#F44; box-shadow:0 0 0.8vw #F00;';
        booksHaveCount.innerHTML = Math.floor(booksHaveCount.innerHTML - 1);
      });
      setTimeout(()=>{
        ItsMe.removeAttribute('style');
        booksHave.innerHTML = '';
        loadBooks();
      },400);
    }, 5000);
  }
}

function closeLogginScreen(){
  loginScreen.style.setProperty('--LogStyle', '0');
  setTimeout(()=>{
    loginScreen.style.setProperty('--LogView', 'none');
  }, 300);
}
function loadBooks(){
  const loggedHasVer = localStorage.getItem('Usuario');
  const pageLast  = localStorage.getItem('Ultima_Pagina');
  const lastBook  = localStorage.getItem('Ultimo_Livro');
  booksHave.innerHTML = '';
  listOfMarked.innerHTML = '';
  const tester = fooly.collection(loggedHasVer).orderBy("numero", "desc");
  tester.get().then((livros)=>{
    const forInd = livros.docs;
    livros.docs.forEach((pega, index)=>{
      const BookShelf        = pega.data();
      const covers           = document.createElement('button');
      const removeButton     = document.createElement('span');
      const BookVisibility   = document.createElement('p');
      covers.title           = BookShelf.nome;
      BookVisibility.dataset.infos = 'bookstatusinformation';
      // covers.innerHTML       = ;
      covers.setAttribute('style', `background-image:url(${BookShelf.capa}); border-color:${BookShelf.cor}; background-color:${BookShelf.cor};`);
      covers.append(BookShelf.nome, BookVisibility);
      BookVisibility.classList.add('BookViewTag');
      
      if(BookShelf.estado === 'Public'){
        covers.classList.add('pub');
        covers.style.setProperty('--BookStateLights', BookShelf.cor);
        BookVisibility.innerHTML = 'Public';
        BookVisibility.classList.add('TagPub');
      }else{
        covers.classList.remove('pub');
        BookVisibility.innerHTML = 'Private';
        BookVisibility.style.setProperty('--BookStateLights', BookShelf.cor);
      }
      
      covers.addEventListener('click', ()=>{
        bookTitle.value           =  BookShelf.nome;
        bookCover.value           =  BookShelf.capa;
        bookDescrição.value       =  BookShelf.descrição;
        bookDedicatoria.value     =  BookShelf.dedicatoria;
        bookObservação.value      =  BookShelf.observação;
        bookNumero.value          =  index;
        bookCor.value             =  BookShelf.cor;
        bookStatus.value          =  BookShelf.estado;
        bookArquivo.value         =  BookShelf.arquivo;
        bookAuthor.value          =  loggedHas;
        bookFileName.innerHTML    =  BookShelf.arquivo;
        bookPagesPatch.innerHTML  =  'paginas';
        bookPages.innerHTML       =  'Pagina 0';
        bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
        //Ler a Ultima Pagina
        if(isNaN(pageLast) || lastBook !== bookTitle.value){
          PageIndex = 0;
        }else{
          PageIndex = pageLast;
        }
        pageIndexing.value = PageIndex;
      });
      covers.addEventListener('click', ()=>{
        window.putInfos = function(){
          bookTitle.value           =  BookShelf.nome;
          bookCover.value           =  BookShelf.capa;
          bookDescrição.value       =  BookShelf.descrição;
          bookDedicatoria.value     =  BookShelf.dedicatoria;
          bookObservação.value      =  BookShelf.observação;
          bookNumero.value          =  index;
          bookCor.value             =  BookShelf.cor;
          bookStatus.value          =  BookShelf.estado;
          bookArquivo.value         =  BookShelf.arquivo;
          bookAuthor.value          =  loggedHas;
          bookFileName.innerHTML    =  BookShelf.arquivo;
          bookPagesPatch.innerHTML  =  'paginas';
          bookPages.innerHTML       =  `Pagina ${pageLast}`;
          PageFile.innerHTML        =  bookPages.innerHTML;
          bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
          document.documentElement.style.setProperty('--LobbyDisplay', 'none');
          //Ler a Ultima Pagina
          localStorage.setItem('Ultimo_Livro', bookTitle.value);
          if(pageLast == undefined || pageLast == null || pageLast > livros.size){
            PageIndex = 0;
          }else{
            PageIndex = pageLast;
          }
          
          bookGet();
          // loadBookPages();
          loadPages();
        // loadAllPages();
        }
        putInfos();
        updateGuideInfos();
      });
      booksHave.append(covers);
      if(livros.size == null || livros.size == undefined || isNaN(livros.size)){
        booksHaveCount.innerHTML = 0;
      }else{
        booksHaveCount.innerHTML = livros.size;
      }
  
      //Menu de Paginas Marcadas
      const bookName  = document.createElement('h2');
      const bookSlot  = document.createElement('div');
      bookName.innerHTML = BookShelf.nome;
      listOfMarked.append(bookName, bookSlot);
      
      const markedPages = fooly.collection(loggedHasVer + '_Marcações').where("livro", "==", BookShelf.nome);
      window.loadAllMarkers = function(){ 
        markedPages.get().then((markedIs)=>{
          markedIs.docs.forEach((bookMarks)=>{
            //Puxar os Dados
            const mPage = bookMarks.data();
            
            //Criar Os Dados Para Projetar
            const pageParagraph = document.createElement('p');
            //Projetar os Dados
            if(mPage.livro = BookShelf.nome){
              pageParagraph.innerHTML = mPage.nome;
              pageParagraph.style.setProperty('--MarkedIndex', `'${mPage.numero}'`);
              pageParagraph.style.setProperty('--MarkedColor', mPage.cor)
              bookSlot.append(pageParagraph);
              
              //Funcionalidades do paragrafo
              pageParagraph.addEventListener('mouseover', ()=>{
                markDetails.innerHTML = '';
                //Elementos de Exibição
                const markBookCover = document.createElement('img');
                const markGradient  = document.createElement('div'); markGradient.setAttribute('id', 'gradientMass');
                const markTitle     = document.createElement('h3');
                const markBookTitle = document.createElement('h4');
                const markDescript  = document.createElement('h5');
                const markPageIs    = document.createElement('h6');
                
                //Dados inseridos nos Elementos
                markBookCover.src       = BookShelf.capa;
                markTitle.innerHTML     = mPage.nome;
                markBookTitle.innerHTML = mPage.livro;
                markDescript.innerHTML  = mPage.descrição;
                markPageIs.innerHTML    = mPage.pagina;
                
                markDetails.append(markBookCover, markGradient, markTitle, markBookTitle, markDescript, markPageIs);
              });
              
              pageParagraph.addEventListener('click', ()=>{
                bookTitle.value           =  BookShelf.nome;
                bookCover.value           =  BookShelf.capa;
                bookDescrição.value       =  BookShelf.descrição;
                bookDedicatoria.value     =  BookShelf.dedicatoria;
                bookObservação.value      =  BookShelf.observação;
                bookNumero.value          =  index;
                bookCor.value             =  BookShelf.cor;
                bookStatus.value          =  BookShelf.estado;
                bookArquivo.value         =  BookShelf.arquivo;
                bookAuthor.value          =  loggedHas;
                bookFileName.innerHTML    =  BookShelf.arquivo;
                bookPagesPatch.innerHTML  =  'paginas';
                bookPages.innerHTML       =  `Pagina ${mPage.numero}`;
                PageFile.innerHTML        =  bookPages.innerHTML;
                bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
                document.documentElement.style.setProperty('--LobbyDisplay', 'none');
                //Ler a Ultima Pagina
                localStorage.setItem('Ultimo_Livro', bookTitle.value);
                if(pageLast == undefined || pageLast == null || pageLast > livros.size){
                  PageIndex = 0;
                }else{
                  PageIndex = pageLast;
                }
                pageIndexing.value = mPage.numero;
                bookGet();
                // loadBookPages();
                loadPages();
              // loadAllPages();
                
                menuClose();
              });
              
            }
          });
        });
      }
      
      loadAllMarkers();
    });
  });
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
  }else{
    ItsMe.style.setProperty('--EyeActivityColor', '#7F7');
    ItsMe.style.setProperty('--EyeActivityLight', '0 0 0.8vw #0F0');
  }
  
}

function closeBookCreat(){
  //--CreateBookDisplay
  //--CreateBookOpacity
  createBookScreen.style.setProperty('--CreateBookOpacity', '0');
  setTimeout(()=>{
    createBookScreen.style.setProperty('--CreateBookDisplay', 'none');
    CoverCreate.value = '';
    NameCreate.value = '';
    CoverCreate.value = '';
    Descript.value = '';
    dedicatoria.value = '';
    observacao.value = '';
    FileName.value = '';
      CoverCreate.value = '';
      CoverPreview.removeAttribute('src');
      CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  }, 210);
}

function clearInputs(){
  CoverCreate.value = '';
  NameCreate.value = '';
  CoverCreate.value = '';
  Descript.value = '';
  dedicatoria.value = '';
  observacao.value = '';
  FileName.value = '';
  CoverCreate.value = '';
  CoverPreview.removeAttribute('src');
  CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  bookTitle.value        = '';
  bookCover.value        = '';
  bookDescrição.value    = '';
  bookDedicatoria.value  = '';
  bookObservação.value   = '';
  bookNumero.value       = '';
  bookCor.value          = '';
  bookStatus.value       = '';
  bookArquivo.value      = '';
}

//Carregar o Livro no Editor
function bookGet(){
  BookTitle.value       = bookTitle.value;
  BookCover.value       = bookCover.value;
  BookDescript.value    = bookDescrição.value;
  BookDedication.value  = bookDedicatoria.value;
  BookObs.value         = bookObservação.value;
  BookPageIndex.value   = 0;
  BookColor.value       = bookCor.value;
  BookState.value       = bookStatus.value;
  quem.value            = bookAuthor.value;
  BookFile.value        = bookArquivo.value;
  NameOfBook.innerHTML  = bookTitle.value;
  BookColor.style.color = bookCor.value;
  insideBook            = 'true';
  StateCheck();
  setTimeout(()=>{
    numberUpdate();
  }, 500);
  updateGuideInfos();
}

//Carregar Paginas do Livro
var maxButtons = '';
//Snapversion (Ler Paginas)
function loadPages(){
  const loggedHasVer = localStorage.getItem('Usuario');
  const localPages = fooly.collection(loggedHasVer).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML);
  localPages.orderBy("numero", "asc").onSnapshot((onShot)=>{
    PageListLocate.innerHTML = '';
    algoBid   = onShot.size;
    pagesHave = onShot.size;
    console.log('Quantidade de paginas:', pagesHave);
    //Page List
    onShot.forEach((leituraDoc, index)=>{
      // PageListLocate.innerHTML = '';
      const pages = leituraDoc.data();
      // pagesOrdery(pages, index);
      atualBid = algoBid;
      pagesOrdery(pages, index);
      BookPageIndex.setAttribute('max', Math.floor(onShot.size - 1));
      
      if(PageIndex > Math.floor(onShot.size - 1)){
        PageIndex = Math.floor(PageIndex - 1);
      }
      
      if(leituraDoc.type === 'added'){
        PageListLocate.innerHTML = '';
        pagesOrdery(pages, index);
      }
      if(leituraDoc.type === "modified"){
        PageListLocate.innerHTML = '';
        pagesOrdery(pages, index);
      }
    });
   
    updateGuideInfos();
    
    //Rotornar da ultima pagina
    window.lastPageRead = ()=>{
      const lastIs    = pageIndexing.value;
      console.log('Pagina atual é ', lastIs);
      const LastPage  = onShot.docs[lastIs].data();
      const labelSel  = document.querySelectorAll(`#PageListLocate P`)[lastIs];
      const remLabel  = document.querySelectorAll(`#PageListLocate button#ldp`)[lastIs];
      const markBtn   = document.querySelectorAll(`#marcar`)[lastIs];
      //Valores
      editor.innerHTML              = LastPage.historia;
      BackgroundPage.value          = LastPage.fundo;
      PageName.value                = LastPage.nome;
      PageFont.value                = LastPage.fonte;
      PageFile.innerHTML            = LastPage.nome;
      BookMarkColor.value           = LastPage.cor;
      bookPages.innerHTML           = LastPage.pagina;
      BookPageIndex.value           = lastIs;
      PageIndex                     = lastIs;
      editor.setAttribute('style', LastPage.fundo);
      pagesIndexMax.value           = onShot.size;
      maxButtons                    = onShot.size;
      BookPageIndex.setAttribute('style', `color:${LastPage.cor};`);
      document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${LastPage.cor}`);
      document.documentElement.style.setProperty('--editorLightColor', LastPage.cor);
      document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${LastPage.cor} 20%, #0000 90%)`);
      labelSel.setAttribute('class', 'sel');
      remLabel.classList.add('visivel');
      markBtn.classList.add('visivel');
      window.historica = LastPage.historia;
      OldBackground    = LastPage.fundo;
      // pageRollDesign();
      document.documentElement.style.setProperty('--FileFont', LastPage.fonte);
      updateGuideInfos();
    }
    lastPageRead();
    
   //Botão De Proximo
   window.nextPageFunction = ()=>{
     pageRollDesign();
     const nextIs    = Math.floor(parseInt(BookPageIndex.value) + 1);
     const NextPage  = onShot.docs[nextIs].data();
     const labelSel = document.querySelectorAll(`#PageListLocate P`)[nextIs];
     const remLabel = document.querySelectorAll(`#PageListLocate button#ldp`)[nextIs];
     const markBtn = document.querySelectorAll(`#marcar`)[nextIs];
     needSave();
     historica     = NextPage.historia;
     OldBackground = NextPage.fundo;
     //Valores
     editor.innerHTML              = NextPage.historia;
     bookPages.innerHTML           = NextPage.pagina;
     BackgroundPage.value          = NextPage.fundo;
     PageName.value                = NextPage.nome;
     PageFont.value                = NextPage.fonte;
     PageFile.innerHTML            = NextPage.nome;
     BookMarkColor.value           = NextPage.cor;
     BookPageIndex.value           = nextIs;
     PageIndex                     = nextIs;
     editor.setAttribute           ('style', NextPage.fundo);
     BookPageIndex.setAttribute('style', `color:${NextPage.cor};`);
     document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${NextPage.cor}`);
     document.documentElement.style.setProperty('--editorLightColor', NextPage.cor);
     document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${NextPage.cor} 20%, #0000 90%)`);
     labelSel.setAttribute('class', 'sel');
     remLabel.classList.add('visivel');
     markBtn.classList.add('visivel');
     localStorage.setItem('Ultima_Pagina', PageIndex);
     document.documentElement.style.setProperty('--FileFont', NextPage.fonte);
     BackgroundColorBtn.setAttribute('style', NextPage.fundo);
     updateGuideInfos();
   }
   
   //Botão De Voltar Pagina
   window.prevPageFunction = ()=>{
     pageRollDesign();
     const prevIs    = Math.floor(parseInt(BookPageIndex.value) - 1);
     const PrevPage  = onShot.docs[prevIs].data();
     const labelSel = document.querySelectorAll(`#PageListLocate P`)[prevIs];
     const remLabel = document.querySelectorAll(`#PageListLocate button#ldp`)[prevIs];
     const markBtn = document.querySelectorAll(`#marcar`)[prevIs];
     needSave();
     historica     = PrevPage.historia;
     OldBackground = PrevPage.fundo;
     //Valores
     bookPages.innerHTML           = PrevPage.pagina;
     editor.innerHTML              = PrevPage.historia;
     BackgroundPage.value          = PrevPage.fundo;
     PageName.value                = PrevPage.nome;
     PageFont.value                = PrevPage.fonte;
     PageFile.innerHTML            = PrevPage.nome;
     BookMarkColor.value           = PrevPage.cor;
     BookPageIndex.value           = prevIs;
     PageIndex                     = prevIs;
     editor.setAttribute           ('style', PrevPage.fundo);
     BookPageIndex.setAttribute('style', `color:${PrevPage.cor};`);
     document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${PrevPage.cor}`);
     document.documentElement.style.setProperty('--editorLightColor', PrevPage.cor);
     document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${PrevPage.cor} 20%, #0000 90%)`);
     labelSel.setAttribute('class', 'sel');
     remLabel.classList.add('visivel');
     markBtn.classList.add('visivel');
     localStorage.setItem('Ultima_Pagina', PageIndex);
     document.documentElement.style.setProperty('--FileFont', PrevPage.fonte);
     BackgroundColorBtn.setAttribute('style', PrevPage.fundo);
     updateGuideInfos();
   }
   
    
    //Design Update
    updatePageBackground();
  });
  
  //Disponibilidades
  nextPageRead();
  numberUpdate();
}


//Segunda Snapshot versão
function loadAllPages(){
  const loggedHasVer = localStorage.getItem('Usuario');
  fooly.collection(loggedHasVer).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).onSnapshot(snapPages =>{
    const pagesList = snapPages.docs.reduce((pages, doc, index)=>{
      const {nome, cor} = doc.data();
      pages += `<p style="--PageIndex:'${index}'; --PageColor:${cor};">${nome}</p>`, `<button>O</button>`;
      return pages;
    })
    PageListLocate.innerHTML = pagesList;
  })
}


//Carregar Paginas....
//adicionar
function pagesOrdery(pages, index){
  //Criações de Sequencia
  const pagina = document.createElement('p');
  const remover = document.createElement('button');
  const markPage= document.createElement('button'); markPage.setAttribute('id', 'marcar');
  //Editar criações
  pagina.innerHTML = pages.nome;
  pagina.style.setProperty('--PageIndex', `'${pages.numero}'`);
  pagina.style.setProperty('--PageColor', `${pages.cor}`);
  pagina.setAttribute     ('id', 'ldp');
  pagina.classList.add    (`pg${pages.numero}`);
  remover.setAttribute    ('id', 'ldp');
  // remover.setAttribute    ('disabled', 'true');
  remover .innerHTML    = 'O';
  markPage.innerHTML    = 'P';
  //Projetar na Pagina
  if(pages.marker == 'Marcado'){
    pagina.classList.add  (pages.marker);
    markPage.classList.add('MarcadoBtn');
    markPage.style.setProperty('--MarkBookColor', pages.cor);
  }else{
    markPage.classList.remove('MarcadoBtn');
  }
  console.log(algoBid);
  PageListLocate.append(pagina, remover, markPage);
  if(pages.numero === 0){
    remover.classList.add('inct');
  }
  if(pages.numero < Math.floor(algoBid - 1)){
    remover.classList.add('inct');
  }
  
  //Funções das paginas ao Clicar
  pagina.addEventListener('click', ()=>{
    // saveEditor();xD
    needSave();
    historica     = pages.historia;
    OldBackground = pages.fundo;
    bookPages.innerHTML   = pages.pagina;
    PageFile.innerHTML    = pages.nome;
    BookPageIndex.value   = pages.numero;
    PageName.value        = pages.nome;
    PageFont.value        = pages.fonte;
    BackgroundPage.value  = pages.fundo;
    editor.innerHTML      = pages.historia;
    bookPageColor.value   = pages.cor;
    BookMarkColor.value   = pages.cor;
    getIndex.value        = pages.numero;
    window.PageIndex      = pages.numero;
    BookPageIndex.setAttribute('style', `color:${pages.cor};`);
    document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${pages.cor}`);
    document.documentElement.style.setProperty('--editorLightColor', pages.cor);
    pageIndexing.value = PageIndex;
    document.documentElement.style.setProperty('--FileFont', pages.fonte);
    //Design Ao Clicar
    pageRollDesign();
    nextPageRead();
    numberUpdate();
    updatePageBackground();
    
      document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${pages.cor} 20%, #0000 90%)`);
      pagina.classList.add  ('sel');
      remover.classList.add ('visivel');
      markPage.classList.add('visivel');
    //Salvar isso
    localStorage.setItem('Ultima_Cor', pages.fundo);
    localStorage.setItem('Ultima_Pagina', PageIndex);
    updateGuideInfos();
  });
  
  //Funções da Pagina ao colocar o Mouse em cima
  pagina.addEventListener('mouseover', ()=>{
    userInfos.style.setProperty('--HoverColor', pages.cor);
    remover .setAttribute('style', 'opacity:1;');
    markPage.style.opacity = '1';
    markPage.style.textShadow = '0.1vw 0.1vw 0.2vw #000' ;
    // remover.style.backgroundColor = '';
    // remover.style.pointerEvents = 'auto';
  });
  
  //Funções ao Tirar o Mouse de cima
  pagina.addEventListener('mouseout', ()=>{
    remover .removeAttribute('style');
    markPage.style.opacity = '';
    markPage.style.textShadow = '';
  });
  
  //Botão Apagar Pagina
  remover.addEventListener('mouseover', ()=>{
    remover.removeAttribute('disabled');
  });
  remover.addEventListener('click', ()=>{
    window.remIndex = index;
    document.documentElement.style.setProperty('--WarningDisplay', 'flex');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningBoxOpacity', '1');
    }, 50);
    WarningBox.innerHTML = '';
    const confirmButton = document.createElement('BUTTON'); confirmButton.classList.add('denied');
    const returnButton  = document.createElement('BUTTON'); returnButton .classList.add('blank');
    const Warning       = document.createElement('h2');
    const subWarning    = document.createElement('h3');
    confirmButton.innerHTML = 'Apagar';
    returnButton.innerHTML  = 'Cancelar';
    Warning.innerHTML    = `Você Deseja apagar <b>${pages.nome}</b> Arquivo <b>${pages.pagina}</b>?`;
    subWarning.innerHTML = `Você esta prestes a apagar <b>${pages.nome}</b> da historia <b>${bookFileName.innerHTML}</b>.<br/> <i>Ao apagar essa pagina sera removido ${pages.nome} com todo seu conteudo e essa ação não tem volta.</i>`; //Em Edição
    WarningBox.append(Warning, subWarning, returnButton, confirmButton);
    
    returnButton.addEventListener('click', ()=>{
      warningClose();
    });
    
    confirmButton.addEventListener('click', ()=>{
      fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina).delete().then(()=>{
        //Ao remover
        warningClose();
      });
      pageIndexing.value = Math.floor(parseInt(pagesIndexMax.value) - 2);
      bookPages.innerHTML = `Pagina ${pageIndexing.value}`;
    });
    
  });
  
  //Criar Marcação
  if(pages.marker == 'Marcado'){
    markPage.addEventListener('click', ()=>{
      const marcarPagina  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina);
      const marcarData    = fooly.collection(bookAuthor.innerHTML + '_Marcações').doc(bookFileName.innerHTML + '_' + pages.pagina);
      marcarPagina.update({
        marker: `unMk${pages.numero}`,
      });
      marcarData.delete().then(()=>{
      })
    });
    
  }else{
    markPage.addEventListener('click', ()=>{
      const confirmMark = document.createElement('button'); confirmMark.innerHTML= 'Marcar';   confirmMark.classList.add('confirm');
      const cancelMark  = document.createElement('button'); cancelMark.innerHTML = 'Cancelar'; cancelMark.classList.add('denied');
      openMarkerEditor();
      WarningBox.append(confirmMark, cancelMark);
      confirmMark.addEventListener('click', ()=>{
        const marcarPagina  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina);
        const marcarData    = fooly.collection(bookAuthor.innerHTML + '_Marcações').doc(bookFileName.innerHTML + '_' + pages.pagina);
        marcarPagina.update({
          marker: 'Marcado',
        });
        marcarData.set({
          nome:       markTitle.value,
          arquivo:    bookArquivo.value,
          descrição:  markDesc.value,
          livro:      bookTitle.value,
          pagina:     pages.pagina,
          numero:     pages.numero,
          cor:        pages.cor,
        });
        warningClose();
      });
      cancelMark.addEventListener('click', ()=>{
        warningClose();
      });
    });
  }
  setTimeout(()=>{
    nextPageRead();
  }, 300)
}


//Ao Modificar
function pagesListModify(pages, index){
  const labelSel = document.querySelectorAll(`#PageListLocate P`)[PageIndex];
  labelSel.innerHTML    = pages.nome;
  PageName.value        = pages.nome;
  editor.innerHTML      = pages.historia;
  BackgroundPage.value  = pages.fundo;
  BookPageIndex.setAttribute('style', `color:${pages.cor};`);
  labelSel.style.setProperty('--PageIndex', `'${pages.numero}'`);
  labelSel.addEventListener('click', ()=>{
    PageName.value       = pages.nome;
    editor.innerHTML     = pages.historia;
    BackgroundPage.value = pages.fundo;
    editor.setAttribute    ('style', pages.fundo);
  })
}


//Função de Remoção
function removePageList(){
  const labelSel = document.querySelectorAll(`#PageListLocate P`)[remIndex];
  const removSel = document.querySelectorAll(`#PageListLocate button`)[remIndex];
  labelSel.remove();
  removSel.remove();
}

//Remover Historia
function removeHistory(){
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).delete().then(()=>{
    document.documentElement.style.setProperty('--LobbyDisplay', 'flex');
    ItsMe.style.cssText = 'background-color:#F44; box-shadow:0 0 0.8vw #F00;';
    booksHaveCount.innerHTML = Math.floor(booksHaveCount.innerHTML - 1);
    setTimeout(()=>{
      ItsMe.removeAttribute('style');
      booksHave.innerHTML = '';
      loadBooks();
    }, 1000);
  });
}

function warningClose(){
  document.documentElement.style.setProperty('--warningBoxOpacity', '0');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--WarningDisplay', 'none');
    WarningBox.innerHTML = '';
  }, 300);
}

function menuClose(){
  document.documentElement.style.setProperty('--MarcacoesOpacidade', '0');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--PaginaDeMarcacoes', 'none');
    document.documentElement.style.setProperty('--CloseTabsActivated', 'none');
    //--CloseTabsActivated
  }, 400)
}

///Função de Salvar 
function saveAllFile(){
  const who   = document.getElementById('quem');
  const PageSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  const bookSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML);
  
  bookSave.update({
    nome:         BookTitle.value,
    capa:         BookCover.value,
    descrição:    BookDescript.value,
    dedicatoria:  BookDedication.value,
    observação:   BookObs.value,
    cor:          BookColor.value,
    estado:       BookState.value,
    numero:       parseInt(bookNumero.value),
    arquivo:      bookFileName.innerHTML,
  }).then(()=>{
    // loadBooks();
    savedMassage();
  }).catch(()=>{
    errorMassage();
  });
 

  
  PageSave.update({
    nome:     PageName.value,
    fonte:    PageFont.value,
    fundo:    BackgroundPage.value,
    historia: editor.innerHTML,
    numero:   parseInt(BookPageIndex.value),
    pagina:   bookPages.innerHTML,
    cor:      BookMarkColor.value,
  }).then(() =>{
    savedMassage();
  }).catch(()=>{
    errorMassage();
  });;
  // tester();
  pageIndexing.value = BookPageIndex.value;
  localStorage.setItem('Ultima_Pagina', pageIndexing.value);
}

//Salvar Só o Editor
function saveEditor(){
  const PageSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  PageSave.update({
    historia: editor.innerHTML,
  }).then(()=>{
    //Aviso Se Foi Salvo
    warnTitle.innerHTML = 'Cuidado ⚠️';
    warnText.innerHTML  = 'Você esqueceu de salvar a Historia Anterior, Relaxa eu salvei pra você';
    document.documentElement.style.setProperty('--warningTypeColor', '#FF5');
    document.documentElement.style.setProperty('--WarningTopVisibility', '0.1vw');
    document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(0deg)');
    slidBox.append(warnTitle, warnText);
    console.log('Salvo');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningTypeColor', '#EEE');
      document.documentElement.style.setProperty('--WarningTopVisibility', '-2vw');
      document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(90deg)');
    }, 4000);
    
  }).catch(()=>{
    //Aviso Se Foi Salvo
    warnTitle.innerHTML = 'Deu Ruim 💀';
    warnText.innerHTML  = 'Você esqueceu de salvar a Historia Anterior, Infelizmente ela não foi Salva Automaticamente';
    document.documentElement.style.setProperty('--warningTypeColor', '#FF5');
    document.documentElement.style.setProperty('--WarningTopVisibility', '0.1vw');
    document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(0deg)');
    slidBox.append(warnTitle, warnText);
    console.log('Salvo');
    setTimeout(()=>{
      document.documentElement.style.setProperty('--warningTypeColor', '#EEE');
      document.documentElement.style.setProperty('--WarningTopVisibility', '-2vw');
      document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(90deg)');
    }, 4000);
  });
  
}

function savedMassage(){
  //Aviso Se Foi Salvo
  warnTitle.innerHTML = 'Salvo Com Sucesso ✔️';
  warnText.innerHTML  = '';
  document.documentElement.style.setProperty('--warningTypeColor', '#5F5');
  document.documentElement.style.setProperty('--WarningTopVisibility', '0.1vw');
  document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(0deg)');
  slidBox.append(warnTitle);
  console.log('Salvo');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--warningTypeColor', '#EEE');
    document.documentElement.style.setProperty('--WarningTopVisibility', '-2vw');
    document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(90deg)');
  }, 4000);
}
function errorMassage(){
  //Aviso Se Foi Salvo
  warnTitle.innerHTML = 'Erro: Não pode ser Salvo 💀';
  warnText.innerHTML  = '';
  document.documentElement.style.setProperty('--warningTypeColor', '#F55');
  document.documentElement.style.setProperty('--WarningTopVisibility', '0.1vw');
  document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(0deg)');
  slidBox.append(warnTitle);
  console.log('Não deu pra salvar :(');
}

function youNeedSave(){
  //Aviso
  warnTitle.innerHTML = 'Recomendo que salve Antes ⚠️';
  warnText.innerHTML  = '';
  document.documentElement.style.setProperty('--warningTypeColor', '#FF5');
  document.documentElement.style.setProperty('--WarningTopVisibility', '0.1vw');
  document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(0deg)');
  slidBox.append(warnTitle);
  setTimeout(()=>{
    document.documentElement.style.setProperty('--warningTypeColor', '#EEE');
    document.documentElement.style.setProperty('--WarningTopVisibility', '-2vw');
    document.documentElement.style.setProperty('--RotationVisibility', 'rotateX(90deg)');
  }, 4000);
}

//Função de passar e criar pagina
function nextPageRead(){
  if(editor.innerHTML.length > 20){
    // NextButton.removeAttribute('disabled');
    // NextButton.style.setProperty('--Playble', 'auto');
  }
  if(parseInt(BookPageIndex.value) > parseInt(pagesIndexMax.value) - 2){
    NextButton.setAttribute('disabled', 'true');
    NextButton.style.setProperty('--Playble', 'none');
    NextButton.style.display = 'none';
    moreButtons.append(createNewPage);
  }else{
    moreButtons.innerHTML = '';
    NextButton.style.display = '';
    NextButton.removeAttribute('disabled');
    NextButton.style.setProperty('--Playble', 'auto');
  }
  if(parseInt(BookPageIndex.value) > 0){
    PrevButton.removeAttribute('disabled');
    PrevButton.style.setProperty('--Playble', 'auto');
  }else{
    PrevButton.setAttribute('disabled', 'true');
    PrevButton.style.setProperty('--Playble', 'none');
  }
}

function previewPageButton(){
  if(BookPageIndex.value > 0){
    PrevButton.removeAttribute('disabled');
    PrevButton.style.setProperty('--Playble', 'auto');
  }else{
    PrevButton.setAttribute('disabled', 'true');
    PrevButton.style.setProperty('--Playble', 'none');
  }
}

function numberUpdate(){
  charLength.innerHTML = editor.innerHTML.length;
}


        
function pageRollDesign(){
  const kkk = document.querySelectorAll('ldp');
  for(var p = 0; p <ldp.length; p++){
    ldp[p].classList.remove('sel');
    ldp[p].classList.remove('visivel');
  }
  const markBtn = document.querySelectorAll('#PageListLocate #marcar');
  for(var l = 0; l <markBtn.length; l++){
    markBtn[l].classList.remove('visivel');
  }
}

//Proxima Pagina
function vaParaProxima(){
  const nextNumb = Math.floor(parseInt(BookPageIndex.value) + 1);
  const pathNumb = `Pagina ${nextNumb}`;
  const searchNext = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pathNumb);
  searchNext.get().then((leiaIsso)=>{
    const essa = leiaIsso.data();
    editor.innerHTML = essa.historia;
  });
}


//Funções de Design
function updatePageBackground(){
  // if(BackgroundPage.value.search(/jpg|jpeg|png/) || BackgroundPage.value.length > 7){
  //   editor.style.background = `url(${BackgroundPage.value})`;
  // }
  // if(BackgroundPage.value.length < 7){
  //   editor.style.background = BackgroundPage.value;
  // }
  // else{
  //   editor.style.background = BackgroundPage.value;
  // }
  
  //New Background
  editor.setAttribute('style', BackgroundPage.value);
  BackgroundColorBtn.setAttribute('style', BackgroundPage.value);
}


//Precisa Salvar?
function needSave(){
  if(editor.innerHTML == historica){
    console.log('Não precisa Salvar');
  }else{
    console.log('Teve que salvar');
    saveAllFile();
  }
  if(BackgroundPage.value == OldBackground){
    
  }else{
    saveAllFile();
  }
}

//

const winTitle    = document.createElement('h1');    winTitle.innerHTML = 'Detalhes da Marcação (Criar)';
const mTitle      = document.createElement('h4');    mTitle  .innerHTML = 'Nome';
const mDesc       = document.createElement('h4');    mDesc   .innerHTML = 'Descrição';
const markTitle   = document.createElement('input'); markTitle.placeholder = 'Nome da Marcação';
const markDesc    = document.createElement('input'); markDesc .placeholder = 'Descrição da Marcação';

function openMarkerEditor(){
  document.documentElement.style.setProperty('--WarningDisplay', 'flex');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--warningBoxOpacity', '1');
  }, 50);
  WarningBox.innerHTML = '';
  WarningBox.append(winTitle, mTitle, markTitle, mDesc, markDesc);
}

getMarkeds();

//Funções De Marcações
function getMarkeds(){
  const whosLogged = localStorage.getItem('Usuario');
  const markPath = fooly.collection(whosLogged + '_Marcações');
  markPath.onSnapshot((snapMarks)=>{
    
    snapMarks.forEach((markeds)=>{
      const marker = markeds.data();
      if(markeds.type === 'added'){
        listOfMarked.innerHTML = '';
        const pags = document.createElement('p');
        pags.innerHTML = marker.nome;
      }
    });
  });
}

//Previsualizações enquanto cria
NameCreate.addEventListener('input', ()=>{
  FileName.value          = NameCreate.value.replace(/[^a-zA-Z0-9çéÉáÁíÍúÚóÓãÃõÕñÑ _-]/g, '').replace(/ /g, '_');
  FileName.value          = FileName.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  bookFileName.innerHTML  = FileName.value;
  bookTitle.value         = NameCreate.value;
  bookArquivo.value       = FileName.value;
});

FileName.addEventListener('input', ()=>{
  FileName.value = FileName.value.replace(/[^a-zA-Z0-9çéÉáÁíÍúÚóÓãÃõÕñÑ _-]/g, '').replace(/ /g, '_');
  FileName.value = FileName.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  bookFileName.innerHTML = FileName.value;
});

CoverCreate.addEventListener('focusout', ()=>{
  if(CoverCreate.value.search(/.jpg|.jpeg|.png|.gif|.bmp/) !== -1){
    CoverPreview.src  = CoverCreate.value;
    CoverPreview.style.setProperty('--CoverPreviewBorder', `0.43vw solid ${docColor.value}`);
    bookCover.value   = CoverCreate.value;
  }else{
    
    CoverCreate.value = '';
    CoverPreview.removeAttribute('src');
    CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  }
});

docColor.addEventListener('input', ()=>{
  CoverPreview.style.setProperty('--CoverBorderColor', docColor.value);
  bookCor.value = docColor.value;
  bookCor.setAttribute('style', `background-color:${docColor.value};`)
});

//Text Mirror
Descript.addEventListener('input', ()=>{
  bookDescrição.value = Descript.value;
});
dedicatoria.addEventListener('input', ()=>{
  bookDedicatoria.value = dedicatoria.value;
});
observacao.addEventListener('input', ()=>{
  bookObservação.value = observacao.value;
});
FileName.addEventListener('input', ()=>{
  bookArquivo.value = FileName.value;
});

//            //Criar Livro//         //
//Abrir Criação
addBook.addEventListener('click', ()=>{
  createBookScreen.style.setProperty('--CreateBookDisplay', 'flex');
  clearInputs();
  bookPagesPatch.innerHTML = 'paginas';
  bookPages.innerHTML      = 'Pagina 0';
  bookNumero.value         =  Math.floor(parseInt(booksHaveCount.innerHTML) + 1);
  setTimeout(()=>{
    createBookScreen.style.setProperty('--CreateBookOpacity', '1');
  }, 210);
})

//Cancelar Criação
cancelBook.addEventListener('click', ()=>{
  closeBookCreat();
})

//Criar Livro
CreateBook.addEventListener('click', ()=>{
  const createRandomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColor       = `#${createRandomColor}`;
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).set({
    nome:        NameCreate.value,
    capa:        CoverCreate.value,
    descrição:   Descript.value,
    dedicatoria: dedicatoria.value,
    observação:  observacao.value,
    numero:      Math.floor(parseInt(booksHaveCount.innerHTML)+1),
    cor:         docColor.value,
    estado:      'Private',
    arquivo:     FileName.value,
  });
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML).set({
    nome    :'Pagina 0',
    pagina  :'Pagina 0',
    fonte   :'Helvetica',
    historia:'<h2>Escreva Sua Historia</h2>',
    numero  : 0,
    fundo   :'background-color:#FFF;',
    cor     :randomColor,
  });
  closeBookCreat();
  loadBooks();
});

//Botão de Voltar ao Lobby
BackToLobby.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--LobbyDisplay', 'flex');
  // NextButton.removeEventListener('click', goNextPage);
  // PrevButton.removeEventListener('click', goPreviewPage);
  PageListLocate.innerHTML='';
  insideBook              = 'fake';
  localStorage.setItem('Ultima_Pagina', PageIndex);
  loadBooks();
  needSave();
});

//Remover Historia
DeleteHistory.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--WarningDisplay', 'flex');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--warningBoxOpacity', '1');
  }, 50);
  WarningBox.innerHTML = '';
  const confirmButton = document.createElement('BUTTON');
  const returnButton  = document.createElement('BUTTON');
  const Warning       = document.createElement('h2');
  const subWarning    = document.createElement('h3');
  confirmButton.innerHTML = 'APAGAR';   confirmButton.classList.add('denied');
  returnButton.innerHTML  = 'CANCELAR'; returnButton.classList.add('blank');
  Warning.innerHTML       = 'Você deseja realmente apagar essa historia?';
  subWarning.innerHTML    = `Essa ação não tem volta ${bookAuthor.innerHTML}.-`;
  returnButton.addEventListener('click', ()=>{
    warningClose();
  });
  confirmButton.addEventListener('click', ()=>{
    removeHistory();
    warningClose();
    insideBook              = 'fake';
  })
  WarningBox.append(Warning, subWarning, returnButton, confirmButton);
  
  setTimeout(()=>{
  }, 1000);
});

//Mudar a cor do texto do fundo Instantaneamente
BookColor.addEventListener('input', ()=>{
  BookColor.style.color = BookColor.value;
});

//Mudar Estado do Livro
BookState.addEventListener('click', ()=>{
  const StateButton = document.querySelector('.StateName');
  if(BookState.value === 'Public'){
    BookState.value       = 'Private'
    StateButton.title       = 'Esse Livro é Privado e Não é Visivel em Sua Lista de Historias Publicas.';
    StateButton.innerHTML = 'PRIVADO';
    BookState.checked     = false;
  }else{
    BookState.value       = 'Public';
    StateButton.innerHTML = 'VISIVEL';
    StateButton.title       = 'Esse Livro é Publico e Esta Visivel em Sua Lista De Historias Publicas.';
    BookState.checked     = true;
  }
});


// Mudar Cor Da Pagina Instantaneamente
BackgroundPage.addEventListener('input', ()=>{
  updatePageBackground();
});

BackgroundColorBtn.addEventListener('click', ()=>{
  BackgroundPallet.click();
});

BackgroundPallet.addEventListener('input', ()=>{
  BackgroundPage.value = `background-color:${BackgroundPallet.value};`
  BackgroundColorBtn.setAttribute('style', BackgroundPage.value);
  editor.setAttribute('style', BackgroundPage.value);
});

//Condições e funções para passar pagina
// NextButton.addEventListener('click', ()=>{
  // if(editor.innerHTML.length > 20){
    // goNextPage();
  // }
  // previewPageButton();
// })

NextButton.addEventListener('click', ()=>{
  // vaParaProxima();
  nextPageFunction();
  nextPageRead();
});

PageListLocate.addEventListener('click', ()=>{
  // const searchNext = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  // searchNext.get().then((leiaIsso)=>{
    // const essa = leiaIsso.data();
    // editor.innerHTML = essa.historia;
  // });
});

PrevButton.addEventListener('click', ()=>{
  // previewPageButton();
  prevPageFunction();
  nextPageRead();
});

//Cor do marca pagina
BookMarkColor.addEventListener('input', ()=>{
  const listaDePagina = document.querySelectorAll('#PageListLocate p');
  listaDePagina[PageIndex].style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${BookMarkColor.value} 20%, #0000 90%)`);
  document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${BookMarkColor.value}`);
  document.documentElement.style.setProperty('--editorLightColor', BookMarkColor.value);
  editor.style.outline = `0.1vw solid ${BookMarkColor.value}`;
  editor.style.boxShadow = `inset 0 0 0.6vw ${BookMarkColor.value}, 0 0 0.6vw ${BookMarkColor.value}`;
  listaDePagina[PageIndex].style.setProperty('--PageColor', BookMarkColor.value);//--PageColor
});
BookMarkColor.addEventListener('focus', ()=>{
  editor.style.outline = `0.1vw solid ${BookMarkColor.value}`;
  editor.style.boxShadow = `inset 0 0 0.6vw ${BookMarkColor.value}, 0 0 0.6vw ${BookMarkColor.value}`;
});
BookMarkColor.addEventListener('focusout', ()=>{
  editor.style.outline = ``;
  editor.style.boxShadow = ``;
});

favPages.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--PaginaDeMarcacoes', 'flex');
  document.documentElement.style.setProperty('--CloseTabsIndex', '34');
  document.documentElement.style.setProperty('--CloseTabsActivated', 'block');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--MarcacoesOpacidade', '1');
  }, 50);
});

closeTabs.addEventListener('click', ()=>{
  menuClose();
});
/////Projetar Debugg//////
debuggView.append(bookAuthor, '>', bookFileName, '>', bookPagesPatch, '>', bookPages, booksHaveCount, bookTitle, bookCover ,bookDescrição, bookDedicatoria, bookObservação, bookNumero, bookCor, bookStatus, bookArquivo, pagesIndexMax, bookPageColor, pageIndexing);
loadBooks();


//Bloco de formatação
ItalicBtn.addEventListener('click', ()=>{
  document.execCommand('italic', false, null);
//  var fontElements = document.getElementsByTagName("i");
//  for (var o = 0, len = fontElements.length; o < len; ++o) {
//    if (fontElements[o].fontStyle !== "italic") {
//        fontElements[o].removeAttribute("size");
//        fontElements[o].style.fontStyle = "italic";
//    }
//  }
});

fontList.addEventListener('click', (e)=>{
});

function fontIs(e){
  const selected = event.target;
  document.execCommand('fontName', false, selected.innerHTML);
  var fontElements = document.getElementsByTagName("font");
  for (var o = 0, len = fontElements.length; o < len; ++o) {
    if (fontElements[o].face == selected.innerHTML) {
      fontElements[o].removeAttribute("face");
      fontElements[o].style.fontFamily = selected.innerHTML;
    }
  }
}

//Tamanho da fonte
function fontSizeIs(){
  const selected = event.target;
  const sizeIs   = parseFloat(selected.innerHTML) / 6;
  if(isNaN(selected.innerHTML)){
  }else{
    FontSize.innerHTML = selected.innerHTML;
    document.execCommand('fontSize',false, 1);
    var fontElements = document.getElementsByTagName("font");
    for (var b = 0, len = fontElements.length; b < len; ++b) {
      if(fontElements[b].size == 1) {
        fontElements[b].removeAttribute("size");
        fontElements[b].style.fontSize = sizeIs.toPrecision(3) + 'vw';
      }
    }
  }
}

function customSizeIs(){
  const fontSizeCustom = prompt("Tamanho da Fonte");
  // event.target.innerHTML = parseFloat(fontSizeCustom);
  const newSize = document.createElement('button');
  newSize.innerHTML = fontSizeCustom;
  newSize.setAttribute('onMouseOver', 'fontSizeIs()');
  addSize.append(newSize);
  fontSizeIs();
}

function resetFontSize(){
  document.execCommand('fontSize',false, 1);
  var fontElements = document.getElementsByTagName("font");
  FontSize.innerHTML = 'j';
  for (var b = 0, len = fontElements.length; b < len; ++b) {
    if(fontElements[b].size == 1) {
      fontElements[b].removeAttribute("size");
      fontElements[b].style.fontSize = '';
    }
  }
}

ResetForm.addEventListener('click', ()=>{
  document.execCommand('removeFormat', false);
  document.execCommand('formatBlock', false, 'p');
})

FontSize.addEventListener('focusout', ()=>{
  
});
turnOnFonts();
//Lista de fontes
function turnOnFonts(){
  const fontList = document.querySelectorAll('.fontFamily');
  fontList.forEach((fonte)=>{
    fonte.setAttribute('style', `font-family:${fonte.innerHTML};`);
    fonte.setAttribute('title', fonte.innerHTML);
  })
}

fontesHave();

function fontesHave(){
  const fonteIs = [
    'Arial',
    'Comic Sans MS',
    'Comfortaa',
    'Courier New',
    'Dark Magic',
    'EnterCommand',
    'Georgia',
    'Helvetica',
    'hkh glyphs short',
    'Impact',
    'LilitaOne',
    'Modern M',
    'Palatino',
    'SansSerif',
    'Scriptorium', 
    'Symbol',
    'Steam Punk Flyer',
    'Times New Roman',
    'Trebuchet MS',
    'The Old Forest',
    'Verdana',
    'Webdings',
  ];
  
  fonteIs.forEach((fontes)=>{
    const opções = document.createElement('option');
    opções.innerHTML = fontes;
    opções.value     = fontes;
    opções.setAttribute('style', `font-family:${fontes};`);
    PageFont.append(opções);
  });
}
PageFont.addEventListener('change', ()=>{
  document.documentElement.style.setProperty('--FileFont', PageFont.value);
});


editor.addEventListener('click', ()=>{
});

window.onbeforeunload = confirmExit;
function confirmExit() {
  saveAllFile();
  if(editor.innerHTML == historica){
    console.log('Não precisa Salvar');
  }else{
    return 'Algumas Alterações foram feitas e não foram salvas, Quer Fechar mesmo assim?';
  }
}
function SavePDF(){

  const myPrint = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

  myPrint.document.write(`<html><head><title>${bookPages.innerHTML}</title>`);
  myPrint.document.write('</head><body >');
  myPrint.document.write(editor.innerHTML);
  myPrint.document.write('</body></html>');

  myPrint.document.close(); // necessary for IE >= 10
  myPrint.focus(); // necessary for IE >= 10*/

  myPrint.print();
  myPrint.close();

  return true;
}






//    //////////Gerador de Background///////////

//Background Editor Open
BackgroundEditorButton.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--BackgroundEditorActive', 'flex');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--BackgroundMenuVisibility', '1');
  }, 50);
});
//Background Editor Close
CancelBackground.addEventListener('click', ()=>{
  closeEditorMenu();
});

function closeEditorMenu(){
  document.documentElement.style.setProperty('--BackgroundMenuVisibility', '0');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--BackgroundEditorActive', 'none');
  }, 300);
}


          //Link Chackpoint
// window.location.hash = '#(Donaters)[2]'
// const hashLinkPath = document.createElement('input'); hashLinkPath.value = window.location.hash;
// debuggView.append(hashLinkPath);

// //Get Hash Identification
// var getParenteses = /\(([^)]+)\)/g;
// var bookParenteses= hashLinkPath.value.match(getParenteses);
// var hashBook = bookParenteses.map(match => match.replace(/[()]/g, ""));
// //page Number
// var getPageNumber = hashLinkPath.value.split('[');
// var hashPageNumber= `Pagina ${getPageNumber[1].replace(']', '')}`;

// if(hashLinkPath.value === ''){
  
// }else{
//   bookFileName.innerHTML    = hashBook;
//   bookPages.innerHTML       = hashPageNumber;
//   bookPagesPatch.innerHTML  = 'paginas';
//   fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).get().then((bookHashed)=>{
//     const hashIs          = bookHashed.data();
//     bookTitle.value       = hashIs.nome;
//     bookCover.value       = hashIs.capa;
//     bookDescrição.value   = hashIs.descrição;
//     bookDedicatoria.value = hashIs.dedicatoria;
//     bookObservação.value  = hashIs.observação;
//     bookNumero.value      = hashIs.numero;
//     bookCor.value         = hashIs.cor;
//     bookStatus.value      = hashIs.estado;
//     bookArquivo.value     = hashIs.arquivo;
    
//   }).catch(()=>{
    
//   });
//   fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection('paginas').doc(bookPages.innerHTML).get().then((bookHash)=>{
//     console.log('teste');
//     const hashIs   = bookHash.data();
//     console.log(hashIs.nome);
//     bookGet();
//     loadPages();
    
//      document.documentElement.style.setProperty('--LobbyDisplay', 'none');
//   }).catch(()=>{
//    document.documentElement.style.setProperty('--LobbyDisplay', 'flex');
//   });
// }



//Background Editor Close And Save
SaveBackground.addEventListener('click', ()=>{
  if(GeneralStyleCode.value !== ''){
    BackgroundPage.value = GeneralStyleCode.value;
    editor.setAttribute('style', GeneralStyleCode.value);
    BackgroundColorBtn.setAttribute('style', GeneralStyleCode.value);
  }
  closeEditorMenu();
});



//Botão de seleção de tipo
selectBgType.addEventListener('click', ()=>{
  const typeValue = document.querySelector('#selectBgType input[type=radio]:checked');
  if(typeValue.value === 'Image'){
    BgImageStyle.style.maxHeight = '100vw';
  }else{
    BgImageStyle.style.maxHeight = '0vw';
  }
  if(typeValue.value === 'Gradient'){
    GradientStyleTab.style.maxHeight = '100vw'
  }else{
    GradientStyleTab.style.maxHeight = '0vw'
  }
  if(typeValue.value === 'Solid'){
    SolidColorBackground.style.maxHeight = '100vw'
  }else{
    SolidColorBackground.style.maxHeight = '0vw'
    SolidColorButton.dataset.level = '0';
  }
  
  //
});

const formats = ['jpg', 'jpeg', 'png'];
bg1.addEventListener('click', ()=>{
  BackGroundActivateds();
});

///
bg2.addEventListener('click', ()=>{
  BackGroundActivateds();
});

///
bg3.addEventListener('click', ()=>{
  BackGroundActivateds();
});

//Função geral
function BackGroundActivateds(){
  if(bg1ImgLink.value === ''){
    bg2ImgLink.value = '';
    bg3ImgLink.value = '';
    bg1Code.value = '';
    bg2Code.value = '';
    bg3Code.value = '';
    bg2.classList.add('deAct');
    bg3.classList.add('deAct');
  }else{
    const getBgPos = document.querySelector('#bg1Position input[type=radio]:checked');
    const getBgRep = document.querySelector('#bg1Repeat input[type=radio]:checked');
    bg1Code.value = `url(${bg1ImgLink.value}) ${getBgRep.value} ${getBgPos.value}`;
    bg2.classList.remove('deAct');
    bgGeneralCode.value = bg1Code.value;
  }
  
  if(bg2ImgLink.value === ''){
    bg3ImgLink.value = '';
    bg3Code.value = '';
    bgGeneralCode.value = `${bg1Code.value}`;
    bg3.classList.add('deAct');
    bg3Code.value = '';
  }else{
    const getBgPos = document.querySelector('#bg2Position input[type=radio]:checked');
    const getBgRep = document.querySelector('#bg2Repeat input[type=radio]:checked');
    bg2Code.value = `url(${bg2ImgLink.value}) ${getBgRep.value} ${getBgPos.value}`;
    bg3.classList.remove('deAct');
    bgGeneralCode.value = `${bg1Code.value}, ${bg2Code.value}`;
  }
  if(bg3ImgLink.value === ''){
  }else{
    const getBgPos = document.querySelector('#bg3Position input[type=radio]:checked');
    const getBgRep = document.querySelector('#bg3Repeat input[type=radio]:checked');
    bg3Code.value = `url(${bg3ImgLink.value}) ${getBgRep.value} ${getBgPos.value}`;
    bgGeneralCode.value = `${bg1Code.value} ,${bg2Code.value} ,${bg3Code.value}`;
  }
  backgroundGeneralCode();
  
}

///////////////////////////////////////
bg1ImgLink.addEventListener('input', ()=>{
  BackGroundActivateds();
  backgroundGeneralCode();
})

bg2ImgLink.addEventListener('input', ()=>{
  BackGroundActivateds();
  backgroundGeneralCode();
})

bg3ImgLink.addEventListener('input', ()=>{
  BackGroundActivateds();
  backgroundGeneralCode();
})

//Gradient Background Code
var gradientColorList = [];

//Input De Cor
GradientType.addEventListener('click', ()=>{
  const typeChoose = document.querySelector('#GradientType input[type=radio]:checked');
  if(typeChoose.value === 'linear-gradient'){
    document.documentElement.style.setProperty('--RotatorVisibility', 'inline');
    LinearRotate.removeAttribute('disabled');
  }else{
    document.documentElement.style.setProperty('--RotatorVisibility', 'none');
    LinearRotate.setAttribute('disabled', 'true');
  }
});

addColorGradient.addEventListener('click', ()=>{
  const GradientTypeIs = document.querySelector('#GradientType input[type=radio]:checked').value;
  addColorInGradient();
  if(GradientTypeIs === 'clear'){
    LGT.click();
  }
});

function addColorInGradient(){
  if(gradientColorList.length > 0){
    const newColor = {color: '#ffffff', opacity: '1', ocupation: '100'};
    gradientColorList.push(newColor);
  }else{
    const newColor = {color: '#ffffff', opacity: '1', ocupation: '0'};
    gradientColorList.push(newColor);
  }
  
  showColorsGradient();

}

function showColorsGradient(){
  ExtraColors.innerHTML = '';
  gradientColorList.forEach((cor, index)=>{
    
    //Caixa De Cores
    const colorBox  = document.createElement('input');
    colorBox.classList.add('GradientColor');
    colorBox.setAttribute('type', 'color');
    colorBox.value = cor.color;
             //Alternador de cores
             const colorcode = colorBox.value;
             const r = parseInt(colorcode.substr(1,2), 16);
             const g = parseInt(colorcode.substr(3,2), 16);
             const b = parseInt(colorcode.substr(5,2), 16);
    
    //Informador de Cores
    const colorInfo = document.createElement('input');
    colorInfo.classList.add('GCH');
    colorInfo.value = colorBox.value;
    colorInfo.style.setProperty('--GradientColorSel', `rgba(${r}, ${g}, ${b}, ${cor.opacity})`);
    
    colorInfo.addEventListener('click', ()=>{
      colorBox.click();
    });
    
    //ColorOpacity
    const colorOpac = document.createElement('input');
    colorOpac.classList.add('gradientRadius');
    colorOpac.setAttribute('type', 'range');
    colorOpac.setAttribute('max', '1');
    colorOpac.setAttribute('min', '0');
    colorOpac.setAttribute('step', '0.01');
    colorOpac.setAttribute('value', '1');
    colorOpac.value = cor.opacity;
    
    //Posição da Cor
    const colorPos = document.createElement('input');
    colorPos.setAttribute('type', 'number');
    colorPos.setAttribute('class', 'bgImgLink ocu');
    colorPos.setAttribute('min', '0');
    colorPos.setAttribute('max', '100');
    colorPos.setAttribute('value', '0');
    colorPos.dataset.infos = 'GradientPosition';
    colorPos.value = cor.ocupation;
    
    //Botão de Remoção de Cor
    const removeColor = document.createElement('button');
    removeColor.innerHTML = 'O';
    removeColor.title     = 'Remover Cor';
    removeColor.classList.add('removeButton');
    
    //Slot da Cor
    const colorSlot = document.createElement('div');
    colorSlot.style.setProperty('ColorNumber', `'${index}'`);
    colorSlot.append(colorBox, colorInfo, colorOpac, colorPos, removeColor);
    
    ExtraColors.append(colorSlot);
    
    //Funções
    var cmcg = ()=> {
             //Alternador de cores
             colorInfo.value = colorBox.value;
             const colorcode = colorInfo.value;
             const r = parseInt(colorcode.substr(1,2), 16);
             const g = parseInt(colorcode.substr(3,2), 16);
             const b = parseInt(colorcode.substr(5,2), 16);
      colorInfo.style.setProperty('--GradientColorSel', `rgba(${r}, ${g}, ${b}, ${colorOpac.value})`);
      cor.color     = colorInfo.value;
      cor.opacity   = colorOpac.value;
      cor.ocupation = colorPos.value;
      
      //Aplicar ao codigo
      const GradientTypeIs = document.querySelector('#GradientType input[type=radio]:checked');
      
      if(gradientColorList.length === 0){
        CBG.click();
        GradientTypeIs.removeAttribute('checked');
        LGT.setAttribute('disabled', 'true');
        RGT.setAttribute('disabled', 'true');
        CGT.setAttribute('disabled', 'true');
      }else{
        LGT.removeAttribute('disabled');
        RGT.removeAttribute('disabled');
        CGT.removeAttribute('disabled');
      }
      
      aaaa();
    }
    
    //Caixa De Cores
    colorBox.addEventListener('input', ()=>{
      cmcg();
      backgroundGeneralCode();
    });
    
    //Informações De Cores
    colorInfo.addEventListener('input', ()=>{
             //Alternador de cores
             const colorcode = colorInfo.value;
             const r = parseInt(colorcode.substr(1,2), 16);
             const g = parseInt(colorcode.substr(3,2), 16);
             const b = parseInt(colorcode.substr(5,2), 16);
      colorInfo.style.setProperty('--GradientColorSel', `rgba(${r}, ${g}, ${b}, ${colorOpac.value})`);
      cor.color     = colorInfo.value;
      cor.opacity   = colorOpac.value;
      cor.ocupation = colorPos.value;
      backgroundGeneralCode();
    })
    
    //Função Botão de remover cor
    removeColor.addEventListener('click', ()=>{
      gradientColorList.splice(index, 1);
      const remsxD = document.querySelectorAll('#ExtraColors div');
      cmcg();
      backgroundGeneralCode();
      showColorsGradient();
    });
    
    //Opacidade
    colorOpac.addEventListener('input', ()=>{
      cmcg();
      backgroundGeneralCode();
    })
    
    //ColorPosition
    colorPos.addEventListener('input', ()=>{
      cmcg();
      backgroundGeneralCode();
    })
    
    LinearRotate.addEventListener('input', ()=>{
      if(LinearRotate.value === ''){
        LinearRotate.value = '0';
      }
      cmcg();
      backgroundGeneralCode();
    });
    GradientType.addEventListener('click', ()=>{
      cmcg();
      backgroundGeneralCode();
    });
    
    bgWidth.addEventListener('input', ()=>{
      cmcg();
      backgroundGeneralCode();
  
      if(bgWidth.value === ''){
        bgWidth.value = 'auto';
      }
    })
    
    bgHeight.addEventListener('input', ()=>{
      cmcg();
      backgroundGeneralCode();
      
      if(bgHeight.value === ''){
        bgHeight.value = 'auto';
      }
    });
    
    addColorGradient.addEventListener('click', ()=>{
      cmcg();
      backgroundGeneralCode();
    })
    
  });
}
    
bgWidth.addEventListener('input', ()=>{
  backgroundGeneralCode();

  if(bgWidth.value === ''){
    bgWidth.value = 'auto';
  }
})

bgHeight.addEventListener('input', ()=>{
  backgroundGeneralCode();
  
  if(bgHeight.value === ''){
    bgHeight.value = 'auto';
  }
});

function aaaa(){
  const GradientTypeIs = document.querySelector('#GradientType input[type=radio]:checked');
  if(GradientTypeIs.value === 'clear'){
    GradientStyleCode.innerHTML = '';
  }else{
    GradientStyleCode.innerHTML = `${GradientTypeIs.value}(`;
    gradientColorList.forEach((sus, index)=>{
               //Alternador de cores
               const colorcode = sus.color;
               const r = parseInt(colorcode.substr(1,2), 16);
               const g = parseInt(colorcode.substr(3,2), 16);
               const b = parseInt(colorcode.substr(5,2), 16);
               const rgb= `${r}, ${g}, ${b}`
      GradientStyleCode.append(`rgba(${rgb}, ${sus.opacity}) ${sus.ocupation}%, `);//.replace(/,\s*$/, "")
    });
    GradientStyleCode.innerHTML = `${GradientStyleCode.innerHTML.replace(/,\s*$/, ")")}`;
    
  }
  if(GradientTypeIs.value === 'linear-gradient'){
    GradientStyleCode.innerHTML = `${GradientTypeIs.value}(${LinearRotate.value}deg, `;
    gradientColorList.forEach((sus, index)=>{
               //Alternador de cores
               const colorcode = sus.color;
               const r = parseInt(colorcode.substr(1,2), 16);
               const g = parseInt(colorcode.substr(3,2), 16);
               const b = parseInt(colorcode.substr(5,2), 16);
               const rgb= `${r}, ${g}, ${b}`
      GradientStyleCode.append(`rgba(${rgb}, ${sus.opacity}) ${sus.ocupation}%, `);//.replace(/,\s*$/, "")
    });
    GradientStyleCode.innerHTML = `${GradientStyleCode.innerHTML.replace(/,\s*$/, ")")}`;
  }
}

function backgroundGeneralCode(){
  GeneralStyleCode.value = `background:${GradientStyleCode.innerHTML}, ${bgGeneralCode.value}; background-size:${bgWidth.value} ${bgHeight.value};  background-color:${SolidColorCode.value};`;
  if(bgGeneralCode.value === ''){
    GeneralStyleCode.value = `background:${GradientStyleCode.innerHTML}; background-size:${bgWidth.value} ${bgHeight.value}; background-color:${SolidColorCode.value};`;
  }
  if(GradientStyleCode.innerHTML === ''){
    GeneralStyleCode.value = `background:${bgGeneralCode.value}; background-size:${bgWidth.value} ${bgHeight.value}; background-color:${SolidColorCode.value};`;
  }
  // else if(SolidColorCode.value === ''){
  //   GeneralStyleCode.value = `background:${bgGeneralCode.value}; background-size:${bgWidth.value} ${bgHeight.value};`;
  // }
  previewUpdate();
}

function previewUpdate(){
  bgPreview.setAttribute('style', GeneralStyleCode.value);
}

//Fundo de Cor Solida

BGCLR.addEventListener('click', ()=>{
  
});

//Solid Color Triggers
var savedBgColor = [];

SolidColorButton.addEventListener('click', ()=>{
  
  if(SolidColorButton.dataset.level === '3'){
    SolidColorPallet.click();
    SolidColorPallet.focus();
  }
  
  SolidColorButton.dataset.level = '3';
  
  backgroundColorList();
});

SolidColorPallet.addEventListener('input', ()=>{
  document.documentElement.style.setProperty('--SolidColorBGButton', SolidColorPallet.value);
  document.documentElement.style.setProperty('--solidSelected', SolidColorPallet.value);
  codeBgColor();
})
SolidColorPallet.addEventListener('focusout', ()=>{
  const bgColorSolid = {cor: SolidColorPallet.value};
  savedBgColor.push(bgColorSolid);
  backgroundColorList();
  codeBgColor();
});

ClearSolidColor.addEventListener('click', function clearColorByTime(){
  if(savedBgColor.length > 0){
    setTimeout(clearColorByTime, 100);
    savedBgColor.splice(0,1);
    removeColorButton.click();
  }
  backgroundColorList();
})

function backgroundColorList(){
  ColorSaved.innerHTML = '';
  const removeColors = document.createElement('input');
  removeColors.classList.add('noColor');
  removeColors.setAttribute('name', 'coresDoBG');
  removeColors.setAttribute('type', 'radio');
  removeColors.setAttribute('id', 'removeColorButton');
  
  removeColors.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--SolidColorBGButton', 'url(https://i.imgur.com/4YlmgcH.png) center, #FFF');
      document.documentElement.style.setProperty('--solidSelected', '#FFF');
    SolidColorCode.value = '';
    backgroundGeneralCode();
  })
  
  
  ColorSaved.append(removeColors);
  
  savedBgColor.forEach((color, index)=>{
    const colorBoxPrint = document.createElement('input');
    colorBoxPrint.title = color.cor;
    colorBoxPrint.value = color.cor;
    colorBoxPrint.setAttribute('type', 'radio');
    colorBoxPrint.setAttribute('name', 'coresDoBG');
    colorBoxPrint.setAttribute('style', `background-color:${color.cor};`);
    colorBoxPrint.style.setProperty('--ColorBgBright', `${color.cor}`);
    
    colorBoxPrint.addEventListener('click', ()=>{
      SolidColorPallet.value = colorBoxPrint.value;
      document.documentElement.style.setProperty('--SolidColorBGButton', SolidColorPallet.value);
      document.documentElement.style.setProperty('--solidSelected', SolidColorPallet.value);
      codeBgColor();
    })
    ColorSaved.append(colorBoxPrint);
  });
  const UpdateColorSelected = document.querySelectorAll('#ColorSaved input');
}

function codeBgColor(){
  SolidColorCode.value = `${SolidColorPallet.value}`;
  backgroundGeneralCode();
}
///Clear Color


function StateCheck(){
  const StateButton = document.querySelector('.StateName');
  if(BookState.value === 'Public'){
    StateButton.innerHTML = 'VISIVEL';
    StateButton.title       = 'Esse Livro é Publico e esta Visivel em Sua Lista De Historias Publicas.';
    BookState.checked     = true;
  }else{
    StateButton.innerHTML = 'PRIVADO';
    StateButton.title       = 'Esse Livro é Privado e Não Esta Visivel em Sua Lista De Historias Publicas.';
    BookState.checked     = false;
  }
}
////////////////////////////////////////////////



// ///Hyper Warning
// const hyperBox      = document.createElement('div');
// const hyperTitle    = document.createElement('h1');
// const hyperWarning  = document.createElement('p');
// const hyperOBS      = document.createElement('h3');
// const hyperButton   = document.createElement('button');

// //Hyper Functions
// function closeHyper(){
//   document.documentElement.style.setProperty('--HyperOpacity', '0');
//   setTimeout(()=>{
//     document.documentElement.style.setProperty('--hyperChange', 'none');
//     fileSet.style.zIndex = '';
//   },300)
// }

// //Info Mode Hyper Warning
// function infoModeWarning(){
//   fileSet.style.zIndex = '100';
//   hyperhighlight.innerHTML = '';
//   document.documentElement.style.setProperty('--hyperChange', 'block');
//   document.documentElement.style.setProperty('--HHRight', '5vw');
//   document.documentElement.style.setProperty('--HHBottom', '2vw');
//   setTimeout(()=>{
//     document.documentElement.style.setProperty('--HyperOpacity', '1');
//   },100);
//   hyperTitle.innerHTML   = 'Modo Informativo';
//   hyperWarning.innerHTML = 'O Modo informativo esta ativado, apartir de agora se o cursor estiver em cima de algo que necessita de informações ira aparecer uma caixa proximo ao cursor informando o que aquele destaque faz e até dando dicas de como usa-lo.'
//   hyperOBS.innerHTML     = 'O Modo informativo pode ser ativado ou desativando quando quiser clicando no botão <b>"Modo Informativo"</b> no canto inferior direito da tela.';
//   hyperButton.innerHTML  = 'Ok'
//   hyperButton.addEventListener('click', closeHyper);
//   hyperBox.append(hyperTitle, hyperWarning, hyperOBS, hyperButton);
//   hyperhighlight.append(hyperBox);
// }




// ///// Popup De Aviso e Tutorial
//     //Ativador
// var tutorialMode = localStorage.getItem('tuto');
// if(tutorialMode === 'off'){
//   TutoMode.removeAttribute('checked');
// }else{
//   TutoMode.setAttribute('checked', 'true');
//   infoModeWarning();
// }

// bookName.addEventListener('click', ()=>{
//   if(TutoMode.checked == true){
//     localStorage.setItem('tuto', 'on');
//   }else{
//     localStorage.setItem('tuto', 'off');
//   }
//   tutotialTurnTo();
//   setTimeout(()=>{
//     if(localStorage.getItem('tuto') == 'on'){
//       infoModeWarning();
//     }
//   }, 300);
// });

//     //Box Follow Cursor
// const posXMid = Math.floor(window.innerWidth / 2);
// const posYMid = Math.floor(window.innerHeight / 2);
// const frees = (e) =>{
//   const posY = Math.floor(e.clientY);
//   const posX = Math.floor(e.clientX);
//   const reposeInfoBox = () =>{
//     if(posY > posYMid){
//       const posYResist = Math.floor(posY / 3);
//       helpPopup.style.top = `${posYResist}px`;
//     }else{
//       helpPopup.style.top = `${posY}px`;
//     }
//     if(posX > posXMid){
//       const posXResist = Math.floor(posX / 1.43);
//       helpPopup.style.left = `${posXResist}px`;
//     }else{
//       helpPopup.style.left= `${posX}px`;
//     }
//   }
  
//   console.log(e.target.dataset.infos)
//   if(e.target.dataset.infos === 'visibilidade'){
//     reposeInfoBox();
//     visibilityInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'logme'){
//     reposeInfoBox();
//     Identificação();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BGInfos'){
//     reposeInfoBox();
//     backgroundInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'PesoDeDados'){
//     reposeInfoBox();
//     DataWeight();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'SizeFont'){
//     reposeInfoBox();
//     sizingFont();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'ImageAdding'){
//     reposeInfoBox();
//     ImageInEditor();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'defaultFontChoose'){
//     reposeInfoBox();
//     deafultFont();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'MarkStyle'){
//     reposeInfoBox();
//     markPageStyle();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BookFileIs'){
//     reposeInfoBox();
//     fileNameIs();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'IndicePage'){
//     reposeInfoBox();
//     indiceStyle();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'NomeDaPagina'){
//     reposeInfoBox();
//     pageNameInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'SalvarNoDB'){
//     reposeInfoBox();
//     saveInDataBase();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BackupInPc'){
//     reposeInfoBox();
//     baixarBackup();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'PDFCreate'){
//     reposeInfoBox();
//     pintar();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'SalvarNoPc'){
//     reposeInfoBox();
//     salvarArquivo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'AbrirDoPc'){
//     reposeInfoBox();
//     abrirArquivo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BGTypeChoose'){
//     reposeInfoBox();
//     chooseColorType();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGSolid'){
//     reposeInfoBox();
//     corSolida();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGGradient'){
//     reposeInfoBox();
//     gradientColorInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGLinear'){
//     reposeInfoBox();
//     linearGradientInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGRadial'){
//     reposeInfoBox();
//     radialGradientInfo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGConic'){
//     reposeInfoBox();
//     conicGradientInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGGDeact'){
//     reposeInfoBox();
//     clearGradientInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGImage'){
//     reposeInfoBox();
//     imageBackgroundInfo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGImageLink'){
//     reposeInfoBox();
//     imageBackgroundLink();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BGIMGPosition'){
//     reposeInfoBox();
//     imageBackgroundPosition();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGIMGRepeat'){
//     reposeInfoBox();
//     imageBackgroundRepeat();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGIMGCode'){
//     reposeInfoBox();
//     imageBackgroundCode();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'BGGeneralStyle'){
//     reposeInfoBox();
//     imageBackgroundGeneral();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'AdicionandoCoresGradient'){
//     reposeInfoBox();
//     gradientColorAdd();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'GradientPosition'){
//     reposeInfoBox();
//     gradientPositionColor();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'GradientRotate'){
//     reposeInfoBox();
//     degradeRotação();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'previsualizador'){
//     reposeInfoBox();
//     backgroundPrevisualização();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'BackgroundTamanho'){
//     reposeInfoBox();
//     backgroundTamanhoInfo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'CancelarBackground'){
//     reposeInfoBox();
//     CancelBackgroundEditor();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//   }
//   else if(e.target.dataset.infos === 'ConfirmarBackground'){
//     reposeInfoBox();
//     ConfirmBackgroundEditor();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'bookstatusinformation'){
//     reposeInfoBox();
//     BookStatusInfo();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'LogInInfo'){
//     reposeInfoBox();
//     LogMeInfos();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'ServerState'){
//     reposeInfoBox();
//     tipoDeServer();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else if(e.target.dataset.infos === 'Rockey'){
//     reposeInfoBox();
//     Rockey();
//     document.documentElement.style.setProperty('--NeedHelp', '1');
//     document.documentElement.style.setProperty('--FocusTutorial', '1');
//   }
//   else{
//     document.documentElement.style.setProperty('--NeedHelp', '0');
//     document.documentElement.style.setProperty('--FocusTutorial', '0');
//   }
// };
    

// function tutotialTurnTo(){
//   if(TutoMode.checked == true){
//     document.addEventListener('mousemove', frees);
//   }else{
//     document.removeEventListener('mousemove', frees);
//   }
// }


// tutotialTurnTo();

// //
// const TipoAviso = document.createElement('h1');
// const SubTitulo = document.createElement('h2');
// const Aviso     = document.createElement('p');


// //Editor Infos
// function ShortcutHelp(){
//     helpPopup.innerHTML = '';
//     TipoAviso.innerHTML = 'ATALHOS';
//     Aviso.innerHTML     = '<i>- ctrl + S = Salvar No Banco De Dados. <br/><br/>- ctrl + Q = Exportar uma copia do arquivo para seu computador. <br/><br/>- ctrl + G = Imprimir ou exportar em PDF texto da pagina.</i>';
//     helpPopup.append(TipoAviso, Aviso);
// }

// function Identificação(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Identificação';
//   Aviso.innerHTML     = 'Você precisa se identificar para saber-mos quais historias serão exibidas...';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function visibilityInfos(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Visibilidade';
//   Aviso.innerHTML     = `Caso tenha pedido uma pagina para as pessoas verem suas historias, essa opção definira se a historia é visivel ou não para quem acessar sua pagina.`;
//   helpPopup.append(TipoAviso, Aviso);
// }

// function backgroundInfos(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Background';
//   Aviso.innerHTML     = 'Ah uma variedade de background que podem ser usados no fundo da pagina, essa area fica o codigo que compoe o fundo. <br/>Você pode escolher uma cor solida ou clicar no botão ao lado para editar um background com mais detalhes usando nosso Editor de Backgrounds';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function DataWeight(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Esse é o peso que o arquivo do editor possui, caso esse peso chegue a 1.300.000 pode haver instabilidade ao salvar. <br/> O peso atual é de <x>${charLength.innerHTML}</x>b`;
//   helpPopup.append(Aviso);
// }

// function sizingFont(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'O Tamanho da Fonte é baseada em vw (view width), preparada para se adaptar a largura da tela, então seus valores são baseados no tamanho da tela logo assim não sendo baseado em px (pixel).';
//   helpPopup.append(Aviso);
// }

// function ImageInEditor(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Adicionando Imagens';
//   Aviso.innerHTML     = 'É possivel adicionar imagens no editor, porém elas não são redimencionaveis, o ideal é ja colocar as imagens editadas no tamanho que você deseja. <br /> <i>- Ao adicionar imagem, sera pedido o link direto da imagem com final (jpg, jpeg, png, gif). <br/>- Você também pode arrastar a imagem direto do site para dentro do editor.</i>';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function deafultFont(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'A fonte padrão é a fonte selecionada para ser a fonte limpa, ou seja, se o texto não tiver nenhuma formatação a fonte padrão se mantera como fonte principal.';
//   helpPopup.append(Aviso);
// }

// function indiceStyle(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Index Da Pagina';
//   Aviso.innerHTML     = 'Index é basicamente a indice da pagina.<br/> Basicamente o numero da pagina em sua organização em ordem crescente (Indice 0 sera a primeira, indice 1 sera a proxima).';
//   helpPopup.append(TipoAviso, Aviso);
// }
// function markPageStyle(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Cor Da Marcação';
//   Aviso.innerHTML     = 'Paginas Marcadas sempre terão o fundo dourado, porém seus simbolos de marcação e cor na lista de paginas marcadas terão a cor que você selecionou para <b>Cor Da Marcação</b>.';
//   helpPopup.append(TipoAviso, Aviso);
// }
// function fileNameIs(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Nome do Arquivo ⚠️';
//   Aviso.innerHTML     = `O Nome do arquivo da historia é basicamente o nome que identifica essa historia no banco de dados, você percebera que mesmo alterando o nome da historia o nome de arquivo permanecera o mesmo, isso porque se mudar o editor não consiguira achar mais a historia. <br/>Se deseja mudar o nome de arquivo da historia recomendo que crie uma historia nova e copie o nome de arquivo da antiga para a historia nova.<br/> Arquivo atual:<i>${BookFile.value}</i>`;
//   helpPopup.append(TipoAviso, Aviso);
// }

// function pageNameInfos(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Page Name';
//   Aviso.innerHTML     = 'É importante salientar que ao mudar o nome da pagina você não estara mudando nem o nome de arquivo e nem a ordem que a pagina obedece, o nome da pagina é simplesmente estetico e informativo.';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function saveInDataBase(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Salvar ⚠️';
//   Aviso.innerHTML     = 'Ao salvar esse arquivo usando o "ctrl + S" ou o botão de salvar você estara salvando o as mudanças no banco de dados, caso queira uma copia desse arquivo em seu computador use o atalho "ctrl + Q" para salvar uma copia HTML no seu computador ou o atalho "ctrl + G" para salvar o modo de impressão.<br/> - <i>Ao Salvar no computador o arquivo continuara editavel mas não sera possivel formatalo ainda, esse arquivo abrira normalmente com o seu navegador</i><br/> - <i>Caso queira usar o arquivo sem internet é recomendado baixar o .css e deixa-lo na mesma pasta onde esta salvo seu backup.</i> <br/><br/><b>ATALHO:</b> (ctrl + S)';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function baixarBackup(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Backup';
//   Aviso.innerHTML     = 'Esse botão ira baixar o conteudo do editor em .html, e salvara em seu computador em uma pasta que vc escolher.<br/> O arquivo pode ser aberto em qualquer navegador, o arquivo também ainda pode ser editado porém não pode ser formatado.<br /> Para abrir esse arquivo offline é necessario baixar o .css do editor e esse arquivo deve ser colocado na mesma pasta onde o .html esta salvo.<br />Caso queira pegar algum conteudo do seu arquivo baixado e colocar de volta no editor basta abrir o arquivo que você baixou, copiar o que você quer colocar, e colar no editor online novamente. <br /><b>Tente sempre manter um backup salvo.</b> <br /><br /><b>ATALHO:</b> (ctrl + Q).';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function pintar(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Impressão/PDF';
//   Aviso.innerHTML     = 'Abrira a janela de impressão do navegador, isso exportara o conteudo do editor de texto para impressão, la você podera salvar o arquivo em .PDF também. <br /> Isso podera ser usado como backup também. <br/><br/><b>ATALHO:</b> (ctrl + G).';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function salvarArquivo(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Salvar No PC';
//   Aviso.innerHTML     = 'Essa funcionalidade ira criar um arquivo para ser baixado, o arquivo possui um formato proprio que tera todo o conteudo e formatação da sua pagina atual e podera ser aberto novamente clicando no botão/atalho "Abrir Do PC".<br/>Ao abrir o arquivo do PC o conteudo anterior da pagina sera substituido pelo conteudo novo.<br/><br/><b>Mantenha Sempre um Backup Salvo.</b><br/><br/><b>Atalho:</b> (ctrl + E)';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function abrirArquivo(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Abrir Do PC';
//   Aviso.innerHTML     = 'Abrira o explorador de arquivos para que você possa escolher um arquivo .foly que é salvo em seu computador ao usar o botão/atalho "Salvar No PC".<br/><br/><b>ATALHO:</b> (ctrl + O)';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function tipoDeServer(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Tipo de Servidor';
//   Aviso.innerHTML     = 'Esse servidor é <r>publico</r>, <i>isso significa que sabendo sua <b>identificação</b> qualquer um pode abrir e editar suas historias, enquanto usar essa versão certifique-se de usar uma <b>identificação</b> complexa.</i><br/><br /><i>A versão <r>publica</r> possui um banco de dados limitato, então em alguns momentos o editor pode estar indisponivel.</i><br/><br /> Caso queira um servidor particular basta ajudar na live <i>twitch.tv/RockeyDoggy</i> com um donate/pix/bits equivalente a 20R$ a cima, depois basta ir no nosso discord e pedir seu editor proprio para o @Rockey.';
//   helpPopup.append(TipoAviso, Aviso);
// }

// function Rockey(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Criado Por:';
//   Aviso.innerHTML     = 'Oi, eu sou o Rockey, esse projeto foi feito por mim e clicando no meu nick você sera encaminhado para minha <b>Twitch</b> la tera minhas lives e um botão chamado <b>"SOBRE"</b> onde tera meus contatos publicos.<br/> <i>Obrigado por usar esse projeto 😀</i>';
//   helpPopup.append(TipoAviso, Aviso);
// }



// //Background Style Infos
// function chooseColorType(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Tipos de Background';
//   Aviso.innerHTML     = 'Escolha um dos fundos para a editar e adicionar ao fundo geral...';
//   helpPopup.append(TipoAviso, Aviso);
// }
// function corSolida(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Selecione uma cor solida para adicionar ao fundo da historia.';
//   helpPopup.append(Aviso);
// }

// function gradientColorInfos(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Selecione duas ou mais cores para um fundo degrade.';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundInfo(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Escolha de 1 a 3 padrões de imagem para compor o fundo da pagina.';
//   helpPopup.append(Aviso);
// }

// function linearGradientInfos(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'As cores selecionadas seguirão uma posição linear, a 180 graus as cores seguirão de cima para baixo.';
//   helpPopup.append(Aviso);
// }

// function radialGradientInfo(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Radial fara com que as cores sigam do meio para os cantos da pagina.';
//   helpPopup.append(Aviso);
// }

// function conicGradientInfos(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Conico fara com que as cores seguirão uma rotação em cone do meio até o meio novamente.';
//   helpPopup.append(Aviso);
// }

// function clearGradientInfos(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Isso desativara todo o sistema gradient.';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundLink(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Adicione um link de imagem (.jpeg, .jpg, .png, .gif), ela aparecera instantaneamente no fundo e abrira a opção para adicionar um segundo fundo.<br /> Você pode escolher a posição da imagem e como ela repetira.';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundPosition(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Mudara a posição da imagem de fundo para centralizar, fixar ao topo, ao fundo... <br/> Isso ajudara a posicionar melhor o fundo.';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundRepeat(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Ativa o metodo de repetição da imagem de fundo sendo "X" para as laterais e "Y" para altura, para ver melhor a repetição é recomendado que modifique o tamanho do fundo logo acima na opção "Tamanho".';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundCode(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Esse codigo é o codigo do fundo da imagem atual e é adicionado ao codigo geral com as outras 3 imagens.';
//   helpPopup.append(Aviso);
// }

// function imageBackgroundGeneral(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'Esse é o codigo geral, o gradient, cor solida e imagem se juntam aqui para formar o fundo que você montou. <br/> Ao aplicar esse codigo sera adicionado ao editor.';
//   helpPopup.append(Aviso);
// }

// function gradientColorAdd(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'O degrade só passara a funcionar apartir do momento que tiver mais de 1 cor.';
//   helpPopup.append(Aviso);
// }

// function gradientPositionColor(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = 'A posição da cor do gradient deve ser feita de 0 a 100 de forma crescente: <b><br/>Primeira cor: 0 <br/>Segunda cor:  20 <br/> Terceira cor: 40<br/> quarta cor:   80<br/></b> <i>As ultimas cores devem ser sempre maiores que as primeiras cores ou do contrario a cor solidificara.</i>';
//   helpPopup.append(Aviso);
// }

// function degradeRotação(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Rotação do degrade para rotacionar o posicionamento das cores, atualmente esta rotacionado a ${LinearRotate.value} graus`;
//   helpPopup.append(Aviso);
// }

// function backgroundPrevisualização(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Essa é uma preview do fundo que você esta montando.`;
//   helpPopup.append(Aviso);
// }

// function backgroundTamanhoInfo(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `O tamanho da imagem define a repetição ou preenchimento.<br/> ao usar recomendo definir o tipo de medida logo após o numero.<br/> Tipos de Medida: <br/>[cm | px | % | vw | vh | mm | pc | pt | in | em | rem | ch | vmax | vmin]<br/> - Exemplo: [20%], [220px], [20vw], [12cm] ou [8rem]. <br/> - Quando os campos "Largura" ou "Altura" estiverem vazios serão substituidos por "auto".`;
//   helpPopup.append(Aviso);
// }

// function CancelBackgroundEditor(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Ao cancelar o background a janela sera fechada sem aplicar nada, porém quando voltar aqui estara tudo do jeito que deixou até que a pagina seja atualizada.`;
//   helpPopup.append(Aviso);
// }

// function ConfirmBackgroundEditor(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Ao Confirmar o Background o fundo sera aplicado ao editor e podera ser salvo usando o atalho ou o botão de salvar; <br/> - <i>O Fundo salvo ira ser aplicado no fundo de uma nova pagina criada</i>. <br/> - <i>Ao atializar a pagina o editor de background sera resetado independente da pagina ativa, caso queira copiar o fundo de uma pagina basta copiar o codigo da pagina antiga e colar na pagina nova</i>.`;
//   helpPopup.append(Aviso);
// }

// function BookStatusInfo(){
//   helpPopup.innerHTML = '';
//   Aviso.innerHTML     = `Isso indica se sua historiaf esta privado ou publico em sua pagina pessoal. <br/> Essa pagina esta: <b>${event.target.innerHTML}</b>`;
//   helpPopup.append(Aviso);
// }

// function LogMeInfos(){
//   helpPopup.innerHTML = '';
//   TipoAviso.innerHTML = 'Mudar Identidade/Alter ego';
//   Aviso.innerHTML     = `Um botão para você mudar seu alterego. <br/> - <i>Ao mudar de alterego mudara os livros escritos, pois essa é sua nova ou outra identificação como autor.</i>`;
//   helpPopup.append(TipoAviso, Aviso);
// }



//////////////////////////////////////////////////////////
HistoryPersonalEdit.addEventListener('click', ()=>{
  if(bookPersonalInfos.style.maxHeight === ''){
    bookPersonalInfos.style.maxHeight = '100vw';
    ManageFiles.style.left = '0vw';
    HistoryPersonalEdit.innerHTML = 'RETORNAR';
    HistoryPersonalEdit.style.opacity = '0.5';
    HistoryPersonalEdit.style.margin  = '0.5vw';
  }else{
    bookPersonalInfos.style.maxHeight = '';
    HistoryPersonalEdit.style.opacity = '';
    setTimeout(()=>{
      HistoryPersonalEdit.style.margin  = '';
      ManageFiles.style.left = '';
      HistoryPersonalEdit.innerHTML = 'EDITAR TITULO';
    }, 200);
  }
});
///////////////////////////////////////////


//Informações na janela bookAuthor bookFileName bookPagesPatch bookPages
function updateGuideInfos(){
  if(bookPages.innerHTML === ''){
    document.title   = `Escreva Sua Historia`;
  }else{
    document.title   = `${bookTitle.value} - ${PageName.value} || (${bookAuthor.innerHTML}/${bookFileName.innerHTML}/${bookPagesPatch.innerHTML}/${bookPages.innerHTML})`;
  }
  console.log(`Page Title Is: ${document.title}`)
}
updateGuideInfos();
