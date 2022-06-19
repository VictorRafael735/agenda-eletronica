class Evento {
    constructor() {
        this.nome_evento = document.getElementById('nome_evento').value;
        this.data_evento = document.getElementById('data').value;
        this.nome_participante = document.getElementById('participante').value;
    }
    get cadastraEvento() {
        return req('eventos','POST', this);
    }

}