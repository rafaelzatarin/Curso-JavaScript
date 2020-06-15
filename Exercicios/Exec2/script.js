function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Preenchar o ano novamente')
    } else {
        var fsex = document.getElementsByName('rdsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        // Seria o mesmo que declarar <img id='foto'> dentro da "div#ret" no html
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //'Criança'
                img.setAttribute('src','img/bebe-M.png')
            } else if (idade < 21) {
                //'Jovem'
                img.setAttribute('src','img/jovem-M.png')
            } else if (idade < 50) {
                //'Adulto'
                img.setAttribute('src','img/adulto-M.png')
            } else {
                //'Idoso'
                img.setAttribute('src','img/idoso-M.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //'Criança'
                img.setAttribute('src','img/bebe-F.png')
            } else if (idade < 21) {
                //'Jovem'
                img.setAttribute('src','img/jovem-F.png')
            } else if (idade < 50) {
                //'Adulto'
                img.setAttribute('src','img/adulto-F.png')
            } else {
                //'Idoso'
                img.setAttribute('src','img/idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}