// .statusCode   -> Informa o código como forma de resposta.
// templatestring (``) -> 
// $[variável]  -> Chamada de variável dentro de um templatestring

const http = require('http');
const hostname = '127.0.0.1';       // -> '127.0.0.1' == localhost
const port = 3000;                  // -> Reserva uma porta para "centralizar" qualquer chamada

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.end('Hello World')
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
});