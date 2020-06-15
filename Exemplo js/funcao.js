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

console.log (parimpar(233))

//função 2
function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log (soma(2,5))
console.log (soma(2))

//função 3
let f = function(x) {
    return x*2
}
console.log(f(5))

//função 4
// fatorial de 5 === 5! = 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n) {
    let fat = 1
    for (let num = n; num > 1; num--) {
        fat *= num
    }
    return fat
}
console.log (fatorial(5))

//função 5 - RECURSIVIDADE
/* 
5! = 5 x 4 x 3 x 2 x 1 == 120
5! = 5 X 4! == 120
n! = n X (n-1)!
1! = 1
*/
function fatRecurs(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatRecurs(n-1)
    }
}
console.log(fatRecurs(5))
