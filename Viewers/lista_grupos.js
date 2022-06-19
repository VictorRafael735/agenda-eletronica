//exibe a lista de grupos cadastrados no back-end
async function exibeListaGrupos() {
    let url = 'http://localhost:3000/grupos';

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
            return lista.map(grupo => lista_grupos.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div class="flex-fill p-2">${grupo.nome_grupo}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm" onclick="delReq('grupos',${grupo.id})">Deletar</button></div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-light btn-sm">Editar</button></div> 
            </li>`))})
}
exibeListaGrupos();
