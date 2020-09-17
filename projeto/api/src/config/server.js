// Define a porta padrao
const port = 3200;

// Requisita todos os modulos obrigatórios
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');

// Instancia o servidor e pluga os middlewares de tratamento
const server = express();
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(cors);

// Sobe o servidor na porta e exporta o servidor no módulo
server.listen(port, () => console.log(`Servidor no ar na porta:${port}`));
module.exports = server;