const nodeRestful = require('node-restful');

const schema = new nodeRestful.mongoose.Schema({
    login: { type: String, required: true },
    senha: { type: String, required: true }
});

module.exports = nodeRestful.model('usuarios', schema);