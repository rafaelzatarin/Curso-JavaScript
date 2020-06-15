var idade = 64
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log ('Não VOTA!')
} else if (idade < 18 || idade > 65){
    console.log('VOTO Opcional')
} else {
    console.log('VOTO Obrigatório')
}