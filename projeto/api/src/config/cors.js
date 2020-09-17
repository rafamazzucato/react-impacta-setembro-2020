module.exports = (_, resposta, proximo) => { 
    resposta.header("Access-Control-Allow-Origin", "*"); 
    resposta.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    resposta.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    proximo();
};