const database = require('./../models');


class GrupoController {

    //C-- Criando um registro
    static async criaGrupo(req, res) {
        let grupos = [];
        const novoGrupo = req.body;
        console.log(novoGrupo.nome_participante)
        const contatos = novoGrupo.nome_participante;
        try {
            const grupoCriado = await database.grupos.create(novoGrupo);
            const idGrupo = await database.grupos.findOne({
                where:
                {
                    id: grupoCriado.dataValues.id
                }
            });
            console.log(idGrupo)
            if (novoGrupo.nome_participante) {
                idGrupo.setContatos(contatos);
            }
            grupos.push(grupoCriado.dataValues);
            return res.status(201).json(grupos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }

    }

    //R-- Lendo um registro (todos)
    static async pegaTodosGrupos(req, res) {
        try {
            const todosGrupos = await database.grupos.findAll({
                include: 
                {
                    model: database.contatos, as: 'contatos'
                }
            });
            return res.status(200).json(todosGrupos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //R** -- Lendo um registro (individual)
    static async pegaUmGrupo(req, res) {
        const { id } = req.params;
        try {
            const umGrupo = await database.grupos.findOne({
                where:
                {
                    id: Number(id)
                },
                include:
                    [
                        {
                            model: database.contatos, as: 'contatos'
                        }
                    ]
            })
            return res.status(200).json(umGrupo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //U -- Atualiza um registro
    static async atualizaGrupo(req, res) {
        const { id } = req.params;
        const atualizaInfoGrupo = req.body;
        let contatos = atualizaInfoGrupo.nome_participante;
        try {
            await database.grupos.update(atualizaInfoGrupo, {
                where: {
                    id: Number(id)
                }
            })
            const grupoAtualizado = await database.grupos.findOne({
                where: {
                    id: Number(id)
                }
            })
            if (atualizaInfoGrupo.contatos) {
                grupoAtualizado.setContatos(contatos);
            }
            return res.status(200).json(grupoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //D -- Deleta um registro
    static async deletaGrupo(req, res) {
        const { id } = req.params;
        try {
            await database.grupos.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `id: ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = GrupoController;