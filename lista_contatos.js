//exibe a lista de contatos cadastrados no back-end
async function exibeListaContatos() {
    let url = 'http://localhost:3000/contatos';
    await fetch(url)
        .then(data => data.json())
        .then(response => {
            let lista = response;
            lista = lista.sort(function (a, b) {
                if (a.nome > b.nome) {
                    return 1;
                }
                if (a.nome < b.nome) {
                    return -1;
                }
                return 0;
            });
            console.log(lista);
            return lista.map(contato => lista_contatos.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div id="item_lista" class="flex-fill p-2">${contato.nome}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm" onclick="deletaContatoLista(${contato.id}), deletaContatoGrupo(${contato.id}), deletaContatoEvento(${contato.id})">Deletar</button></div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-light btn-sm">Editar</button></div> 
            </li>`))
        })
}
exibeListaContatos();

