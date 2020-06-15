function gerarTab() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('selTab')

    if (num.value == '') {
        alert('Número não pode ser em Branco')
        num.focus()

    } else {
        var n = Number(num.value)
        var c = 1 // variavél de inicação da contagem
        res.innerHTML = '' // limpando o campo de select antes de executar novamente

        for (c; c <= 10; c++) {
            // criando elemento option via JS 
            var rTab = document.createElement('option')
            // alimentando o elemento option criado acima
            rTab.text = (`${n} x ${c} = ${n * c}`)
            // alimentado o parâmetro "value" do elemento, necessário quando utilizado em PHP
            rTab.value = `res${c}` 
            // retornando o valor de option no select
            res.appendChild(rTab)
            // apersentado o campo selecionado após execução
            res.focus()
        }
    }
}