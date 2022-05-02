const database = require('../models');

class ContatoController {

    //C-- Criando um registro
    static async criaContato (req,res) {
        const novoContato = req.body;
        try {
            const contatoCriado = await database.Contatos.create(novoContato);
            return res.status(200).json(contatoCriado);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
    
    //R-- Lendo um registro (todos)
    static async pegaTodosContatos(req, res){
        try{
            const todosContatos = await database.Contatos.findAll();     
            return res.json(todosContatos);
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    //R** -- Lendo um registro (individual)
    static async pegaUmContato (req, res) {
        const { id } = req.params;
        try {
            const umContato = await database.Contatos.findOne({
                where: 
                { 
                    id: Number(id)
                }
            })
            return res.status(200).json(umContato);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //U -- Atualiza um registro
    static async atualizaContato (req, res) {
        const { id } = req.params;
        const atualizaInfo = req.body;
        try{
            await database.Contatos.update(atualizaInfo, {
                where: {
                    id: Number(id)
                }
            })
            const contatoAtualizado = await database.Contatos.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(contatoAtualizado);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    //D -- Deleta um registro
    static async deletaContato (req, res) {
        const { id } = req.params;
        try {
            await database.Contatos.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `id: ${id} deletado`})
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ContatoController;