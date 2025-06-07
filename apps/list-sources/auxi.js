function abrirProdutos(produtos, quais){//NOTA: Abre, Le ou Cria Banco De Dados Interno
    return new Promise((resolve, reject) =>{
        const abrir = indexedDB.open(produtos, 1);
        abrir.onupgradeneeded = evento =>{
            const data = evento.target.result;
            if(!data.objectStoreNames.contains(quais)){
                data.createObjectStore(quais, {keyPath: 'id'});
            }
        };

        abrir.onsuccess = () => resolve(abrir.result);
        abrir.onerror = () => reject(abrir.error);
    });
};

async function listaDeProdutos(){//NOTA: Função Atalho de carregamento do Banco De Dados Interno.
    const datas = await abrirProdutos('Listas', 'Produtos');

    const tsc   = datas.transaction('Produtos', 'readonly');
    const salvo = tsc.objectStore('Produtos');

    // const produtos_salvos = await salvo.getAll();
    const produtos_salvos = await new Promise((resolve, reject) =>{//> espera a array ser carregada completamente
        const carregar =  salvo.getAll();
        carregar.onsuccess = () => resolve(carregar.result); //> A array se encontra dentro do objeto .resut
        carregar.onerror = () => reject(carregar.error);
    });

    return produtos_salvos;
};

async function salvarAtualizar(produtos){//NOTA: Função Atalho pra salvar itens
    const datas = await abrirProdutos('Listas', 'Produtos');

    const tsc  = datas.transaction('Produtos', 'readwrite');
    const save = tsc.objectStore('Produtos');

    produtos.forEach(produto =>{
        save.put(produto);
    });

    await tsc.done;
}

syncDatas();
async function syncDatas(){//NOTA: Saida Final Do pro Local Storage
    const saida = await listaDeProdutos();
    const local = localStorage.getItem('Produtos');
    !local || JSON.parse(local).length < saida.length ? localStorage.setItem('Produtos', JSON.stringify(saida)) : null;
}