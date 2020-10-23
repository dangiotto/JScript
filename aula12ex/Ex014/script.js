function carregar() {
    var msg = window.document.querySelector('section div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //dia
        img.src = 'dia.png'
        document.body.style.background = '#FEA128'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#7E685A'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#18294D'
    }
}
