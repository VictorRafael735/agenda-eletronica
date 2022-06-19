//requisição padrão utilizada nos POST's
async function req(endpoint,met,obj) {
    let url = 'http://localhost:3000/'
    console.log("chegou")
    const retorno = await fetch(url + endpoint, {
        method: met,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }, body: JSON.stringify(obj)
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
async function delReq(endpoint,id) {
    let url = 'http://localhost:3000'
    const retorno = await fetch(`${url}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
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
    let url = `http://localhost:3000/contatos/${id}`;
    const contato = await fetch(url)
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
async function atualizaContato(){
    let nome = document.getElementById('nomeContato').value;
    let telefone = document.getElementById('telefoneContato').value;
    let email = document.getElementById('emailContato').value;
    let idContato = document.getElementById('contatoID').value;
    console.log(nome, idContato);
    const novoContato = {nome, telefone, email};
    try {
        await updateContato(idContato, novoContato);
    } catch (error) {
        console.log("Erro ao atualizar o contato", error);
    }
}
//altera contato no back
updateContato = async(id, body) => {
    let url = `http://localhost:3000/contatos/${id}`
    const retorno = await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }, body: JSON.stringify(body)
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
    alert("Contato atualizado");
    document.location.reload();
}

