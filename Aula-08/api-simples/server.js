//Criando a variavel express
const express = require('express')

//cria uma instancia do express
const app = express()
//define a porta que ira rodar 
const porta = 3000
//Lista dados para armazenar todos os dados cadastrados
const dados =[]


//midleware para processar a resposta com o formato json
app.use(express.json())

//criação da rota get na raiz da api
//req = requisição
//res = respostas
app.get('/',(req,res)=>{
    res.send('Api funcionando')
});
app.post('/data',(req,res)=>{
    //parse para oenvio de dados
    const {nome,idade} = req.body;
    res.send(`Nome: ${nome} Idade: ${idade} anos , dados cadastrados com sucesso`);
    dados.push({nome,idade})//adiciona a lista


});
//metodo data para o end point data
app.get('/data',(req,res)=>{
    //parse para leitura do codigo
    const {nome,idade} = req.body
    //res.send(`Nome ${nome} Idade ${idade}`)
    res.json(dados) // armazena a resposta
})

//inicia o servidor e a porta
app.listen(porta,()=>{
    console.log(`Api executando na porta ${porta}`)
})