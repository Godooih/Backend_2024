const express = require('express')//variavel express que vai salvar uma requisição 
const app = express()//variavel app que armazena o express
const port = 3000 // porta padrão para as aplicações em node

// criar uma requisição get

app.get('/',(req,res)=>{
    res.send("Backend teste");

});

app.get('/Usuario',(req,res)=>{
    res.send('Usuario admin')
})

// teste com requisição post
app.post('/',(req,resp)=>{
    res.send('Teste post');
})

app.listen(port,()=>{
    console.log(`Exemplo app ouvindo port ${port}`)
});
