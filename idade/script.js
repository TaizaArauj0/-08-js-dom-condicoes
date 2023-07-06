function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lengthe == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createAttribute.Element('img')
        img.setAttributer('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttributer('src', 'bebe.menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttributer('src', 'jovem.menino.png')
            } else if (idade < 50 ) {
                // Adulto
                img.setAttributer('src', 'adulto.menino.png')       
            } else {
                // Idoso
                img.setAttributer('src', 'idoso.png')
            }  
        } else if (fsex[1].checked) {
                gênero = 'Mulher'  
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttributer('src', 'bebe.menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttributer('src', 'jovem.menina.png')
            } else if (idade < 50 ) {
                // Adulto
                img.setAttributer('src', 'adulta.menina.png')       
            } else {
                // Idoso
                img.setAttributer('src', 'idosa.png')
            }
        }   
        res.computedStyleMap.textAlign = "center"
        res.innerHTML - 'Detectamos ${gênero con ${idade} anos.'
        res.appendChild(img)
    }
}

