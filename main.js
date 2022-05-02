

async function inserirContato(){
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
    const retorno = await fetch(url,  {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }, body: JSON.stringify(contato)} ).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)});
    console.log("Passou")
    console.log(retorno)
    
}

async function inserirEvento(){
    const nome_evento = document.getElementById('nome_evento').value;
    const data_evento = document.getElementById('data').value;
    const nome_participante = document.getElementById('participante').value;
    const evento = {
        nome_evento,
        data_evento,
        nome_participante,
    }

    let url = 'http://localhost:3000/eventos'
    const retorno = await fetch(url,  {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }, body: JSON.stringify(evento)} ).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)});
    console.log("Passou")
    console.log(retorno)
}

async function inserirGrupo(){
    const nome_grupo = document.getElementById('nome_grupo').value;
    const nome_participante = document.getElementById('integrante').value;
    const grupo = {
        nome_grupo,
        nome_participante,
    }

    let url = 'http://localhost:3000/grupos'
    const retorno = await fetch(url,  {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }, body: JSON.stringify(grupo)} ).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)});
    console.log("Passou")
    console.log(retorno)
}

