const database = require('../models');

class EventoController {

    //C-- Criando um registro
    static async criaEvento(req, res) {
        let eventos = [];
        const novoEvento = req.body;
        console.log(novoEvento)
        try {
            for (let participante of novoEvento.nome_participante) {
                console.log(novoEvento.contato_id)
                novoEvento.contato_id = participante;
                const eventoCriado = await database.Eventos.create(novoEvento);
                eventos.push(eventoCriado.dataValues);
            }
            return res.status(201).json(eventos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }

    }

    //R-- Lendo um registro (todos)
    static async pegaTodosEventos(req, res) {
        try {
            const todosEventos = await database.Eventos.findAll();
            return res.status(200).json(todosEventos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //R** -- Lendo um registro (individual)
    static async pegaUmEvento(req, res) {
        const { id } = req.params;
        try {
            const umEvento = await database.Eventos.findOne({
                where:
                {
                    id: Number(id)
                }
            })
            return res.status(200).json(umEvento);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //U -- Atualiza um registro
    static async atualizaEvento(req, res) {
        const { id } = req.params;
        const atualizaInfoEvento = req.body;
        try {
            await database.Eventos.update(atualizaInfoGrupo, {
                where: {
                    id: Number(id)
                }
            })
            const eventoAtualizado = await database.Eventos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(eventoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //D -- Deleta um registro
    static async deletaEvento(req, res) {
        const { id } = req.params;
        try {
            await database.Eventos.destroy({
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

module.exports = EventoController;