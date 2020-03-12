import express from 'express';  //-> Importando o framework

const app = express();          //-> Inicializa uma aplicação express    

app.get('/', (req, res) => {
    res.send('Hello Patrick!');
});

app.listen(3000);