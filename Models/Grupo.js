class Grupo {
    constructor(nome_grupo, nome_participante){
        this.nome_grupo = nome_grupo;
        this.nome_participante = nome_participante;
    }
    get cadastraGrupo(){
        return req('grupos', 'POST', this);
    }
}