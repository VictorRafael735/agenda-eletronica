//funções bootstrap
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})


//cria um contato e o cadastra no back-end
function criaContato() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let novoContato = new Contato(nome, telefone, email);
    return novoContato.cadastraContato();
}
//cria um evento e o cadastra no back-end
function criaEvento() {
    let nome_participante = $(".seletor-contatos-eventos").val();
    let nome_evento = document.getElementById('nome_evento').value;
    let data_evento = document.getElementById('data').value;
    let novoEvento = new Evento(nome_evento, data_evento, nome_participante);
    return novoEvento.cadastraEvento();
}
//cria um grupo e o cadastra no back-end
function criaGrupo() {
    let nome_participante = $(".seletor-contatos-grupos").val();
    let nome_grupo = document.getElementById('nome_grupo').value;
    let novoGrupo = new Grupo(nome_grupo, nome_participante);
    return novoGrupo.cadastraGrupo();
}


