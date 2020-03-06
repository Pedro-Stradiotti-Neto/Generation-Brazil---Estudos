const express = require('express'); //-> Importando o framework express
const port = 3000;
let app = express();                //-> Cria uma aplicação express

app.get('/',(req,res)=>{            //-> Criando método GET
    res.send("Hello World!");       //-> Resposta do servidor
});

app.listen(port,()=>{
    console.log(`Servidor executando em http://localhost:${port}`)
});                   //-> Ouvindo a chamada pela porta 3000
