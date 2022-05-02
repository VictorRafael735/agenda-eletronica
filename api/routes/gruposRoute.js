const { Router } = require('express');
const GrupoController = require('../controllers/GrupoController');

const router = Router();

router.get('/grupos' , GrupoController.pegaTodosGrupos);
router.get('/grupos/:id' , GrupoController.pegaUmGrupo);
router.post('/grupos' , GrupoController.criaGrupo);
router.put('/grupos/:id', GrupoController.atualizaGrupo);
router.delete('/grupos/:id', GrupoController.deletaGrupo);
module.exports = router;