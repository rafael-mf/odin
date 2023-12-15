const bd = require('../../config/bd');

const AgendamentoServicoController = {
    listarAgendamentoServicos: async (req, res) => {
        try {
            const result = await bd.knex('agendamento_servico').select('*');
            return res.status(200).json({ status: true, dados: result });
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ status: false, error: erro });
        }
    },

    obterAgendamentoServico: async (req, res) => {
        try {
            const idAgendamentoServico = req.params.id;
            const result = await bd.knex('agendamento_servico').where('id_agendamento_servico', idAgendamentoServico).first();

            if (result) {
                return res.status(200).json({ status: true, dados: result });
            } else {
                return res.status(404).json({ status: false, error: 'Agendamento de serviço não encontrado.' });
            }
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ status: false, error: erro });
        }
    },

    inserirAgendamentoServico: async (req, res) => {
        try {
            const { valor, comissao_profissional, fk_agendamento_id_agendamento, fk_servico_profissional_possui_id_servico_profissional } = req.body;

            await bd.knex('agendamento_servico').insert({
                valor,
                comissao_profissional,
                fk_agendamento_id_agendamento,
                fk_servico_profissional_possui_id_servico_profissional
            });

            return res.status(200).json({ status: true, mensagem: 'Agendamento de serviço inserido com sucesso.' });
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ status: false, error: erro });
        }
    },

    atualizarAgendamentoServico: async (req, res) => {
        try {
            const idAgendamentoServico = req.params.id;
            const { valor, comissao_profissional, fk_agendamento_id_agendamento, fk_servico_profissional_possui_id_servico_profissional } = req.body;

            const result = await bd.knex('agendamento_servico')
                .where('id_agendamento_servico', idAgendamentoServico)
                .update({
                    valor,
                    comissao_profissional,
                    fk_agendamento_id_agendamento,
                    fk_servico_profissional_possui_id_servico_profissional
                });

            if (result) {
                return res.status(200).json({ status: true, mensagem: 'Agendamento de serviço atualizado com sucesso.' });
            } else {
                return res.status(404).json({ status: false, error: 'Agendamento de serviço não encontrado.' });
            }
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ status: false, error: erro });
        }
    },

    excluirAgendamentoServico: async (req, res) => {
        try {
            const idAgendamentoServico = req.params.id;

            const result = await bd.knex('agendamento_servico').where('id_agendamento_servico', idAgendamentoServico).del();

            if (result) {
                return res.status(200).json({ status: true, mensagem: 'Agendamento de serviço excluído com sucesso.' });
            } else {
                return res.status(404).json({ status: false, error: 'Agendamento de serviço não encontrado.' });
            }
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ status: false, error: erro });
        }
    }
};

module.exports = AgendamentoServicoController;
