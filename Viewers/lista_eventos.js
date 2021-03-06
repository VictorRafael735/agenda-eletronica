//exibe a lista de eventos cadastrados no back-end
async function exibeListaEventos() {
    let url = 'http://localhost:3000/eventos';

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
        return lista.map(evento => lista_eventos.innerHTML += (`
            <li class="d-flex p-0 list-group-item bg-dark text-light border-none">
                <div class="flex-fill p-2">${evento.nome_evento}</div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-danger btn-sm" onclick="delReq('eventos',${evento.id})">Deletar</button></div> 
                <div class="p-0 mb-0"><button type="button" class="btn btn-outline-light btn-sm">Editar</button></div> 
            </li>`))})
}
exibeListaEventos();
