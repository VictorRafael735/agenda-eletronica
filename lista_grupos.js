//exibe a lista de grupos cadastrados no back-end
async function exibeListaGrupos() {
    let url = 'http://localhost:3000/grupos';

    await fetch(url)
        .then(data => data.json())
        .then(response => response.map(grupo => lista_grupos.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div class="flex-fill p-2">${grupo.nome_grupo}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm" onclick="deletaGrupo(${grupo.id})">Deletar</button></div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-light btn-sm">Editar</button></div> 
            </li>`)))
}
exibeListaGrupos();