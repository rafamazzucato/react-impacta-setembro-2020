// requisita o módulo do mongoose
const mongoose = require('mongoose');

// iguala a Promise do Node com a Promise do mongoose (para evitar warnnings no console)
mongoose.Promise = global.Promise;

// exporta o resultado da função connect no banco na database escola-cursos
module.exports = mongoose.connect('mongodb://localhost:27017/escola-cursos', { useNewUrlParser: true, useUnifiedTopology: true });