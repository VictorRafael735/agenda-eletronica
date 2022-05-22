//exibe a lista de contatos cadastrados no back-end
async function exibeListaContatos() {
    let url = 'http://localhost:3000/contatos';
    
    await fetch(url)
        .then(data => data.json())
        .then(response => response.map(contato => lista_contatos.innerHTML += (`<a href="#" class="list-group-item list-group-item-action bg-dark text-light border-light "> ${contato.nome} </a>`)))
}
exibeListaContatos();