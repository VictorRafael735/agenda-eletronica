const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

const url = 'http://localhost:3000/'

//requisição padrão utilizada nos POST's
async function req(endpoint, met, obj) {
    const retorno = await fetch(url + endpoint, {
        method: met,
        headers: headers,
        body: JSON.stringify(obj)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        alert("Sucesso");
        document.location.reload();
    });
    console.log(retorno)
    return retorno;
}
//requisição padrão para DELETE's
async function delReq(endpoint, id) {
    const retorno = await fetch(`${url}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Deletado com sucesso");
            document.location.reload();
        });
    console.log(retorno)
}
//Carrega as informações do contato ao abrir o modal de edição
async function abrirModal(id) {
    console.log(id);
    const contato = await fetch(url + '/contatos/' + id)
        .then(data => data.json())
        .then(response => {
            return response;
        })
    console.log(contato);
    let nome = document.getElementById('nomeContato');
    let telefone = document.getElementById('telefoneContato');
    let email = document.getElementById('emailContato');
    let idContato = document.getElementById('contatoID');
    nome.value = contato.nome;
    telefone.value = contato.telefone;
    email.value = contato.email
    idContato.value = contato.id;
}
async function atualizaContato() {
    let nome = document.getElementById('nomeContato').value;
    let telefone = document.getElementById('telefoneContato').value;
    let email = document.getElementById('emailContato').value;
    let idContato = document.getElementById('contatoID').value;
    console.log(nome, idContato);
    const novoContato = { nome, telefone, email };
    try {
        await updateContato(idContato, novoContato);
    } catch (error) {
        console.log("Erro ao atualizar o contato", error);
    }
}
//altera contato no back
updateContato = async (id, body) => {
    const retorno = await fetch(url + '/contatos/' + id, {
        method: 'PUT',
        headers: headers, body: JSON.stringify(body)
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
    alert("Contato atualizado");
    document.location.reload();
}

