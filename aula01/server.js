// requisitar o modulo http do Node.js
const http = require('http');

// criar a funcao generica que vai responder 
// as requisicoes do servidor
const tratarRespostaDaRequisicao = function(_, resposta){
    resposta.writeHead(200, { 'Content-Type' : 'text/html'});
    resposta.write("<h1>Meu Primeiro Servidor Web em Node.js</h1>");
    resposta.end();
}

// executa a funcao createServer do http que espera um tratamento 
// de requisicao/resposta e devolve um servidor
const server = http.createServer(tratarRespostaDaRequisicao);

// executa o servidor na porta 3000 e notifica no console quando 
// o servidor terminar de subir
server.listen(3200, function(){
    console.log('Servidor no ar na porta 3200');
});