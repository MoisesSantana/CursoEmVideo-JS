function carregar (){
    var dia = document.querySelector('#dia')
    var hora = document.querySelector('#hora')
    var img = document.querySelector('#imagem')
    var data = new Date()
    switch(data.getMonth()){
        case 0:
            var mes = 'Janeiro'
            break
        case 1:
            var mes = 'Fevereiro'
            break
        case 2:
            var mes = 'Março'
            break
        case 3:
            var mes = 'Abril'
            break
        case 4:
            var mes = 'Maio'
            break
        case 5:
            var mes = 'Junho'
            break
        case 6:
            var mes = 'Julho'
            break
        case 7:
            var mes = 'Agosto'
            break
        case 8:
            var mes = 'Setembro'
            break
        case 9:
            var mes = 'Outubro'
            break
        case 10:
            var mes = 'Novembro'
            break
        case 11:
            var mes = 'Dezembro'
            break
        default:
            var mes = '[ERRO] - Mês desconhecido'
            break
    }
    dia.innerHTML = `${data.getDate()} - ${mes} - ${data.getFullYear()}`
    hora.innerHTML = `${data.getHours()}:${data.getMinutes()}`
    if(data.getHours() < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#C8FFFF'
    } else if(data.getHours() < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#FFCD38'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#403984'
    }
    console.log(`${data.getDate()} - ${mes} - ${data.getFullYear()}`)
    console.log(`${data.getHours()}`)
}