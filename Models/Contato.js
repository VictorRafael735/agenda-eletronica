class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    get cadastraContato() {
        return req('contatos','POST', this);
    }
}
