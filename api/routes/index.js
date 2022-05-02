const bodyParser = require('body-parser');
const contatos = require('./contatosRoute');
const grupos = require('./gruposRoute');
const eventos = require('./eventosRoute');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false}),contatos, grupos, eventos, cors());
} 