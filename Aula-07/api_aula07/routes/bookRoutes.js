const express = require('express')//variavel express que vai salvar uma requisição 
const router = express.Router()//variavel app que armazena o express
const books = require('.../models/book');

//Adiciona Livro
router.post('/books',(req,res)=>{
    const {title, author , year , isbn} = req.body//parametros para cadastrar o livro
    const book ={title, author , year , isbn}; //Cada livro vai ter esse parametros
    books.push(book);
    res.status(201).send(book);
});

//renomeia Livro
router.delete('/books/:isbn',(req,res)=>{
    const { isbn } =req.params;
    books = books.filter(book => book.isbn !== isbn);
    res.status(200).send({message : 'Livro removido'});
})

//Listar Livros
router.get('/books',(req,res) => {
    res.status(200).send(books);
})

//Buscar livro por titulo
router.get('/books/search',(req,res)=>{
    const {title} = req.query;
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
    res.status(200).send(filteredBooks);
});

module.exports = router; // exporta a rota da api


//get https://localhost:3000/api/books

//post https://localhost:3000/api/books