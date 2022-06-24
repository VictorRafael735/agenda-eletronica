//métodos bootstrap
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
function criaEvento() {
    let nome_participante = $(".seletor-contatos").val();
    let nome_evento = document.getElementById('nome_evento').value;
    let data_evento = document.getElementById('data').value;
    console.log(nome_participante);
    let novoEvento = new Evento(nome_evento, data_evento, nome_participante);
    return novoEvento.cadastraEvento();
}
function criaGrupo() {
    let novoGrupo = new Grupo();
    return novoGrupo.cadastraGrupo();
}


