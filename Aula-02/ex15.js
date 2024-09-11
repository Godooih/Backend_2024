const altura = 1.78;
const peso = 92;
let IMC

IMC = peso/altura**2
console.log(IMC)

if(IMC < 18.5){
    console.log("Magreza")
}
if(IMC > 18.5 && IMC < 25){
    console.log("Normal")
}
if(IMC >= 25 && IMC < 30){
    console.log("Sobrepeso")
}
if(IMC >= 30 && IMC < 40){
    console.log("Obesidade")
}
if(IMC >= 40){
    console.log("Obesidade Grave")
}