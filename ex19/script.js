function gerar(){
    let numero = document.querySelector('#numero').value
    let result = document.querySelector('#result')
    if(numero == '') {
        alert('[ERRO] - Digite um número')
    } else {
        numero = Number(numero)
        result.innerHTML=''
        for(let i = 1; i<=10; i++){
            let linha = document.createElement('option')
            linha.innerHTML = `${numero} x ${i} = ${numero * i}`
            result.appendChild(linha)          
        }
    }
}