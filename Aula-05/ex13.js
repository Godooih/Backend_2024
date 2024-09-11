let carro={
    nome:'Etios',
    cor:'Vermelho',
    ano: 2013,
    velocidade: function(){
        return this.nome+  '150 KM/h'
    }
}

console.log(carro)
console.log(carro.velocidade())