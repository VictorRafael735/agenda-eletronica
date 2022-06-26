//exibe a lista de contatos presentes em determinado grupo
function exibeListaParticipantes(contatos) {
    const lista = document.getElementById('contatos');
    lista.innerHTML = '';
    contatos.forEach(elemento => {
        const item = document.createElement('li');
        item.classList.add('d-flex', 'p-0', 'list-group-item', 'bg-dark', 'text-light', 'border-none')
        item.innerHTML = `<div id="item_lista" class="flex-fill p-2">${elemento.nome}</div> 
    <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm m-1" onclick="retiraParticipantes(${elemento.id})">Deletar</button></div>`;
        document.querySelector('#contatos').appendChild(item);
    })
}
