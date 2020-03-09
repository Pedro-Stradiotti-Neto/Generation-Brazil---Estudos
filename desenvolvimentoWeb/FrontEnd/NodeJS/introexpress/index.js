const express = require('express'); //-> Importando o framework express
const routes = require('./routes');
const port = 3000;
let app = express();                //-> Cria uma aplicação express

app.disable('x-powered-by');        // -> Desabilita a informação do framework no header

app.use(routes);

app.listen(port,()=>{
    console.log(`Servidor executando em http://localhost:${port}`)
});                   //-> Ouvindo a chamada pela porta 3000