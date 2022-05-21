//exibe a lista de contatos cadastrados no back-end
async function exibeListaContatos() {
    let url = 'http://localhost:3000/contatos';
    
    await fetch(url)
        .then(data => data.json())
        .then(response => response.map(contato => lista_contatos.innerHTML += (`<li> Nome: ${contato.nome} Sobrenome: ${contato.sobrenome} Telefone: ${contato.celular} Email: ${contato.email}`)))
}
exibeListaContatos();