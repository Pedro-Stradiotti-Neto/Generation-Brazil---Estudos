// Síncrono - solicita e aguarda a resposta
// Assíncrono - solicita e vai executando outras ações enquanto aguarda a resposta

const express = require('express');
const routes = require('./routes'); //-> Conecta junto ao arquivo de rotas
const app = express();
const port = 3000;

app.use(routes);                    //-> Utiliza o arquivo de rotas

app.listen(port, () => {
    console.log(`API Rest rodando em http://localhost:${port}`);
});