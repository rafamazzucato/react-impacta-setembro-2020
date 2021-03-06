const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    const cursosServices = require('../services/cursos');
    cursosServices.register(router, '/cursos');

    const contatosServices = require('../services/contatos');
    contatosServices.register(router, '/contatos');

    const usuariosService = require('../services/usuario');
    usuariosService.register(router, '/usuarios');
}