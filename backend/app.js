const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression')
const rotas = require('./routes');
const auth = require('./auth');
const pathEnv = require('find-config')('.env');
require('dotenv').config({ path: pathEnv })

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(compression());

/* Rotas */
app.use('/odin', rotas);

/* Porta Sistema */
let port = process.env.PORT;

app.listen(port, function () {
  console.log('Backend odin rodando na porta: ' + port + '!')
})
