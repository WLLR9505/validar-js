var inputEmail = document.getElementById('input-Email')

inputEmail.addEventListener('keyup', function() {
    check()
})

function check() {
    if (validarEmail(inputEmail.value) == sinal.green) {
        inputEmail.style.border = 'solid 3px lime'
    } else if (validarEmail(inputEmail.value) == sinal.yellow){
        inputEmail.style.border = 'solid 3px yellow'
    } else if (validarEmail(inputEmail.value) == sinal.red){
        inputEmail.style.border = 'solid 3px red'
    }
}
