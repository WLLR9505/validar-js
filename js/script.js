var sinal = {
    red: -1,
    green:  0,
    yellow: 1
}

function validarEmail(email) {
    var email_s = new String(email)
    var posArroba //marca posição do @
    var posDot    //marca posição do '.'
    var tam = email_s.length

    if (email == '') {
        console.log('informe o Email')
    } else if ((posArroba = email_s.search('@')) > 0) { //se possui '@' depois da posição 0 'a@g'
        if ((posDot = email_s.search('\\.')) > 2) {     //se possui '.' depois da posição 2 'a@g.com'
            if(posArroba < posDot && (posDot - tam < -2)) {    //se '@' vem antes do '.' e se o '.' é menor que o tamanho
                console.log('email valido: ' + email_s)
                return sinal.green
            }
        } else {
            console.log('email invalido, posArroba: ' + posArroba + ' posDot: ' + posDot + ' tamanho: ' + email_s.length)
            return sinal.yellow
        }
    } else {
        console.log('informe um email valido')
        return sinal.red
    }
}
