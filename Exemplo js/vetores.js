let num = [5,20,10,50,2,100,80]
num[7] = 3
num.push(22)
num.sort()
console.log(`Meu vetor tem: ${num.length} posições`)
console.log(`Vetor completo: ${num}`)
console.log(`Valor da 4ª posição é: ${num[3]}`)
/*
// primeira forma de fazer 
for (let p=0; p<num.length; p++) {
        console.log(`A posição ${p} tem o valor ${num[p]}`)
}
*/
// segunda forma de fazer em JS nas versões mais rescentes (apatir de 2019)
// Lendo o comando abaixo: Para cada "posição" em "num", retornar "num[pos]"
for (let pos in num) {
        console.log(` ${pos} -> ${num[pos]}`)
}

let p1 = num.indexOf(50)
if (p1 == -1) {
        console.log('Valor de elemento não existe no vetor')
} else {
        console.log(`O elemento 50 está no índice/chave: ${p1}.`)
}

let p2 = num.indexOf(400)
if (p2 == -1) {
        console.log('Valor de elemento NÃO EXISTE no Vetor')
} else {
        console.log(`O elemento 50 está no índice/chave: ${p2}.`)
}
