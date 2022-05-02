const { Router } = require('express');
const ContatoController = require('../controllers/ContatoController');

const router = Router();

router.get('/contatos' , ContatoController.pegaTodosContatos);
router.get('/contatos/:id' , ContatoController.pegaUmContato);
router.post('/contatos' , ContatoController.criaContato);
router.put('/contatos/:id', ContatoController.atualizaContato);
router.delete('/contatos/:id', ContatoController.deletaContato);
module.exports = router;