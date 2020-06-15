function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var cont = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    
    if (ini.value == '' || fim.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: </br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(cont.value)
        var c = ''

        if (p <=0 ) {
            alert('Passo inválido! Será considerado Passo = 1')
            p = 1
            cont.value = 1
        }

        if (i < f) {
            // Contagem crescente
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem Decrescente
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F37E}`
    }
}
