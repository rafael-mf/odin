const Router = require('express').Router
const controller = require('./controller');
const auth = require('../../auth');

const router = new Router();

app.get('/agendamento_servicos', controller.listarAgendamentoServicos);
app.get('/agendamento_servicos/:id', controller.obterAgendamentoServico);
app.post('/agendamento_servicos', controller.inserirAgendamentoServico);
app.put('/agendamento_servicos/:id', controller.atualizarAgendamentoServico);
app.delete('/agendamento_servicos/:id', controller.excluirAgendamentoServico);



module.exports = router;