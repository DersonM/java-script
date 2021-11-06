function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var r = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] VErifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexuali = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            sexuali = 'Homen'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemh.jpg')
            } else if (idade < 30) {
                //aduto experinte
                img.setAttribute('src', 'homenq.jpg')
            } else { (idade > 60 ) 
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (sex[1].checked) {
            sexuali = 'Mulher'
        }
        r.innerHTML = `Detectamos ${sexuali} com ${idade}`
        r.appendChild(img)
    }
}