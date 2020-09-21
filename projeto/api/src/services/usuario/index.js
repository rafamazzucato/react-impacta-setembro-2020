const schemaUsuarios = require('./schema');

schemaUsuarios.methods(['get']);
schemaUsuarios.updateOptions({ new: true, runValidators : true});

module.exports = schemaUsuarios;