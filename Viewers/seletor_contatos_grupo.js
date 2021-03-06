async function seletorContatos(){
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
            return lista.map(contato => integrante.innerHTML += (`<option class="bg-dark" value="${contato.id}">${contato.nome}</option>`))
        })
}

seletorContatos();

