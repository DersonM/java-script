function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 12

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //Bom dia 
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e0e1e6'

    } else if (hora >= 12 && hora < 18 ) {
        //Boa Tarde !
        img.src = 'fototarde.jpg'
        document.body.style.background = '#ffd698'
    } else {
        // Boa Noite !
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#5d73a4'
    }
 }
