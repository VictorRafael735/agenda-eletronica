//exibe a lista de eventos cadastrados no back-end
async function exibeListaEventos() {
    let url = 'http://localhost:3000/eventos';

    await fetch(url)
        .then(data => data.json())
        .then(response => response.map(evento => lista_eventos.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div class="flex-fill p-2">${evento.nome_evento}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm" onclick="deletaEvento(${evento.id})">Deletar</button></div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-light btn-sm">Editar</button></div> 
            </li>`)))
}
exibeListaEventos();
