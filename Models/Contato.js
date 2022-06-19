class Contato {
    constructor() {
        this.nome = document.getElementById('nome').value;
        this.telefone = document.getElementById('telefone').value;
        this.email = document.getElementById('email').value;
    }

    get cadastraContato() {
        return req('contatos','POST', this);
    }
}
