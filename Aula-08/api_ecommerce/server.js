//Criando a variavel express
const express = require('express')

//cria uma instancia do express
const app = express()
//define a porta que ira rodar 
const porta = 3000
//Lista dados para armazenar todos os dados cadastrados
const produtos =[]
const clientes = []


app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Bem vindo a Api - Senai Market v 1.0')
});

app.post('/produtos',(req,res)=>{
    const {nome,quantidade,valor} = req.body;
    res.send(`Nome do produto: ${nome} | Quantidade cadastrada: ${quantidade} | Valor do produto: ${valor}`);
    produtos.push({nome,quantidade,valor})//adiciona a lista
})
app.get('/produtos',(req,res)=>{
    //parse para leitura do codigo
    const {nome,quantidade,valor} = req.body
    //res.send(`Nome ${nome} Idade ${idade}`)
    res.json(produtos) // armazena a resposta
    res.send(`Nome do produto: ${nome} | Quantidade cadastrada: ${quantidade} | Valor do produto: ${valor}`);
})

app.post('/clientes',(req,res)=>{
    const {nome,idade,login,senha} = req.body;
    res.send(`Nome:${nome} | Idade:${idade} anos | E-mail: ${login} | Senha: ${senha}`);
    clientes.push({nome,idade,login,senha})
})

app.get('/clientes',(req,res)=>{
    const {nome,idade,login,senha} = req.body;
    res.json(clientes)//armazena a resposta
    res.send(`Nome:${nome} | Idade:${idade} anos | E-mail: ${login} | Senha: ${senha}`);
})



//inicia o servidor e a porta
app.listen(porta,()=>{
    console.log(`Api executando na porta ${porta}`)
})