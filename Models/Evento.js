class Evento {
    constructor(nome_evento, data_evento, nome_participante) {
        this.nome_evento = nome_evento;
        this.data_evento = data_evento;
        this.nome_participante = nome_participante;
    }
    get cadastraEvento() {
        return req('eventos','POST', this);
    }

}