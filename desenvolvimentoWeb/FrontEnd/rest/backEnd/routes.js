const express = require('express');
const router = express.Router();                //-> Gerenciador de Rotas do express
const bodyParser = require('body-parser');
const fs = require('fs');

let rawbooks = fs.readFileSync('books.json');   //-> Leitura do arquivo, porém não entende como JSON
let books = JSON.parse(rawbooks);               //-> Transforma o arquivo em JSON

// Mediador entre o Front e o Back
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/book', (req, res) => {
    const book = req.body;      //-> Pega todo o corpo da requisição e guarda dentro da var
    books.push(book);           //-> Adicionou junto ao arquivo JSON
    let jsonList = JSON.stringify(books);   //-> Passou para string
    fs.writeFile('books.json', jsonList, 'utf8', () => { }); //-> Grava os dados no arquivo
    res.send('Livro adicionado ao Banco de Dados');
});

router.get('/book', (req, res) => {
    res.json(books);
});

router.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;       // == const { isbn } = req.params;  -> Valor pego da url
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Livro não localizado!');
});

router.get('/', (req, res) => {
    res.send('API de Livros');
});

router.delete('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    for (let book of books) {
        if (book.isbn === isbn) {
            let index = books.indexOf(book, 0); //-> Pega a posição do livro escolhido
            books.splice(index, 1);             //-> Retira o elemento da posição
        }
    }
    let jsonList = JSON.stringify(books);       //-> Transforma o Json em string
    fs.writeFile('books.json', jsonList, 'utf8', () => { });    //-> Reescreve o arquivo
    res.send('Livro Excluído com Sucesso')
});

module.exports = router;                        //-> Exportar as rotas para utilizar