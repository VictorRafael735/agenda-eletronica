const { Router } = require('express');
const EventoController = require('../controllers/EventoController');

const router = Router();

router.get('/eventos' , EventoController.pegaTodosEventos);
router.get('/eventos/:id' , EventoController.pegaUmEvento);
router.post('/eventos' , EventoController.criaEvento);
router.put('/eventos/:id', EventoController.atualizaEvento);
router.delete('/eventos/:id', EventoController.deletaEvento);
module.exports = router;