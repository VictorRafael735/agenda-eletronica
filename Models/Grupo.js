class Grupo {
    constructor(){
        this.nome_grupo = document.getElementById('nome_grupo').value;
        this.nome_participante = document.getElementById('integrante').value;
    }
    get cadastraGrupo(){
        return req('grupos', 'POST', this);
    }
}