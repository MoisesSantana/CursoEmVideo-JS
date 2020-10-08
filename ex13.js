var agora = new Date()


switch(agora.getDay()){
    case 0:
        var diaSem = 'Domingo'
        break
    case 1:
        var diaSem = 'Segunda'
        break
    case 2:
        var diaSem = 'Terça'
        break
    case 3:
        var diaSem = 'Quarta'
        break
    case 4:
        var diaSem = 'Quinta'
        break
    case 5:
        var diaSem = 'Sexta'
        break
    case 6:
        var diaSem = 'Sabado'
        break
    default:
        var diaSem = '[ERRO] - Semana inválida'
        break
}
console.log(`${diaSem}`)