class Maquinas{
    constructor(){
        this.nome = null
        this.NEixo = null
        this.RPM = null
        this.consumoEE = null
        this.status_enegia = false
    }
}

class Furadeira extends Maquinas{
    constructor(nome,consumoEE,RPM){
        super()
        this.nome =nome
        this.consumoEE = consumoEE
        this.RPM = RPM
        this.status_enegia = false
    }
    

    exibeinfo(){
        //console.log(this.nome, this.RPM,this.consumoEE)
        console.log(this.nome, this.consumoEE,this.RPM,this.status_enegia)
    }

    ligar_maquina(){
        console.log('A maquina ligou')
        this.status_enegia= true
    }
    desligar_maquina(){
        console.log('A maquina desligou')
        this.status_enegia=false
    }
    ajuste_rpm(nova_RPM){
        this.RPM=nova_RPM
        console.log(`O RPM foi definido para ${nova_RPM}`)
    }
}

maquina_1 = new Furadeira('furadeira',300,4000,false)
maquina_1.exibeinfo()
maquina_1.ajuste_rpm(6000)
//maquina_1.desligar_maquina()
maquina_1.ligar_maquina()
