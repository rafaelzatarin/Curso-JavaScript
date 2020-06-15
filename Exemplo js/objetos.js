let amigo = {nome: 'Jose',
 sexo: 'M',
 peso: 82.5,
 pesoatual(p = 0) {
    if (p > 0 ) {
        this.peso += p
        console.log(`Após casar ${amigo.nome} ENGORDOU e pesa: ${amigo.peso} kg.`)     
    } else {
        this.peso += p
        console.log(`Quando ${amigo.nome} entrou de Dieta e EMAGRECEU e pesa: ${amigo.peso} kg.`) 
    } 
 }
}
console.log(`${amigo.nome} pesa: ${amigo.peso} kg.`)

amigo.pesoatual(25.5)

amigo.pesoatual(-30)


console.log(amigo)