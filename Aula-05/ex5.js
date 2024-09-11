nomes = ['Thales', 'Giulia', 'Rogerio', 'Simone']
console.log(nomes)
nomes.splice(1,1,'Pablo')//splice adiciona elementos e remove em uma posição expesifica
console.log(nomes)
const nomes2 = nomes.slice(1,4) // fatia a lista da posição 1 até a 4
console.log(nomes2)
console.log(nomes.length)// apresenta o tamanho da lista