//exibe a lista de contatos presentes em determinado grupo
async function exibeListaParticipantes(id) {
    let url = 'http://localhost:3000/grupos/';
    await fetch(url + id)
        .then(data => data.json())
        .then(response => {
            console.log(response)
            return response.map(grupo => participantesGrupo.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div id="item_lista" class="flex-fill p-2">${grupo.nome_grupo}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm m-1" onclick="delReq('contatos',${grupo.contato_id})">Deletar</button></div> 
            </li>`))
        })
}


