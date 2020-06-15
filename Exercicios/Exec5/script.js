let num = document.getElementById('txtn')
let retNAdd = document.getElementById('retn')
let res = document.querySelector('div#res')
let list = []

function isnumber(nu) {
    if (Number(nu) >=1 && Number(nu) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(nu,li) {
    if (li.indexOf(Number(nu)) != -1) {
        return true
    } else {
        return false
    }
}

function addNum() {
    res.innerHTML = ''    
    if (isnumber(num.value) && !inlist(num.value, list)) {
        let nu = Number(num.value)
        list.push(nu)
        let rNum = document.createElement('option')
        rNum.text = `Valor ${nu} adicionado`
        retNAdd.appendChild(rNum)

    } else {
        alert('Valor é inválido ou já encontrado na lista')  
    }
    num.value=''
    num.focus()
}

function finalizar() {
    if (list.length == 0){
                alert('Não exixtem números na lista para analisar')
    } else {
        let tot = list.length
        let maior = list[0] 
        let menor = list[0]
        let soma = 0
        let media = 0
        for (let pos in list) {
            soma += list[pos]
            if (list[pos] > maior)
                maior = list[pos]
            if (list[pos] < menor)
                menor = list[pos]
        }
        media = soma / tot
        
        res.innerHTML = `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi: <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi: <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é: <strong>${media}</strong>.</p>`       
    }
}