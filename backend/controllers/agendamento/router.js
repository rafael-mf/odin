const Router = require('express').Router
const controller = require('./controller');
const auth = require('../../auth');

const router = new Router();

router.get('/consultar', controller.listarAgendamentos);
router.post('/cadastrar', controller.inserirAgendamento);

// router.post('/deletar/:id', controller.deletarCliente);


module.exports = router;