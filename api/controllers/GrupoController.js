const database = require('../models');

class GrupoController {

    //C-- Criando um registro
    static async criaGrupo (req,res) {
        let grupos = [];
        const novoGrupo = req.body;
        console.log(novoGrupo)
        try {
            for (let participante of novoGrupo.nome_participante) {
                console.log(novoGrupo.contato_id);
                novoGrupo.contato_id = participante;
                const grupoCriado = await database.Grupos.create(novoGrupo);
                grupos.push(grupoCriado.dataValues);
            }
            return res.status(201).json(grupos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }

    }
    
    //R-- Lendo um registro (todos)
    static async pegaTodosGrupos(req, res){
        try{
            const todosGrupos = await database.Grupos.findAll();
            return res.status(200).json(todosGrupos);
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    //R** -- Lendo um registro (individual)
    static async pegaUmGrupo (req, res) {
        const { id } = req.params;
        try {
            const umGrupo = await database.Grupos.findOne({
                where: 
                { 
                    id: Number(id)
                }
            })
            return res.status(200).json(umGrupo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //U -- Atualiza um registro
    static async atualizaGrupo (req, res) {
        const { id } = req.params;
        const atualizaInfoGrupo = req.body;
        try{
            await database.Grupos.update(atualizaInfoGrupo, {
                where: {
                    id: Number(id)
                }
            })
            const grupoAtualizado = await database.Grupos.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(grupoAtualizado);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    //D -- Deleta um registro
    static async deletaGrupo (req, res) {
        const { id } = req.params;
        try {
            await database.Grupos.destroy({
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

module.exports = GrupoController;