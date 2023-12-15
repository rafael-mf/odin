const bd = require('../../config/bd');
const auth = require('../../auth');
require('dotenv').config({ path: require('find-config')('.env') });

exports.listarAgendamentos = async (req, res) => {
    try {
        let queryBusca = '';
        if (req.body?.data_inicio && req.body?.data_fim) {
            queryBusca += ` AND data >= DATE(${req.body.data_inicio}) AND data <= DATE(${req.body.data_fim})`;
        }
        var knexQuery = `SELECT *
        Where 1=1 ${query_busca}
    FROM agendamento`
        let result = (await bd.knex.raw(knexQuery))[0];

        return res.status(200).json({ status: true, dados: result });
    }
    catch (erro) {
        console.log(erro);
        delete erro.sql;
        delete erro.sqlMessage;
        return res.status(500).json({ status: false, error: erro });
    }
}

exports.inserirAgendamento = async (req, res) => {
    try {
        const { data, realizado, confirmado, fk_cliente_id_cliente, fk_profissional_id_profissional } = req.body;

        await bd.knex.raw(`
            INSERT INTO agendamento (data, realizado, confirmado, fk_cliente_id_cliente, fk_profissional_id_profissional)
            VALUES (?, ?, ?, ?, ?)`, [data, realizado, confirmado, fk_cliente_id_cliente, fk_profissional_id_profissional]);

        return res.status(200).json({ status: true, mensagem: 'Agendamento inserido com sucesso.' });
    } catch (erro) {
        console.log(erro);
        delete erro.sql;
        delete erro.sqlMessage;

        // Verifica se o erro é relacionado à trigger e trata de forma específica
        if (erro.code === 'ER_SIGNAL_EXCEPTION' && erro.message.includes('Já existe um agendamento para o mesmo profissional nesta data.')) {
            return res.status(400).json({ status: false, error: 'Já existe um agendamento para o mesmo profissional nesta data.' });
        }

        return res.status(500).json({ status: false, error: erro });
    }
};