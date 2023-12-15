'use strict';
const express = require('express');

const cliente = require('./controllers/cliente/router');
const agendamento = require('./controllers/agendamento/router');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Back-end odin",
        version: "0.0.1"
    });
});


router.use('/cliente', cliente);
router.use('/agendamento', agendamento);

module.exports = router;