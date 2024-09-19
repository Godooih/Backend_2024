//Criando a variavel express
const express = require('express')

//cria uma instancia do express
const app = express()
//define a porta que ira rodar 
const porta = 3000

//midleware para processar a resposta com o formato json
app.use(express.json())

//criação da rota get na raiz da api
//req = requisição
//res = respostas
app.get('/',(req,res)=>{
    res.send('Api funcionando')
});
app.post('/data',(req,res)=>{
    
    const {nome,idade} = req.body;
    res.send(`Nome ${nome} Idade ${idade}`);


});
//metodo data para o end point data
app.get('/data',(req,res)=>{
    //parse para leitura do codigo
    const {nome,idade} = req.body
    res.send(`Nome ${nome} Idade ${idade}`)
})

//inicia o servidor e a porta
app.listen(porta,()=>{
    console.log(`Api executando na porta ${porta}`)
})