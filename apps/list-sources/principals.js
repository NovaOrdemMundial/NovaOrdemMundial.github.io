// localStorage.removeItem('Set-1')
// localStorage.removeItem('Produtos')
function loadLists(){
    const salvas = JSON.parse(localStorage.getItem('Set-1'));
    let listas = []
    salvas ? listas = salvas : null;

    return listas;
}

function sizeCheck(){
    const isPortrait = window.innerWidth < 768;
    return isPortrait;
};

function configurations(){
    const confs = [
        {
            button: 'Temas',
            desc:   'Selecione um Design diferente e novo, algo que agrade e até facilite sua navegação no site',
            categ:  'Display',
            id:     'theme'
        },
        {
            button: 'Produtos',
            desc:   'Edite e organize os produtos que você ja adicionou a alguma lista em algum momento',
            func:   itemsList,
            categ:  'Gerenciar',
            id:     'produtos'
        },
        {
            button: 'Enviar',
            desc:   'Enviar pra nuvem sua lista de compras',
            categ:  'Armazenar',
            id:     'send'
        },
        {
            button: 'Salvar Tudo',
            desc:   'Salvar todas as suas Listas De Compra no seu Dispositivo.',
            categ:  'Armazenar',
            id:     'sava-all'
        },
        {
            button: 'Carregar',
            desc:   'Carregar Outras Listas De Compra',
            categ:  'Armazenar',
            id:     'load-user'
        },
        {
            button: 'Voltar',
            desc:   'Edite e organize os produtos que você ja adicionou a alguma lista em algum momento',
            func:   clearClose,
            categ:  'Gerenciar',
            id:     'back'
        }
    ]

    return confs;
}

//NOTA: Detector de telas
window.addEventListener('resize', screenSizeCheck)
function screenSizeCheck(essentials, lists){
    const portrait = sizeCheck();

    if(portrait){
        createMobileButton();
    }
}

const receita   = document.createElement('div');
    const ntas  = document.createElement('div');
function rotate(output){

    receita.classList.add('testers');
    ntas.innerHTML = output;

    document.body.append(receita);
    receita.append(ntas);
}

//NOTA: Funções Iniciais
function layout(){
    const template = [
        {
            titulo: 'Titulo Da Lista',
            valor:  'Minha Lista De Compras',
            desc:   'Titulo da atual lista de compras',
            element:'h1',
            id:     'list_name',
            tipo:   'categoria'
        },
        {
            titulo: 'Caderno',
            valor:  '',
            desc:   'Area De Anotações',
            element:'div',
            id:     'note_field',
            tipo:   'zona'
        },
        {
            titulo: 'Titulo Da Nota Fiscal',
            valor:  'Nota De Resumo',
            desc:   'Visão Geral das Compras',
            element:'h1',
            id:     'invoice_name',
            tipo:   'categoria'
        },
        {
            titulo: 'Resumo',
            valor:  'Nota Fiscal',
            desc:   'Resumo Total da Compra',
            element:'div',
            id:     'invoice',
            tipo:   'zona'
        }
    ]
    const categorias = [
        {
            nome:   'Quantidade',
            valor:  'Qtd',
            id:     'qty'
        },
        {
            nome:   'Nome Do Produto',
            valor:  'Produtos',
            id:     'items'
        },
        {
            nome:   'Preço Somado',
            valor:  'Preço',
            id:     'price'
        }
    ]
    const gerenciar = [
        {
            area:    'Botão Adicionar Lista',
            valor:   'Nova Lista',
            id:      'lst_add',
            element: 'button',
            tipo:    'divisor'
        },
        {
            area:    'Lista de Listas',
            valor:   '',
            id:      'lst_lst',
            element: 'div',
            tipo:    'divisor'
        },
        {
            area:    'Salvar Todas As Listas',
            valor:   't',
            desc:    'Salvar Todas As Lista De Compras',
            id:      'save_all',
            element: 'button',
            active:  1,
            tipo:    'ferramenta'
        },
        {
            area:    'Modo De Remoção',
            valor:   'o',
            desc:    'Escolher e Remover Listas De Compras (Modo de Remoção)',
            id:      'remove',
            element: 'button',
            active:  2,
            tipo:    'ferramenta'
        },
        {
            area:    'Voltar A Lista',
            valor:   '➦',
            desc:    'Voltar ao modo de edição da lista (Mobile)',
            id:      'back',
            element: 'button',
            active:  1,
            tipo:    'ferramenta',
            device:  true
        }
    ]
    const adicionar_lista = [
        {
            area:   'Titulo Da Janela',
            element:'h1', 
            id:     'title', 
            valor:  'Criar Uma Nova Lista',
            tipo:   'principal'
        },
        {
            area:   'Inserir o Nome Da Lista',
            element:'input',
            id:     'name',
            place:  'Nome Da Nova Lista',
            tipo:   'prencher'
        },
        {
            area:   'Inserir Descrição',
            element:'p',
            id:     'descript',
            ghost:  'Nota ou Descrição...',
            tipo:   'prencher',
            valor:  ''
        },
        {
            area:   'Cor Dessa Lista',
            element:'input',
            id:     'color',
            valor:  null,
            tipo:   'infos'
        },
        {
            area:   'Data e Hora Atual.',
            element:'p',
            id:     'stamp',
            valor:  'DD/MM/ANO - HH:MM:SS',
            tipo:   'infos'
        },
        {
            area:   'Quantidade de Itens',
            element:'p',
            id:     'count',
            valor:  'Quantidade De Itens nessa Lista',
            tipo:   'infos'
        },
        {
            area:   'Ação Cancelar',
            element:'button',
            id:     'cancel',
            valor:  'Cancelar',
            tipo:   'buttons'
        },
        {
            area:   'Ação Confirmar',
            element:'button',
            id:     'save',
            valor:  'Confirmar',
            tipo:   'buttons'
        },
        {
            area:   'Ação Remover',
            element:'button',
            id:     'remove',
            valor:  'o',
            tipo:   'buttons'
        }
    ]

    return {template, categorias, gerenciar, adicionar_lista}
}
function carregarProdutos(){
    const productos = JSON.parse(localStorage.getItem('Produtos'));

    return productos;
}
// document.addEventListener('visibilitychange', ()=>{
//     document.visibilityState === 'visible' ? location.reload() : null;
// });

creationBefore();
function creationBefore(){//NOTA: Background e Centralização
    document.body.innerHTML = '';
    //CREATE: Criações Raiz
    const personalBackground = document.createElement('div');
    const layoutPositions    = document.createElement('div');
    const managerPositions   = document.createElement('div');
    const resumes            = document.createElement('div');
    let listField;

    //VAR: Buscar informações
    const portrait = sizeCheck();

    //ATTR: Atributos Base
    personalBackground.classList.add('Def-Bg');
    layoutPositions.classList.add('Def-Lt');
    managerPositions.classList.add('mn-mn');
    portrait ? (
        personalBackground.classList.add('mb'),
        layoutPositions.classList.add('mb'),
        managerPositions.classList.add('mb')
    ) : null

    //APPEND: Primeira inserção
    document.body.append(personalBackground);
    personalBackground.append(managerPositions, layoutPositions);

    let essentials = {
        personalBackground,
        layoutPositions,
        managerPositions,
        listField,
        resumes
    }
    layoutForm(essentials);
    manager(essentials);
    configs();
}

function layoutForm(essentials, lists){//NOTA: Layout Titulo, Caderno e Nota Fiscal
    //CREATE: Criações e assimilações necessarias
    const {template, categorias} = layout();
    const notepad       = document.createElement('div');
    const categoBox     = document.createElement('div');
    const fakeNotePad   = document.createElement('div');
    const lastField     = document.createElement('div');
        const nullBox   = document.createElement('div');
        const addButton = document.createElement('button');

    //VAR: Variaveis De Resgate e considerações
    const listas = loadLists();//NOTA: Resgata todas as listas carregadas
    const l = parseInt(localStorage.getItem('UltimaLista'));//> Carrega a ultima lista clicada
    const lastIs = l ? listas.find(all => all.stamp === l) : false; //> Compara pra checar se a ultima lista carregada existe
    lastIs ? lists = lastIs : null; //> Se existir substitui a variavel que recebe cliques pelo objeto comparado

    //ATTR: Atributos e aplicações
    essentials.layoutPositions.innerHTML = '';
    isNaN(l) ? addButton.textContent = 'Selecione/Adicione Uma Lista' : addButton.textContent = 'Adicionar Item';
    addButton.classList.add('add-frm');
    

    //APPEND: Inserções simples e compartilhadas
    notepad.append(categoBox);
    lastField.append(nullBox, addButton, essentials.resumes);

    //NOTA: Eventos e ForEachs
    template.forEach(layout =>{//NOTA: Criar e organizar os Elementos Da Area Principal
        //CREATE: Criação Unica
        const elements = document.createElement(layout.element);
        //ATTR: Divisão de Atributos (Pode ter alguns eventos)
        layout.tipo === 'categoria' ? elements.textContent = layout.valor : null;
        layout.id === 'list_name' ? (//> Caso uma lista seja clicada ou tenha sido clicada em algum momento Substitui o Titulo Da Tabela pelo nome da Lista
            lists ? elements.textContent = lists.nome : layout.valor,
            elements.contentEditable = true,
            elements.addEventListener('keydown', prevents),
            elements.addEventListener('focusout', format)
        ) : null;
        
        //APPEND: Divisão dos Appends
        layout.id === 'note_field' ? (
                essentials.listField = elements,
                notepad.append(elements, fakeNotePad, lastField),
                fakeList(fakeNotePad)
        ) : essentials.layoutPositions.append(elements);
        layout.id === 'invoice' ? (
            essentials.invoice = elements,
            listForm(essentials)
        ) : null;

        layout.id === 'list_name' ? (essentials.layoutPositions.append(notepad), categories()) : null;

        //VAR: Eventos e Funções
        function prevents(e){
            e.key === 'Enter' ? e.preventDefault() : null;
        }
        function format(e){
            e.target.innerHTML === e.target.innerHTML.replace(/<div>/g, '').replace(/<\/div>/g, '<br>');
            const listas = loadLists();
            const l = parseInt(localStorage.getItem('UltimaLista'));
            const listaAgora =  listas.find(all => all.stamp === l);
            listaAgora.nome = e.target.innerHTML;
            localStorage.setItem('Set-1', JSON.stringify(listas));
            manager(essentials);
        }
    });

    //NOTA: Eventos
    isNaN(l) ? addButton.addEventListener('click', ()=> essentials.managerPositions.querySelector('button:nth-of-type(1)').click()) : 
        addButton.addEventListener('click', ()=> addWindow(essentials, lists));

    console.warn(l)


    
    function categories(){//NOTA: Organizar Categorias
        const categoriesField = document.createElement('div');
        categorias.forEach(cat =>{
            const catBox = document.createElement('div');
        
            catBox.textContent = cat.valor;
        
            categoBox.append(categoriesField);
            categoriesField.append(catBox);
        });
    }
    
    screenSizeCheck(essentials, lists);
}

function listForm(essentials, lists){//NOTA: Montar Area Da Lista
    const listas = loadLists();
    last = parseInt(localStorage.getItem('UltimaLista'));

    const update = {
        amount: document.querySelector('.ths-amt'),
        price:  document.querySelector('.ths-prc')
    }
    if(lists){
        carregarLista(ler = lists);
    }else{
        if(last){//> Primeiro Checa Se Não Foi derivado de um clique
            const buscar =  listas.find(lsts => lsts.stamp === last);
            if(buscar){//> Tenta resgatar o ultimo clique se não foi derivado de um clique
                carregarLista(ler = buscar);
            }else{//> Se não encontra o ultimo clique tenta identificar o ultimo item adicionado
                if(listas[0]){
                    carregarLista(ler = listas[0]);
                }else{//ERR Caso não existe Nenhuma Lista
                    localStorage.removeItem('UltimaLista');
                }
            }
        }else{//ERR Caso não encontre lista clicada ou salva
            
        }
    }
    function carregarLista(ler){//NOTA: Carrega Nossa Lista
        //VAR: Variaveis De Busca e Construção
        const getInList = listas.find(gap => gap.stamp === ler.stamp);
        essentials.invoice.innerHTML = '';
        //CREATE: Criações fundamentais
        const notaCate = {
            box: document.createElement('div'),
            in: {
                q: document.createElement('p'),
                n: document.createElement('p'),
                p: document.createElement('p')
            }
        }
        const {...ins} = notaCate.in;

        //ATTR: Atribuições Iniciais Pra Categorias
        ins.q.textContent = 'QTD';
        ins.n.textContent = 'Item/Produto';
        ins.p.textContent = 'Preço';

        //APPEND: Aplicações e Inserções Iniciais
        essentials.invoice.append(notaCate.box);
        notaCate.box.append(...Object.values(ins));

        if(ler){//> Verifica se existe alguma lista
            essentials.listField.innerHTML = '';
            const getTotal = ler.itens.reduce((somador, lsts) =>  somador + lsts.total, 0);
            const allItens = ler.itens.reduce((somar, qtd)=> qtd.quantidade + somar, 0);
            const total = formmatMoney(denheiro = getTotal);
            totalResume = total;
            ler.itens.forEach((item, i) =>{//> Carrega Os Itens Quando Encontra uma Lista
                listFormmat(item, i);
                invoiceFormmat(item, i, total);
            });
            essentials.resumes.textContent = total;
            getInList.itens = ler.itens;
            update.amount ? update.amount.innerHTML = `<b>${allItens}</b> Itens` : null;
            update.price  ? update.price.textContent  = total : null;
            localStorage.setItem('Set-1', JSON.stringify(listas));
        }else{
            // creat eAnButton()//> Cria um Botão para gerar uma nova lista caso não encontre nenhuma lista
        }
        //NOTA: Formação da Lista de Compras selecionada
        function listFormmat(item, i){
            //CREATE: Cria a Caixa dos itens com o setor de quantidade, nome e preço
            const produto = {
                box:     document.createElement('div'),
                qtd:     document.createElement('div'),
                nome:    document.createElement('div'),
                preco:   document.createElement('div')
            }
            const {box, ...infos} = produto;

            //ATTR: Adiciona os atributos e aplicações ideais pra cada Item
            produto.qtd.textContent     = item.quantidade;
            produto.nome.textContent    = item.produto;
            produto.preco.textContent   = formmatMoney(denheiro = (item.quantidade * item.preço));
            produto.qtd._tipo   = 'amount';
            produto.preco._tipo = 'price';
            produto.nome._tipo  = 'name';

            //APPEND: Aplica o append de forma dinamica e simples das caixas na lista e dos setores na caixa
            essentials.listField.append(box);
            box.append(...Object.values(infos));

            //NOTA: Listeners Especificos
            produto.qtd.addEventListener('click', editorProperties);
            produto.nome.addEventListener('click', editorProperties);
            produto.preco.addEventListener('click', editorProperties);

            //NOTA: Eventos
            function editorProperties(e){
                const edit = item;
                const lists = ler;
                edit.locale = e.target._tipo;
                addWindow(essentials, lists, edit);
            }
        }
        function invoiceFormmat(item, i, total){
            //CREATE: Criação Do Padrão da Estrutura
            const estrutura = {
                box: document.createElement('div'),
                cate:{
                    qtd: document.createElement('p'),
                    nom: document.createElement('p'),
                    prç: document.createElement('p'),
                    ext: document.createElement('p'),
                    nome : {
                        text: document.createElement('span'),
                        line: document.createElement('span')
                    }
                }
            }
            const {qtd, nom, prç, ext} = estrutura.cate;
            const {text, line} = estrutura.cate.nome;

            //ATTR: Atribuição De Propriedades e conteudo
            qtd.textContent = item.quantidade;
            text.textContent= item.produto;
            prç.textContent = formmatMoney(denheiro = item.preço);

            //APPEND: Aplicações e Inserções
            essentials.invoice.append(estrutura.box);
            estrutura.box.append(qtd, nom, prç);
            nom.append(text, line);

            i === ler.itens.length - 1 ? invoiceResume(total) : null; //IMPORTANT: Timming Exato da Criação da Linha de Resumo Total
        }

        function invoiceResume(total){//NOTA: Cria O Resumo Total
            const caixa = {
                principal: document.createElement('div'),
                int: {
                    esq: document.createElement('div'),
                    cen: document.createElement('div'),
                    dir: document.createElement('div')
                }
            }
            const {esq, cen, dir} = caixa.int;
            
            esq.textContent = 'Total:';
            cen.textContent = formmatMoney(denheiro = total);

            essentials.invoice.append(caixa.principal);
            caixa.principal.append(esq, cen, dir);
        }
        createMobileButton();
    }

}
function fakeList(fakeNotePad){
    const fakeProducts = Array.from({length: 15});

    fakeProducts.forEach(fakes=>{
        const fakeBox       = document.createElement('div');
            const fakeQtd   = document.createElement('div');
            const fakeNome  = document.createElement('div');
            const fakePreco = document.createElement('div');

        fakeQtd.textContent = '0';
        fakeNome.textContent = 'void';
        fakePreco.textContent = '0.00';

        fakeNotePad.append(fakeBox);
        fakeBox.append(fakeQtd, fakeNome, fakePreco);
    });
}

function manager(essentials){//NOTA: Montar Area de Gerenciamento
    const {gerenciar} = layout();
    const portrait = sizeCheck();
    const managerField = document.createElement('div');
    let listsOfLists;
    let editMode  = 0;

    extruture();
    function extruture(){
        essentials.managerPositions.innerHTML = '';
        managerField.innerHTML = '';
        gerenciar.forEach(mod =>{//NOTA: Area De Gerenciamento
            //CREATE: Padrão de Criação
            const boxes     = document.createElement(mod.element);
    
            //ATTR: Padrões de Atribuição
            mod.element === 'button' ? boxes.textContent = mod.valor : null;
            mod.active ? (
                mod.active === editMode ? boxes.classList.add('act-md') : null
            ) : null;
            mod.id === 'back' ? (
                boxes.classList.add('m-bck'),
                boxes.addEventListener('click', mobileMenuClose)
            ) : null;
    
            //APPEND: Padrões e Variaveis de Inserção
            mod.tipo === 'ferramenta' && !mod.device ? (managerField.append(boxes), boxes.title = mod.desc) : essentials.managerPositions.append(boxes);
            mod.id === 'lst_add' ? essentials.managerPositions.append(managerField) : null;
            portrait && mod.device ? (
                managerField.append(boxes)
            ) : null;
            
            //NOTA: Eventos
            mod.id === 'lst_lst' ? (showAllLists(boxes, editMode, essentials), listsOfLists = boxes) : null; //BACK: Lista De Listas
            //> Ativadores
            mod.id === 'lst_add' ? boxes.addEventListener('click', ()=> openAdd(listsOfLists, essentials)) : null;
    
            mod.id === 'remove' ? boxes.addEventListener('click', () => mode(val = 2)) : null;
    
            function mode(val){
                mod.active === editMode ? editMode = 0 : editMode = val;
                extruture();
            }
        })

        function mobileMenuClose(){
            essentials.managerPositions.classList.remove('slide-In');
            mobileButtonState();
        }
    }
    essentials.managerPositions = essentials.managerPositions;
}

function showAllLists(boxes, editMode, essentials){//NOTA: Exibir Listas Na Area de Gerenciamento
    boxes.innerHTML = '';
    const listas = loadLists();
    const l = parseInt(localStorage.getItem('UltimaLista'));

    listas.forEach((lists, i) =>{
        //CREATE: Criações Basicas
        const listBox       = document.createElement('div');
            const contentBox    = document.createElement('div');
                const listName  = document.createElement('h1');
                const listCount = document.createElement('h3');
                const listPrice = document.createElement('h3');
                const listStamp = document.createElement('h4');
                const stampPast = document.createElement('p');
            const removeList = document.createElement('button');

        //VAR: Variaveis De Inserção
        const rotatePos = Math.floor(Math.random() * 20);
        const rotatePos2 = Math.floor(Math.random() * 25);
        const itensQTD = lists.itens.reduce((quantidade, lst) => lst.quantidade + quantidade, 0);
        const totalPrice = lists.itens.reduce((somar, lst) => lst.total + somar, 0);
        const priceIs = formmatMoney(totalPrice);
        const {timeLineDate} = formattDate(stamp = lists.stamp);

        //ATTR: Atributos
        listName.textContent  = lists.nome,
        listCount.innerHTML = `<b>${itensQTD}</b> Itens`;
        listStamp.innerHTML = timeLineDate; //BACK: Ajustar a formatação da Data
        listPrice.textContent = priceIs;
        lists.cor ? listBox.style.setProperty('--ListColor', lists.cor) : listBox.style.setProperty('--ListColor', '#FF9');
        listBox.style.setProperty('--RandomPos', `${rotatePos}%`)
        listBox.style.setProperty('--RandomPos2', `${rotatePos2}%`)
        listBox.style.setProperty('--LayerOrder', (listas.length - i) + 5);
        listBox.style.setProperty('--ListName', `'${lists.nome}'`);
        removeList.textContent = 'o';
        l === lists.stamp ? (
            listCount.classList.add('ths-amt'),
            listPrice.classList.add('ths-prc'),
            listBox.classList.add('pc-sel')
        ) : null;
        listas[l] ? (
            listas[l].stamp === lists.stamp ? listBox.classList.add('sel-nw') : null
        ) : null;
        stampPast.innerHTML = dateRemaining(stamp = lists.stamp);

        //APPEND: Appends
        boxes.append(listBox);
        listBox.append(contentBox);
        contentBox.append(listName, listPrice, listCount, listStamp, stampPast);

        //NOTA: EVENTOS
        editMode === 2 ? (
            listBox.append(removeList),
            listBox.classList.add('in-ed')
        ) : listBox.addEventListener('click', focar);

        removeList.addEventListener('click', ()=>{
            let lastOne  = parseInt(localStorage.getItem('UltimaLista'));
            const p = listas.findIndex(get => get.stamp === lists.stamp)
            listas.splice(p, 1);
            listBox.remove();
            localStorage.setItem('Set-1', JSON.stringify(listas));
            listas[0] ? localStorage.setItem('UltimaLista', listas[0].stamp) : localStorage.removeItem('UltimaLista');
            layoutForm(essentials)
        });

        
        function focar(){
            const checks = {
                amount: document.querySelector('.ths-amt'),
                price:  document.querySelector('.ths-prc'),
                sel:    document.querySelector('.pc-sel')
            }
            const checkGuide = document.querySelector('.slide-In');
            checks.amount ? checks.amount.removeAttribute('class') : null;
            checks.price ? checks.price.removeAttribute('class') : null;
            checks.sel ? checks.sel.removeAttribute('class') : null;
            listCount.classList.add('ths-amt');
            listPrice.classList.add('ths-prc');
            listBox.classList.add('pc-sel');
            localStorage.setItem('UltimaLista', lists.stamp);
            layoutForm(essentials, lists);
            checkGuide ? (
                checkGuide.classList.remove('slide-In'),
                mobileButtonState()
            ) : null;
        }
    })
}

function openAdd(listsOfLists, essentials){//NOTA: Função Adicionar
    const listas        = loadLists();
    const {adicionar_lista} = layout();
    const addWin        = document.createElement('div');
    const tab           = document.createElement('div');
        const form      = document.createElement('div');
        const defInfos  = document.createElement('div');
        const buttons   = document.createElement('div');
    const clickTrap     = document.createElement('div');
    let pressThis;
    let dateUpdate;
    let colorField = randomColor();
    let noteField;

    addWin.classList.add('add-local');

    document.body.append(addWin);
    addWin.append(tab, clickTrap);
    
    adicionar_lista.forEach(adc=>{
        const initials = document.createElement(adc.element);
        
        adc.valor ? initials.textContent = adc.valor : null;
        adc.place ? initials.placeholder = adc.place : null;
        adc.ghost ? initials.style.setProperty('--Placeholder', `'${adc.ghost}'`) : null;
        adc.id === 'descript' ? (
            initials.contentEditable = true, 
            noteField = initials,
            noteField.style.setProperty('--CustomColor', colorField)
        ) : null;
        adc.id === 'stamp' ? dateUpdate = initials : null;
        adc.id === 'count' ? initials.textContent = '0 Produtos' : null;
        adc.id === 'color' ? (
            initials.type = 'color',
            initials.value = colorField
        ) : null;

        adc.tipo === 'prencher'     ? (form.append(initials)) :
            adc.tipo === 'infos'    ? (defInfos.append(initials)) : 
            adc.tipo === 'buttons'  ? (buttons.append(initials)) : tab.append(initials);

        adc.tipo === 'prencher' ? initials.addEventListener('focusout', sendVal) : null;
        adc.id === 'cancel'   ? initials.addEventListener('click', fechar) : 
            adc.id === 'descript' ? initials.addEventListener('focusout', formatThis, initials.addEventListener('input', detect)) :
            adc.id === 'color' ? (initials.addEventListener('input', colorSwaps), initials.addEventListener('focusout', colorGet)) :
            adc.id === 'save' ? initials.addEventListener('click', addList) : null;
        adc.id === 'name' ? pressThis = initials : null;

        function sendVal(){
            initials.value ? adc.valor = initials.value : null;
        }

        function formatThis(){
            initials.innerHTML = initials.innerHTML.replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');
            initials.textContent.length < 1 ? initials.innerHTML = '' : null;
            adc.valor = initials.innerHTML;
        }
        function detect(){
            initials.textContent.length > 0 ? initials.style.setProperty('--Placeholder', `none`) : initials.style.setProperty('--Placeholder', `'${adc.ghost}'`);
        }
        function colorSwaps(){
            noteField.style.setProperty('--CustomColor', initials.value);
        }
        function colorGet(){
            adc.valor = initials.value;
        }
    });

    tab.append(form, defInfos, buttons);
    pressThis.focus();

    let datePlay = setInterval(()=>{
        const data = new Date();
        const {timeAndDate} = formattDate(stamp = data);
        dateUpdate.textContent = timeAndDate;
    });

    clickTrap.addEventListener('click', fechar);

    function fechar(){
        addWin.remove();
        clearInterval(datePlay);
    }

    function addList(){
        const listName = adicionar_lista.find(lst => lst.id === 'name');
        const listDesc = adicionar_lista.find(lst => lst.id === 'descript');
        const listColor= adicionar_lista.find(lst => lst.id === 'color');
        const listToSend = {
            nome:   listName.valor,
            desc:   listDesc.valor.replace(/<div>/gi, '<br>').replace(/<\/div>/gi, ''),
            cor:    listColor.valor ? listColor.valor : colorField,
            stamp:  Date.now(),
            itens: []
        }
        listas.unshift(listToSend);
        localStorage.setItem('Set-1', JSON.stringify(listas));
        showAllLists(boxes = listsOfLists, editMode = 0, essentials);
        selectLast(entry = listToSend.stamp);
        fechar();
    }
}

function addWindow(essentials, lists, edit){
    //NOTA: Checa se é edição ou adição
    let lay_temp = [
        {
            field:  'Adicionar Novo Item',
            local:  'main',
            id:     'title',
            element:'h1'            
        },
        {
            field:  'Nome Do item',
            local:  'form',
            place:  'Nome do produto',
            type:   'text',
            val:    edit ? edit.produto : '',
            id:     'name',
            element:'div',
            tIndex: 1       
        },
        {
            field:  'Quantidade',
            local:  'form',
            type:   'text',
            place:  0,
            val:    edit ? edit.quantidade : 1,
            id:     'amount',
            element:'div',
            tIndex: 2   
        },
        {
            field:  'Preço Da Unidade',
            local:  'form',
            type:   'number',
            val:    edit ? edit.preço : '',
            place:  0.00,
            id:     'price',
            element:'div',
            tIndex: 3
        },
        {
            field:  'Cancelar',
            local:  'buttons',
            id:     'cancel',
            element:'button'
        },
        {
            field:  edit ? 'Salvar' : 'Adicionar',
            local:  'buttons',
            id:     'add',
            element:'button'            
        },
        {
            field:  'Apagar',
            local:  'edit_tool',
            id:     'delete',
            element:'button'            
        }
    ]

    //CREATE: Criações Iniciais
    const window    = document.createElement('div');
    const clickTrap = document.createElement('div');
    const lay_tab   = document.createElement('div');
    const formField = document.createElement('div');
    const buttField = document.createElement('div');
    const detail    = document.createElement('p');
    const resume    = document.createElement('section');
    const searchBox = document.createElement('section');

    //VAR: Variaveis de transferencia
    let quantidade = lay_temp[2].val;
    let valor = lay_temp[3].val;
    edit ? resume.classList.add('ed-md') : null;
    searchBox.style.display = 'none';

    //ATTR: Atributos Principais
    window.classList.add('add-tb');
    detail.textContent = 'x';

    //APPEND: Appends Das Criaçõe
    document.body.append(window);
    window.append(lay_tab, clickTrap);

    lay_temp.forEach(layer=>{//IMPORTANT: Construção do Layout
        //NOTA: Criações Necessarias
        const elements = document.createElement(layer.element);
        const forms = layer.local === 'form' ? {
            title:   document.createElement('h2'),
            input:   document.createElement('input'),
            buttons: document.createElement('div'),
            next:    document.createElement('button'),
            back:    document.createElement('button'),
            remove:  document.createElement('button'),
            salvar:  document.createElement('button'),
            persis: document.createElement('form')
        } : null;

        //ATTR: Atributos Necessarios
        /\b(main|buttons|edit_tool)\b/.test(layer.local) ? elements.textContent = layer.field : null;
        //> Ações e aplicações individuais do layout
        forms ? (
            forms.title.textContent = layer.field, 
            forms.input.placeholder = layer.place,
            forms.input.value       = layer.val,
            layer.type ? forms.input.type = layer.type : null,
            forms.next.textContent  = 'Proximo',
            forms.back.textContent  = 'Voltar',
            forms.salvar.textContent= 'Salvar',
            forms.next.addEventListener('click', focusNext),
            forms.back.addEventListener('click', backTo),
            forms.input.addEventListener('keydown', shortNext),
            // forms.input.addEventListener('keydown', shortBack),
            forms.input.addEventListener('focus', focusDesign),
            forms.input.addEventListener('blur', unFocusDesign),
            forms.input.addEventListener('input', swapInfos),
            forms.remove.textContent = 'o',
            forms.remove.addEventListener('click', deletar),
            forms.salvar.addEventListener('click', sendItem)
        ) : null;
        layer.id === 'amount' ? (
            forms.input.style.setProperty('--CharSize', `${forms.input.value}ch`),
            forms.input.enterKeyHint = 'next',
            forms.input.addEventListener('keydown', preventions),
            forms.input.addEventListener('input', resSet),
            forms.input.inputMode = 'decimal',
            forms.next._who = true
        ) : 
        layer.id === 'price' ? (
            forms.input.placeholder = formmatMoney(denheiro = layer.place),
            forms.input.addEventListener('input', currencyCorrect),
            forms.input.addEventListener('keydown', preventions),
            forms.input.value !== '' ? (
                elements.style.setProperty('--CurrencyNeed', `'R$'`),
                forms.input.value = valor.toFixed(2)
            ) : null,
            edit ? forms.next.textContent = 'Salvar' : forms.next.textContent = 'Adicionar',
            // forms.back.textContent = 'Quantidade',
            forms.input.enterKeyHint = 'done'
        ) : 
        layer.id === 'name' ? (
            forms.input.enterKeyHint = 'next',
            forms.input.addEventListener('input', buscar),
            // forms.next.textContent = 'Quantidade',
            forms.back.textContent = 'Geral'
        ) : 
        layer.id === 'cancel' ? (elements.addEventListener('click', closeAdd)) : //> Funções de Finalização
        layer.id === 'add' ? (elements.addEventListener('click', sendItem)) : null;
        // layer.type ? forms.input.type = layer.type : null;

        //APPEND: Appends Necessarios
        layer.local === 'main' ? (
            lay_tab.append(elements),
            lay_tab.append(formField),
            lay_tab.append(buttField)
        ) : 
            layer.local === 'form' ? (
                formField.append(elements), 
                elements.append(forms.title, forms.input), 
                // layer.id === 'amount' ? (forms.persis.append(forms.input), elements.append(forms.persis)) : null,
                layer.id === 'name' ? elements.append(searchBox) : null,
                elements.append(forms.buttons), 
                forms.buttons.append(forms.back, forms.next, resume),
                edit ? forms.buttons.append(forms.remove, forms.salvar) : null,
                layer.id === 'price' ? forms.salvar.remove() : null
            ) : 
                layer.local === 'buttons' ? (
                    buttField.append(elements)
                ) : 
                layer.local === 'edit_tool' ? (
                    edit ? buttField.append(elements) : null
                ) : null;
            layer.id === 'amount'   ? formField.append(detail) : null;

        //NOTA: Eventos e Funções
        layer.id === 'delete' ? elements.addEventListener('click', deletar) : null; 
        // layer.local === 'form' ? elements.addEventListener('focusout', returnToInfo) : null;

        //>Alternar Foco de input
        function focusNext(){
            returnToInfo();
            const nextIs = formField.querySelectorAll('div > input:nth-of-type(1)');
            nextIs[layer.tIndex] ? (
                nextIs[layer.tIndex].focus()
            ) : (
                sendItem()
            ); //NOTA: ação de Adicionar
        }

        function backTo(e){
            const nextIs = formField.querySelectorAll('div > input:nth-of-type(1)');
            nextIs[layer.tIndex - 2] ? (
                nextIs[layer.tIndex - 2].focus(),
                nextIs[layer.tIndex - 2].select()
            ) : null; //BACK: Não esquecer de Inserir ação de cancelar no Null
        }
        //> Design De Item Focado
        function focusDesign(){
            forms.input.select();
            setTimeout(_=> (
                elements.classList.add('inFocus'),
                lay_tab.style.setProperty('--Visible', '1')
            ), 100);
        }
        function unFocusDesign(){
            setTimeout(() => {
                elements.classList.remove('inFocus');
                layer.id === 'name' ? searchBox.style.display = 'none' : null;
                lay_tab.style.setProperty('--Visible', '0');
            }, 10)
        }
        function swapInfos(){
            /\b(name|amount)\b/.test(layer.id) ? (
                layer.val = forms.input.value
            ) : null;
        }

        //NOTA: Sistema De Digitação Monetaria
        function currencyCorrect(e){
            const inputPrevent = e.target.value.replace(/\D/g, '');

            const currency = returnCurrency(inputPrevent);
            e.target.value = currency;
            valor     = forms.input.value === '' ? 0 : parseFloat(currency);
            somarResumo();
        }
        function returnCurrency(inputPrevent){
            const isNumb = parseInt(inputPrevent || '0', '10');
            const currency = (isNumb / 100).toFixed(2);

            return currency;
        }
        function preventions(e){
            !/^[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Enter' ? e.preventDefault() : null;
            layer.id === 'price' ? (
                e.target.value !== '' ? elements.style.setProperty('--CurrencyNeed', `'R$'`) : elements.style.setProperty('--CurrencyNeed', `none`)
            )  : null ;
            e.target.value === '' ? e.target.value = 0 : null;
        }

        function shortNext(e){
            if(e.key === 'Enter'){
                e.preventDefault();
                focusNext();
            }
        }
        function shortBack(e){
            if(e.key === 'Enter'){
                backTo();
            }
        }
        //NOTA: Retornar Para A Informação principal
        function returnToInfo(){
            layer.val = forms.input.value;
        }
        function resSet(){
            quantidade = forms.input.value === '' ? 0 : parseFloat(forms.input.value);
            forms.input.value !== '' ? forms.input.value = parseInt(forms.input.value) : null;
            isNaN(forms.input.value) ? (
                forms.input.value = 1, 
                forms.input.select()
            ) : null;
            somarResumo();
        }
        function buscar(e){
            const local    = searchBox;
            const keyPress = forms.input.value; 
            createProductSearch(keyPress, local, e);
        }

        //> Precisa ser a resposta final
        edit ? (
            layer.id === edit.locale ? (
                forms.input.focus(),
                forms.input.select()
            ) : null
        ) :
            layer.id === 'name' ? forms.input.focus() : null;
    });

    clickTrap.addEventListener('click', closeAdd);
    
    //NOTA: Funções Finais
    function sendItem(e){
        const noteAdd = {
            produto:    lay_temp[1].val,
            quantidade: parseInt(lay_temp[2].val),
            preço:      valor,
            total:      (quantidade * valor),
            code:       edit ? edit.code : Date.now()
        }
        //> Vai checar se é uma edição
        let ed = edit ? lists.itens.findIndex(org=> org.code === edit.code) : false;
        edit ? (
            lists.itens[ed] = noteAdd,
            salvarProduto()
        ) : (
            lists.itens.push(noteAdd),
            salvarProduto()
        );
        listForm(essentials, lists);
        closeAdd();
    }
    function closeAdd(){
        window.remove();
    }
    somarResumo();
    function somarResumo(){
        !valor ? valor = 0 : null;
        const currencyNow = formmatMoney(denheiro = (quantidade * valor));
        resume.textContent = currencyNow;
    }

    function deletar(){
        const line = lists.itens.findIndex(org=> org.code === edit.code)
        lists.itens.splice(line, 1);
        listForm(essentials, lists);
        closeAdd();
    }

    function salvarProduto(){//IMPORTANT: Salva ou substitui lista de produtos
        const produto_nome = lay_temp[1].val;
        const checkes   = productoCheck(produto_nome);
        const productos = carregarProdutos();
        //NOTA: Compara pra poder setar o valor minimo do produto atual
        const min = checkes.existe ? (
            (valor < checkes.min) ? valor : checkes.min //> Se o Valor for menor que o minimo ele substitui o minimo pelo valor atual
        ) : valor; //> Se O produto não foi registrado o valor atual é definido como minimo
        //NOTA: Compara pra setar o valor maximo
        const max = checkes.existe ? (
            (valor > checkes.max) ? valor : checkes.max //> Se o Valor for maior que o maximo vai setar o valor atual, se não for mantém
        ) : valor; //> Seta o Valor atual como maximo caso o produto não exista
        //NOTA: Verifica se o produto vai ser modificado pra atualizar o stamp
        const needModify = valor > checkes.max || valor < checkes.min || !checkes.existe ? true : false;
        const l = checkes.existe ? productos.findIndex(nome => nome.produto === lay_temp[1].val) : false;

        const producto_ref = {
            produto:    lay_temp[1].val,
            stamp:      needModify ? Date.now() : checkes.stamp, //IMPORTANT: Vai mudar a data caso o produto seja modificado
            first:      !checkes.existe ? Date.now() : checkes.first, //IMPORTANT: Só vai salvar a data se foi adicionado pelo primeira vez
            cor:        !checkes.cor ? randomColor() : null, //> Caso não possua uma cor ele adicionara
            min:        min,
            max:        max
        }

        //NOTA: Enviar se não existir ou substituir se existir
        checkes.existe ? productos[l] = producto_ref : productos.push(producto_ref);
        needModify ? localStorage.setItem('Produtos', JSON.stringify(productos)) : null;
    }
}

function formattDate(stamp){
    const data = new Date(stamp);

    const dd = String(data.getDate()).padStart(2, '0');
    const mm = data.getMonth()  === 0 ? 'Jan' :
                data.getMonth() === 1 ? 'Fev' :
                data.getMonth() === 2 ? 'Mar' :
                data.getMonth() === 3 ? 'Abr' :
                data.getMonth() === 4 ? 'Mai' :
                data.getMonth() === 5 ? 'Jun' :
                data.getMonth() === 6 ? 'Jul' :
                data.getMonth() === 7 ? 'Ago' :
                data.getMonth() === 8 ? 'Set' :
                data.getMonth() === 9 ? 'Out' :
                data.getMonth() === 10 ? 'Nov' :
                data.getMonth() === 11 ? 'Dez' : 'Zero';
    const aa = data.getFullYear();

    const hh = String(data.getHours()).padStart(2, '0');
    const mn = String(data.getMinutes()).padStart(2, '0');
    const ss = String(data.getSeconds()).padStart(2, '0');
    timeAndDate = `${dd}/${mm}/${aa} - ${hh}:${mn}:${ss}`;
    timeLineDate = `${dd}/${mm}/${aa} <br>${hh}:${mn}:${ss}`;
    return {timeAndDate, timeLineDate}
}

function formmatMoney(denheiro){
    return denheiro.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function createProductSearch(keyPress, local, e){//IMPORTANT: Motor de Busca e Comparação
    //CREATE: Ponto de Criações simples
    const foundBox = document.createElement('div');
    //VAR: Ponto de Conversão e Variados
    const keysConvert = keyPress.trim().toLowerCase().split(/\s+/);
    const productos   = carregarProdutos();

    //ATTR: Atribuições necessarias
    local.innerHTML = '';
    local.style.display = '';

    //APPEND: Area De inserção principal
    // local.append(foundBox);

    if(keyPress !== ''){
        local.style.display = '';
        productos.forEach(produto=>{
            const produto_nome = produto.produto.toLowerCase(); //NOTA: Coloca todos os titulos em minusculo na variavel
            const combinou = keysConvert.every(search => produto_nome.includes(search));

            if(combinou){
                //CREATE: Linha de Criação
                const item = {
                    box:        document.createElement('div'),
                    icon:       document.createElement('div'),
                    nome:       document.createElement('div'),
                    compare:    document.createElement('div'),
                    minimum:    document.createElement('div'),
                    nTitle:     document.createElement('p'),
                    nAmount:    document.createElement('p'),
                    maximum:    document.createElement('div'),
                    xTitle:     document.createElement('p'),
                    xAmount:    document.createElement('p')
                }

                //ATTR: Atribuições basicas
                produto.cor ? item.box.style.setProperty('--ItemCor', produto.cor) : item.box.style.setProperty('--ItemCor', '#0000');
                item.icon.style.setProperty('--ItemIcon', `url(${produto.icone})`);
                item.nome.textContent   = produto.produto;
                item.xTitle.textContent = 'Max';
                item.nTitle.textContent = 'Min';
                item.nAmount.innerHTML  = produto.min.toFixed(2);
                item.xAmount.innerHTML  = produto.max.toFixed(2);

                //APPEND: Appends principais
                item.box.append(item.icon, item.nome, item.compare);
                item.compare.append(item.maximum, item.minimum);
                item.maximum.append(item.xTitle, item.xAmount);
                item.minimum.append(item.nTitle, item.nAmount);
                local.append(item.box);

                item.box.addEventListener('click', ()=>{
                    e.target.value = produto.produto;
                    local.innerHTML = '';
                    local.style.display = 'none';
                    setTimeout(_=> e.target.select(), 100);
                })
            }else{
            }
        });
    }else{
        local.style.display = 'none';
    }
}

function productoCheck(produto_nome){//IMPORTANTE: Linha de checagem de produtos
    const productos = carregarProdutos();
    let checkes = {};

    productos.forEach(produto =>{
        produto_nome === produto.produto ? (
            checkes = produto,
            checkes.existe = true
        ) : null;
    });

    return checkes;
}

function randomColor(){
    let R = (Math.floor(Math.random() * 110) + 146).toString(16).padStart(2, '0');
    let G = (Math.floor(Math.random() * 110) + 146).toString(16).padStart(2, '0');
    let B = (Math.floor(Math.random() * 110) + 146).toString(16).padStart(2, '0');
    rgnColor = `#${R+G+B}`;
    // noteField.style.setProperty('--CustomColor', `#${R+G+B}`);
    return rgnColor;
};

const debuggingField = document.createElement('div');
document.body.append(debuggingField);
debuggingField.classList.add('debug');

function mobileDebugg(valores){
    debuggingField.innerHTML = '';

    Object.entries(valores).forEach(([key, value])=>{
        const linhas = document.createElement('p');
        const chaves = document.createElement('span');
        const valor  = document.createElement('span');

        chaves.textContent = `${key}: `;
        // valor.textContent = isNaN(value) ? value : value.toFixed(2);
        valor.textContent = value;

        debuggingField.append(linhas);
        linhas.append(chaves, valor);
    });
}

function createMobileButton(){
    const sizeDetect = document.querySelector('.Def-Lt');
    sizeDetect ? (
        // sizeDetect.removeEventListener('scroll', correctVisibility),
        sizeDetect.addEventListener('touchend', correctVisibility)
    ) : null;

    //CREATE: Botões de gerenciamento
    const action = {
        box:    document.createElement('div'),
        plus:   {
            box:    document.createElement('div'),
            button: document.createElement('button')
        },
        config: {
            box:    document.createElement('div'),
            button: document.createElement('button')
        },
        menus: {
            box:    document.createElement('div'),
            button: document.createElement('button')
        }
    }

    const defaults = {
        arrow_up: () =>{
            action.plus.box.style.setProperty('--PlusState', `url(https://i.imgur.com/yMF4ow1.png)`);
            action.plus.box.style.setProperty('--TouchPos', `0deg`);
            action.plus.box.style.setProperty('--ButtonColor', `#c0aed9`);
        },

        arrow_right: () =>{
            action.plus.box.style.setProperty('--PlusState', `url(https://i.imgur.com/yMF4ow1.png)`);
            action.plus.box.style.setProperty('--TouchPos', `90deg`);
            action.plus.box.style.setProperty('--ButtonColor', `#8bb9f2`);
        },

        plus_def: () =>{
            action.plus.box.style.setProperty('--PlusState', `url(https://i.imgur.com/OMWIW3D.png)`);
            action.plus.box.style.setProperty('--TouchPos', `0deg`);
            action.plus.box.style.setProperty('--ButtonColor', `#FAD`);
        },
        plus_close: ()=>{
            action.plus.box.style.setProperty('--PlusState', `url(https://i.imgur.com/OMWIW3D.png)`);
            action.plus.box.style.setProperty('--TouchPos', `-45deg`);
            action.plus.box.style.setProperty('--ButtonColor', `#333`);
        }
    }

    //VAR: Distribuir e Iniciar
    const anteriores = document.querySelector('.m-btn');
    anteriores ? anteriores.remove() : null;

    //ATTR: Atribuições Iniciais
    action.box.classList.add('m-btn');
    action.config.box.classList.add('cfg-m');
    action.menus.box.classList.add('bc-m');
    action.plus.box.style.setProperty('--PlusState', `url(https://i.imgur.com/OMWIW3D.png)`);
    action.plus.box.style.setProperty('--ButtonColor', `#FAD`);
    
    //APPEND: Aplicar ao projeto
    document.body.append(action.box)
    action.box.append(action.plus.box, action.config.box, action.menus.box);
    action.plus.box.append(action.plus.button);
    action.config.box.append(action.config.button);
    action.menus.box.append(action.menus.button);

    //VAR: Pega isso primeiro
    let plusPos = action.plus.box.getBoundingClientRect();

    //HELPER: Eventos
    action.plus.button.addEventListener('touchstart', decide);
    action.plus.button.addEventListener('touchend', selPoint);
    action.plus.button.addEventListener('touchmove', willSelected);

    //HELPER: Funções
    function willSelected(e){//NOTA: Animação quando deslizar pra um lado
        const touch = e.touches[0];
        const x_distance = touch.clientX - plusPos.right;
        const y_distance = plusPos.top - touch.clientY;

        if(x_distance > 50 && y_distance < 35){
            action.config.box.classList.add('sel-ch');
            navigator.vibrate(5);
            defaults.arrow_right();
        }else if(x_distance < 50 && y_distance > 35){
            action.menus.box.classList.add('sel-ch');
            navigator.vibrate(5);
            defaults.arrow_up();
        }else if(x_distance < -40 || y_distance < -40){
            defaults.plus_close();
            action.config.box.classList.remove('sel-ch');
            action.menus.box.classList.remove('sel-ch');
        }else{
            const checkGuide = document.querySelector('.slide-In');
            action.config.box.classList.remove('sel-ch');
            action.menus.box.classList.remove('sel-ch');
            
            if(checkGuide){//FIX: Arruma isso aqui!
                defaults.plus_close();
            }else{
                defaults.plus_def();
            }
        }
    }

    function selPoint(e){//IMPORTANT: Ação De Decisão Final
        const touch = e.changedTouches[0];
        let endX = touch.clientX - plusPos.right;
        let endY = plusPos.top - touch.clientY;
        const menus   = document.querySelector('.mn-mn');
        const confs   = document.querySelector('.Config');
        let opnConf   = document.querySelector('.opn');
        
        if(endX > 50 && endY < 35){
            navigator.vibrate ? navigator.vibrate(100) : null;
            //BACK: Ação ao arrastar 50px pra direita
            confs.classList.add('opn');
            opnConf = document.querySelector('.opn');
            opnConf ? (
                action.plus.box.classList.add('pls-cls'),
                menus ? menus.classList.remove('slide-In') : null
            ) : null;
        }else if(endX < 50 && endY > 35){
            navigator.vibrate ? navigator.vibrate(100) : null;
            //BACK: Ação ao arrastar 35 pixeis pra cima
            menus ? (
                menus.classList.add('slide-In'),
                action.plus.box.classList.add('pls-cls')
            ) : null;
            opnConf ? (
                configState()
            ) : null;
            // toggleTester();
        }else if(endX < -40 || endY < -40){
            //BACK: Ação ao Arrastar para fora
            menus || opnConf ? (
                menus ? menus.classList.remove('slide-In') : null,
                opnConf ? opnConf.classList.remove('opn') : null,
                mobileButtonState(),
                configState()
            ) : null;
        }else{
            //BACK: Ação ao não ir pra nenhuma direção
            const checkGuide = document.querySelector('.slide-In');
            const checkConfs = document.querySelector('.opn');
            checkGuide || checkConfs ? (
                checkGuide ? checkGuide.classList.remove('slide-In') : null,
                checkConfs ? checkConfs.classList.remove('opn') : null,
                mobileButtonState(),
                configState()
            ) :  nonSel();
            // action.box.remove();
        }

        action.config.box.classList.remove('sel-ch');
        action.menus.box.classList.remove('sel-ch');
        action.config.box.classList.remove('act-vw');
        action.menus.box.classList.remove('act-vw');
        action.box.classList.remove('act');
        
        const checkGuide = document.querySelector('.slide-In');

        checkGuide ? defaults.plus_close() : defaults.plus_def();
        
    }

    function decide(){//IMPORTANT: Ação ao iniciar interação
        plusPos = action.plus.box.getBoundingClientRect();
        clicked = true;
        action.config.box.classList.add('act-vw');
        action.menus.box.classList.add('act-vw');
        action.box.classList.add('act');
        navigator.vibrate ? navigator.vibrate(40) : null;
    }
    function nonSel(){
        const haveList  = parseInt(localStorage.getItem('UltimaLista'));
        const existence = !isNaN(haveList) ? document.querySelector('.add-tb') :  document.querySelector('.add-local');
        console.warn(existence)
        
        const addButton = document.querySelector('.add-frm');

        console.log(haveList, 'Lista Atual', existence)

        !existence ? (
            // addWindow(essentials, lists)
            addButton.click()
        ) : null;
        setTimeout(()=>{
            !existence ? nonSel() : null;
        }, 300);
        navigator.vibrate ? navigator.vibrate([50, 80]) : null;
    }

    function correctVisibility(){//NOTA: Corrige o botão ao chegar no final da scroll
        const divScrollSize = (sizeDetect.scrollHeight - sizeDetect.clientHeight) - 25;
        const divMaxSize = sizeDetect.scrollHeight > sizeDetect.getBoundingClientRect().height ;

        console.log(sizeDetect.getBoundingClientRect())
        setTimeout(()=>{
            if(sizeDetect.scrollTop - 20 >= divScrollSize && divMaxSize){
                console.warn('Scrollou o Maximo')
                action.box.style.left = '10%';
            }else{
                action.box.style.left = '';
            }
        }, 100)
    }
    menusStates();
};

function mobileButtonState(){
    const closeMode = document.querySelector('.pls-cls');
    closeMode ? closeMode.classList.remove('pls-cls') : null;
    console.warn('Removeu o Botão')
}

function menusStates(){
    const confMenu = document.querySelector('.opn');
    const maneMenu = document.querySelector('.slide-In');
    const mButton  = document.querySelector('.m-btn > div:nth-of-type(1)');
    console.log(confMenu, maneMenu);

    confMenu || maneMenu ? mButton.classList.add('pls-cls') : mButton.classList.remove('pls-cls');
}

function dateRemaining(stamp){
    const agora     = Date.now();
    let decorrido   = agora - stamp;

    const seg = Math.floor(decorrido / 1000);
    const min = Math.floor(seg / 60);
    const hrs = Math.floor(min / 60);
    const dia = Math.floor(hrs / 24);
    const sem = Math.floor(dia / 7);
    const mes = Math.floor(dia / 30.44);
    const ano = Math.floor(dia / 365.25);

    let txtRes =  
        ano > 0 ? (
            ano > 1 ? `<b>${ano}</b> Anos Atras` : `<b>${ano}</b> Ano Atras`
        ) :
        mes > 0 ? (
            mes > 1 ? `<b>${mes}</b> Meses Atras` : `<b>${mes}</b> Mes Atras`
        ) :
        sem > 0 ? (
            sem > 1 ? `<b>${sem}</b> Semanas Atras` : `<b>${sem}</b> Semana Atras`
        ) :
        dia > 0 ? (
            dia > 1 ? `<b>${dia}</b> Dias Atras` : `<b>${dia}</b> Dia Atras`
        ) :
        hrs > 0 ? (
            hrs > 1 ? `<b>${hrs}</b> Horas Atras` : `<b>${hrs}</b> Hora Atras` 
        ) : 
        min > 0 ? (
            min > 1 ? `<b>${min}</b> Minutos Atras` : `<b>${min}</b> Minuto Atras`
        ) : `Menos de 1 Minuto Atras`;
    ;

    return txtRes;
}

function configs(){
    //VAR: Extrações principais
    const productos = carregarProdutos();
    const confs = configurations();

    //CREATE: Criação Da Raiz
    const options = {
        window: document.createElement('div'),
        trap:   document.createElement('div'),
        tab: {
            corpo: document.createElement('div'),
            title: document.createElement('h1'),
            listBox: {
                inset: document.createElement('div')
            }
        }
    }
    const {window, trap: clickTrap} = options;
    const {corpo: tab, title} = options.tab;
    const btnBox = options.tab.listBox.inset;

    //ATTR: Atribuições
    window.classList.add('Config');
    title.textContent = 'Configurações';

    //APPEND: Inserções Raiz
    document.body.append(window);
    window.append(clickTrap, tab);
    tab.append(title, btnBox);

    confs.forEach(button =>{
        const buttonBox = createButtons(button);
        btnBox.append(buttonBox);
    });
};

function createButtons(button){
    //CREATE
    const buttonBox = document.createElement('div');
        const icon  = document.createElement('div');
        const name  = document.createElement('p');

    //ATTR
    name.textContent = button.button;
    !button.func ? (
        buttonBox.classList.add('dect')
    ) : buttonBox.addEventListener('click', button.func);
    
    //APPEND
    buttonBox.append(icon, name);
    return buttonBox;
}

function skinOpen(){

};

function itemsList(){
    // configState();
    // //CREATE
    // const tela = {
    //     general: document.createElement('div'),
    //     titulo:  document.createElement('h1'),
    //     lista:   document.createElement('div')
    // }
    // const {general: janela, titulo, lista: armario} = tela;

    // //ATTR
    // janela.classList.add('Armario');

    // //APPEND
    // document.body.append(janela);
    // janela.append(titulo, armario);

    // //EVENTS
}

function configState(){
    const configBox = document.querySelector('.Config');

    if(configBox){
        configBox.classList.remove('opn');
    }
}

function clearClose(){
    const mButton = document.querySelector('.pls-cls');

    mButton ? mButton.classList.remove('pls-cls') : null;

    configState();
}

function selectLast(entry){
    const lists = loadLists();
    const getListTab = document.querySelectorAll('.mn-mn > div:nth-of-type(2) > div');
    const picked = lists.findIndex(list => list.stamp === entry);

    getListTab[picked].click();
    localStorage.setItem('UltimaLista', entry);
}