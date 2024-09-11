let valor, horas,DiasMes, horasMes ;
const $KWH= 0.75;

function $Maquina(){
    horas = 8;
    DiasMes = 25;
    horasMes = horas * DiasMes;
    valor = horasMes * $KWH;
    console.log("O valor que a maquina gastou esse mes foi de R$", valor +',00')
}

$Maquina()
