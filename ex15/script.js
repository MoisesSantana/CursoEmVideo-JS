function verificar(){
    var idade = document.querySelector('#idade').value
    var aux = []
    var subIdade = new Date()
    var result = document.querySelector('#result')
    var sex = document.getElementsByName('sex')
    for(let i=0; i<4; i++){
        aux.push(idade[i])
    }
    aux = aux.join("")
    idade = Number(aux)   
    subIdade = subIdade.getFullYear()
    var idadeTotal = subIdade - idade
    var img = document.createElement('img')
    if(idade == "" || idade > 2020){
        alert('[ERRO] - Data inválida')
    } else {
        if(sex[0].checked){
            sex = 'Homem'
            if(idadeTotal < 5) {
                img.setAttribute('src', 'bebem.png')
            } else if(idadeTotal < 13) {
                img.setAttribute('src', 'criancam.png')
            } else if(idadeTotal < 30) {
                img.setAttribute('src', 'adolescentem.png')
            } else if(idadeTotal < 60) {
                img.setAttribute('src', 'adultom.png')
            }else {
                img.setAttribute('src', 'idosom.png')
            }
        } else {
            sex = 'Mulher'
            if(idadeTotal < 5) {
                img.setAttribute('src','bebef.png')
            } else if(idadeTotal < 13) {
                img.setAttribute('src', 'criancaf.png')
            } else if(idadeTotal < 30) {
                img.setAttribute('src', 'adolescentef.png')
            } else if(idadeTotal < 60) {
                img.setAttribute('src', 'adultof.png')
            }else {
                img.setAttribute('src', 'idosof.png')
            }
        }
    }
    result.style.textAlign = 'center'
    result.style.fontWeight = 'bolder'
    result.innerHTML = `Você é ${sex} com ${idadeTotal} anos`
    result.appendChild(img)
}

