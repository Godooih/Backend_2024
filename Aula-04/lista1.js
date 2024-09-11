class carro{
    constructor(){
        this.marca = null
        this.modelo = null
        this.ano = null
        this.motor_ligado = false
    }
        exibeinfo(){
            console.log(`O motor está ${this.motor_ligado} o carro é um ${this.modelo} ${this.ano} da marca ${this.marca}`);
        }
        ligar_motor(){
            this.motor_ligado = true
            console.log("O motor está ligado")
        }
        desliga_motor(){
            this.motor_ligado = false
            console.log("O motor desligou")
        }
        status_motor(){
            console.log(`O motor está ${this.motor_ligado}`)
        }

}

Etios = new carro()
Etios.marca="Toyota"
Etios.ano=2013
Etios.modelo="Etios XS 1.3 manual"
Etios.exibeinfo();
Etios.status_motor()
Etios.ligar_motor()
Etios.exibeinfo()