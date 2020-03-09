const express = require('express'); //-> Importando o framework express
const router = express.Router();    //-> Função que irá gerenciar as Rotas

router.get('/',(req,res)=>{            //-> Criando método GET
    res.send("Hello World!");       //-> Resposta do servidor
});

router.get('/contato',(req,res)=>{            
    res.send("Contato!");       
});

router.get('/produtos',(req,res)=>{            
    res.send("Produto!");       
});

router.post('/produtos',(req,res)=>{    //-> Criando método POST       
    res.send("Serviços!");       
});

module.exports = router;
