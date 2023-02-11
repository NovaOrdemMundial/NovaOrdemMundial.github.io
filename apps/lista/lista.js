const tipoDinheiro = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL', 
  minimumFractionDigits: 2,
});

var itemsDeCompra = [];

var listasSalvas = [];

//Lista de Listas
const listas      = JSON.parse(localStorage.getItem('MinhasListas'));
const ultimaLista = localStorage.getItem('listaAtual');

if(ultimaLista == '' || ultimaLista == null || ultimaLista == undefined || ultimaLista == '[]'){
  ListaAtual.value = 'Minha Lista';
}else{
  ListaAtual.value = ultimaLista;
  document.title = ultimaLista;
}

if(listas == '' || listas == null || listas == undefined || listas == '[]'){
  
}else{
  listasSalvas = listas;
}
//Carregar Listas Ja Salvas
function carregarListaSalva(){
  if(localStorage.getItem(ListaAtual.value) === ""){//
    localStorage.setItem(ListaAtual.value, '[]');
  }else{
  }
  const listaSalva = JSON.parse(localStorage.getItem(ListaAtual.value));
  
  if(listaSalva == null || listaSalva == '[]' || listaSalva == ''){
    itemsDeCompra = [];
    mostrarItems();
    resumoFinal();
    resultado.innerHTML = tipoDinheiro.format('0');
  }else{
    itemsDeCompra = listaSalva;
    mostrarItems();
  }
}
carregarListaSalva();

function adicionarItem(){
  const resultad = parseFloat(PrecoDoProduto.value) * parseInt(quantidade.innerHTML);
  const NovoItem = {produto: NomeDoProduto.value, preco: PrecoDoProduto.value, quantidade: quantidade.innerHTML, total: resultad,};
  itemsDeCompra.push(NovoItem);
  navSave();
  resumoFinal();
  atualizarInfos();
}

var historico;

function mostrarItems(){
  ListaDeProdutos.innerHTML = '';
  
  itemsDeCompra.forEach((item, index)=>{
    const bloco     = document.createElement('DIV');
    const produto   = document.createElement('input');
    const preco     = document.createElement('input');
    const remover   = document.createElement('button');
    const quantidade= document.createElement('button');
    const editQuant = document.createElement('span');
    
    const multiply  = parseFloat(item.quantidade) * parseFloat(item.preco);
    const result    = itemsDeCompra.reduce((total, item) => total + parseFloat(item.total), 0);
    
    //Propriedades Dos Elementos
    bloco.style.setProperty('--Quantidade', `'${item.quantidade}'`);
    produto.value       = item.produto;
    preco.value         = tipoDinheiro.format(item.total);
    editQuant.innerHTML = item.quantidade;
    editQuant.setAttribute('contenteditable', 'true');
 
    // preco.setAttribute('pattern', '[0-9]');
    bloco.append(produto, preco, remover, editQuant);
    ListaDeProdutos.append(bloco);
    
    resultado.innerHTML = tipoDinheiro.format(result);
    
    //Tudo que o Bloco de Exibição pode fazer
    bloco.addEventListener('mouseover', ()=>{
      setTimeout(()=>{
        remover.style.display = 'block';
        remover.style.opacity = '1';
      }, 1)
    })
    bloco.addEventListener('mouseout', ()=>{
      remover.style.opacity = '0';
      remover.style.display = '';
    });
    
    //Tudo que a Input Produto Pode Fazer
    produto.addEventListener('input', ()=>{
      item.produto = produto.value;
      navSave();
      resumoFinal();
    });
    
    //
    const copiarProduto = ()=>{
      pressao = setTimeout(()=>{
        NomeDoProduto.value = produto.value;
      }, 1000);
    }
    const interromperProduto = ()=>{
      clearTimeout(pressao);
    }
    produto.addEventListener('mousedown', copiarProduto);
    produto.addEventListener('mouseup', interromperProduto);
    produto.addEventListener('touchstart', copiarProduto);
    produto.addEventListener('touchend', interromperProduto);
    
    //Tudo que a Input do Preço pode fazer
    preco.addEventListener('input', ()=>{
      preco.value  = preco.value.replace(/[^0-9R$.]/g, '');
      item.preco   = preco.value;
      item.total   = preco.value * item.quantidade;
      navSave();
    });
    preco.addEventListener('focus', ()=>{
      preco.value = item.preco;
    });
    preco.addEventListener('focusout', ()=>{
      preco.value         = tipoDinheiro.format(item.total);
      const result        = itemsDeCompra.reduce((total, item) => total + parseFloat(item.total), 0);
      resultado.innerHTML = tipoDinheiro.format(result);
      resumoFinal();
      if(historico == resultado.innerHTML){
        console.log('true');
      }else{
        atualizarInfos();
      }
      
      historico = resultado.innerHTML;
    });
    
    //
    const precoCopiar = ()=>{
      pressao = setTimeout(()=>{
        PrecoDoProduto.value = preco.value;
      }, 1000);
    }
    const precoInterromper = ()=>{
      clearTimeout(pressao);
    }
    
    preco.addEventListener('mousedown', precoCopiar)
    preco.addEventListener('mouseup', precoInterromper);
    preco.addEventListener('touchstart', precoCopiar)
    preco.addEventListener('touchend', precoInterromper);
    
    //Tudo que o Span De Quantidade pode fazer
    editQuant.addEventListener('input', ()=>{
      if(isNaN(editQuant.innerHTML) || editQuant.innerHTML == ''){
        editQuant.innerHTML = 1;
      }
      item.quantidade     = parseInt(editQuant.innerHTML);
      item.total          = item.preco * item.quantidade;
      navSave();
    });
    editQuant.addEventListener('focusout', ()=>{
      editQuant.innerHTML = editQuant.innerHTML.replace(/[^0-9]/g, '');
      preco.value         = tipoDinheiro.format(item.total);
      const result        = itemsDeCompra.reduce((total, item) => total + parseFloat(item.total), 0);
      resultado.innerHTML = tipoDinheiro.format(result);
      bloco.style.setProperty('--Quantidade', `'${item.quantidade}'`);
      resumoFinal();
      atualizarInfos();
    });
    
    //Tudo Que o Botão Remover Pode Fazer
    remover.addEventListener('click', ()=>{
      itemsDeCompra.splice(index, 1);
      navSave();
      mostrarItems();
      resumoFinal();
      atualizarInfos();
    })
    
    resumoFinal();
  })
    
  // resultado.addEventListener('click', salvarTudo);
}

PrecoDoProduto.addEventListener('input', ()=>{
  // PrecoDoProduto.value = PrecoDoProduto.value.replace(',', '.');
});
PrecoDoProduto.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    if(PrecoDoProduto.value == ''){
      PrecoDoProduto.value = 0;
    }
    // quantidade.focus();
    adicionarItem();
    mostrarItems();
    NomeDoProduto.value = '';
    PrecoDoProduto.value = '';
    quantidade.innerHTML = 1;
  }
  
  if(NomeDoProduto.value.length < 1){
    if(e.key === "Backspace"){
      NomeDoProduto.focus();
    }
  }
});

NomeDoProduto.addEventListener('keydown', (e)=>{
  if(NomeDoProduto.value.length < 1){
    if(e.key === "Backspace"){
      quantidade.focus();
    }
  }
  if(e.key === "Enter"){
    PrecoDoProduto.focus();
  }
});

quantidade.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    NomeDoProduto.focus();
  }
});

quantidade.addEventListener('focusout', ()=>{
  quantidade.innerHTML = quantidade.innerHTML.replace(/[^0-9]/g, '');
  if(quantidade.innerHTML == ''){
    quantidade.innerHTML = 1;
  }
})

AddBotao.addEventListener('click', () =>{
  if(PrecoDoProduto.value == ''){
    PrecoDoProduto.value = 0;
  }
  adicionarItem();
  mostrarItems();
  NomeDoProduto.value = '';
  PrecoDoProduto.value = '';
  quantidade.innerHTML = 1;
});

AdicionarAltern.addEventListener('click', ()=>{
  AddBotao.click();
});

//Salvar Itens no Navegador
function navSave(){
  localStorage.setItem(ListaAtual.value, JSON.stringify(itemsDeCompra));
}

var preçoTotal;
var quantidadeTotal;
//Resultado final
function resumoFinal(){
  //Resumos e resultados
  ResultadoFinal.innerHTML = '';
  resumo.innerHTML = '';
  ValorTotal.innerHTML = '';
  const quantosProdutos = document.createElement('p');
  const gastoTotal      = document.createElement('p');
  const quantidadeReigis= document.createElement('p');
  
  itemsDeCompra.forEach((produto, index)=>{
    const paragrafo  = document.createElement('p');
    const quantidade = document.createElement('span');
    const nome       = document.createElement('span');
    const preco      = document.createElement('span');
    const precoTotal = document.createElement('span');
    
    //Propriedade dos Elementos
    quantidade.innerHTML = `${produto.quantidade}x`;
    nome.innerHTML       = produto.produto;
    preco.innerHTML      = tipoDinheiro.format(produto.preco);
    precoTotal.innerHTML = tipoDinheiro.format(produto.total);
    paragrafo.title      = `${tipoDinheiro.format(produto.preco)} a Unidade`;
    //Criação dos elementos
    paragrafo.append(quantidade, nome, precoTotal);
    ResultadoFinal.append(paragrafo);
    
    const PrecoTotal    = itemsDeCompra.reduce((total, item) => total + parseFloat(item.total), 0);
    const Quantidades   = itemsDeCompra.reduce((total, item) => total + parseInt(item.quantidade), 0);
    
    //Conteudo Das Criações
    quantosProdutos.innerHTML = `<b>${Quantidades}</b> Produtos no total.`; quantidadeTotal = Quantidades;
    quantidadeReigis.innerHTML= `<b>${itemsDeCompra.length}</b> Produtos diferentes foram registrados.`;
    gastoTotal.innerHTML      = tipoDinheiro.format(PrecoTotal);
    preçoTotal = PrecoTotal;
    resumo.append(quantidadeReigis, quantosProdutos);
    ValorTotal.append(gastoTotal);
  });
  
  //Modificar Informações gerais
  // setTimeout(()=>{
  //   atualizarGeral();
  // }, 100);
}

resumoFinal();


//Gerenciador de arquivo

function addListas(){
  const data = new Date();
  const dataString  = data.toLocaleDateString();
  const tempoString = data.toLocaleTimeString();
  
  const [hora, minuto] = tempoString.split(':');
    
  const dataFormato = `(${dataString}) - ${hora}:${minuto}`;
  
  const novaLista = {nome: ListaAtual.value, data: dataFormato, produtos: itemsDeCompra.length, preço: preçoTotal};
  
  const checkagem = listasSalvas.findIndex(semelhante => semelhante.nome === novaLista.nome);
  if(checkagem !== -1){
    console.log('Essa Lista ja existe');
  }else{
    listasSalvas.push(novaLista);
    localStorage.setItem('MinhasListas', JSON.stringify(listasSalvas));
  }
  projetarListaDeListas();
  listaAtual();
}

function listaAtual(){
  localStorage.setItem('listaAtual', ListaAtual.value);
  // localStorage.setItem('AtualIndex', listaSelecionada);
}
function projetarListaDeListas(){
  ListasExistentes.innerHTML = '';
  listasSalvas.forEach((listas, index)=>{
    const caixa  = document.createElement('div');
    const liNome = document.createElement('p');
    const itRegis= document.createElement('p');
    const liPreco= document.createElement('p');
    const remover= document.createElement('button');
    caixa.append(liNome, remover, itRegis, liPreco);
    liNome.innerHTML += listas.nome;
    liNome.value      = listas.nome;
    liNome.title      = listas.data;
    itRegis.innerHTML = `Produtos: ${listas.produtos}`;
    liPreco.innerHTML = `Total: ${tipoDinheiro.format(listas.preço)}`;
    remover.title     = 'Apagar Essa Lista';
    ListasExistentes.append(caixa);
    
    //Mudar Design do save selecionado
    function selecionadoDesign(){
      if(ListaAtual.value === liNome.value){
        caixa.classList.add('sel');
        setTimeout(()=>{
          remover.classList.add('bSel');
        }, 5);
      }
    }
    
    ListasExistentes.addEventListener('click', ()=>{
      if(ListaAtual.value !== liNome.value){
        caixa.removeAttribute('class');
        remover.removeAttribute('class');
      }
    });
    
    caixa.addEventListener('click', ()=>{
      ListaAtual.value = listas.nome;
      document.title   = listas.nome;
      localStorage.setItem('listaAtual', ListaAtual.value);
      listaSelecionada = index;
      carregarListaSalva();
      selecionadoDesign();
      window.atualizarInfos = ()=>{
        listas.produtos = quantidadeTotal;
        listas.preço    = preçoTotal;
        localStorage.setItem('MinhasListas', JSON.stringify(listasSalvas));
        projetarListaDeListas();
      }
    });
    
    //Botão Remover
    remover.addEventListener('click', ()=>{
      const UltimoSave = document.querySelectorAll('#ListasExistentes div')[listasSalvas.length - 2];
      itemsDeCompra = [];
      localStorage.setItem(liNome.value, itemsDeCompra)
      listasSalvas.splice(index, 1);
      localStorage.setItem('MinhasListas', JSON.stringify(listasSalvas));
      //
      mostrarItems();
      resumoFinal();
      if(index == 0){
        projetarListaDeListas();
      }else{
        setTimeout(()=>{
          UltimoSave.click();
          projetarListaDeListas();
        }, 1)
      }
    });
    
    selecionadoDesign();
    
  });
  listaClicada();
}

function listaClicada(){
  const selecionado = listasSalvas.findIndex(semelhante => semelhante.nome === ListaAtual.value);
  console.log(selecionado);
  if(selecionado !== -1){
    const clicarNesse = document.querySelectorAll('#ListasExistentes div')[selecionado];
    clicarNesse.click();
  }
}

projetarListaDeListas();


addNovaLista.addEventListener('click', ()=>{
  addListas();
});

function atualizarGeral(){
  listasSalvas[listaSelecionada].produtos = quantidadeTotal;
  listasSalvas[listaSelecionada].preço    = preçoTotal;
  projetarListaDeListas();
  localStorage.setItem('MinhasListas', JSON.stringify(listasSalvas));
  // console.log(listaSelecionada);
}


//Gerenciador de Save Portrait
gerenciar.addEventListener('click', ()=>{
  if(Gerenciador.style.display == ''){
    Gerenciador.style.display = 'block';
    document.documentElement.style.setProperty('--AbrirGerenciador', "'m'");
  }else{
    Gerenciador.style.display = '';
    document.documentElement.style.setProperty('--AbrirGerenciador', "'b'");
  }
});
