const bd = require('../../config/bd');
const auth = require('../../auth');
require('dotenv').config({ path: require('find-config')('.env') });

exports.listarClientes = async (req, res) => {
    try {
        var knexQuery = `SELECT id_cliente, 
        nome,
        telefone
    FROM clientes`
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