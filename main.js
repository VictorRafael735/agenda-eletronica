//métodos bootstrap
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

//manda contato para o back-end
async function inserirContato() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const celular = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const contato = {
        nome,
        sobrenome,
        celular,
        email
    }
    let url = 'http://localhost:3000/contatos'
    const retorno = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }, body: JSON.stringify(contato)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        alert("Usuário cadastrado");
        document.location.reload();

    });
    console.log(retorno)
}
//manda um novo evento para o back-end
async function inserirEvento() {
    const nome_evento = document.getElementById('nome_evento').value;
    const data_evento = document.getElementById('data').value;
    const nome_participante = document.getElementById('participante').value;
    const evento = {
        nome_evento,
        data_evento,
        nome_participante,
    }

    let url = 'http://localhost:3000/eventos'
    const retorno = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }, body: JSON.stringify(evento)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    });
    console.log(retorno)
    alert("Evento criado!");
    document.location.reload();
}
//manda um novo grupo para o back-end
async function inserirGrupo() {
    const nome_grupo = document.getElementById('nome_grupo').value;
    const nome_participante = document.getElementById('integrante').value;
    const grupo = {
        nome_grupo,
        nome_participante,
    }

    let url = 'http://localhost:3000/grupos'
    const retorno = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }, body: JSON.stringify(grupo)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
    console.log(retorno);
    alert("Grupo criado!");
    document.location.reload();
}
//deleta um contato da lista de contatos
async function deletaContatoLista(id) {
    let url = 'http://localhost:3000/contatos/'
    const retorno = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Usuário deletado");
            document.location.reload();
        });
    console.log(retorno)
}
//deleta um contato dos eventos
async function deletaContatoEvento(id) {
    let url = 'http://localhost:3000/eventos/'
    const retorno = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
}
//deleta um contato dos grupos
async function deletaContatoGrupo(id) {
    let url = 'http://localhost:3000/grupos/'
    const retorno = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
}
//deleta um grupo
async function deletaGrupo(id) {
    let url = 'http://localhost:3000/grupos/'
    const retorno = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
    alert("Grupo deletado");
    document.location.reload();
}
//deleta um evento
async function deletaEvento(id) {
    let url = 'http://localhost:3000/eventos/'
    const retorno = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    console.log(retorno)
    alert("Evento deletado");
    document.location.reload();
}

