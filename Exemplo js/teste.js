let num = []
x=5
num.push(x)

console.log(`Vetor completo: ${num}`)

for (let pos in num) {
    console.log(` ${pos} -> ${num[pos]}`)
}
//x = 5

console.log(x)
/*S
let f = function(x) {
    return x*2
}
console.log(f(5))

//função 1
function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let ret = parimpar(10)
console.log(ret)


/*
var is=5
var fs=12
var cs=2
for(is; is<=fs; is+=cs){
    console.log(`${is}`)
} 

var ii=12
var fi=5
var ci=2
for(ii; ii>=fi; ii-=ci){
    console.log(`${ii}`)
} 
*/
