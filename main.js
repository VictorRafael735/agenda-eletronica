//métodos bootstrap
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})


//cria um contato e o cadastra no back-end
function criaContato (){
    let novoContato = new Contato();
    return novoContato.cadastraContato();
}
function criaEvento (){
    let novoEvento = new Evento();
    return novoEvento.cadastraEvento();
}
function criaGrupo (){
    let novoGrupo = new Grupo();
    return novoGrupo.cadastraGrupo();
}


