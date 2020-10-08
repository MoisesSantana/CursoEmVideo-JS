function contar(){
    var inicio = document.querySelector('#inicio').value
    var fim = document.querySelector('#fim').value
    var passo = document.querySelector('#passo').value

    if((inicio == '') || (fim == '') || (passo == '')) {
        alert('[ERRO] - Verifique se alguma caixa ficou vazia')
    }else if(passo <= 0){
        alert('[ERRO] - Verifique a caixa "passo" contém um número maior que "0"')
    }else {
        var result = ""
        var resposta = document.querySelector('#result')
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if(inicio < fim) {
            for(let i = inicio; i <= fim; i+= passo){
                result += `↪️ ${i} `
            }
        }else {
            for(let i = inicio; i >= fim; i-= passo)
                result += `↪️ ${i}`
        }
    }
    resposta.style.color = 'White'
    resposta.style.fontFamily = 'Ubuntu, sansSerif'
    resposta.innerHTML = `Resultado: ${result}`
}