var inputEmail = document.getElementById('input-Email')

inputEmail.addEventListener('keyup', function() {
    check()
})

function check() {
    if (validarEmail(inputEmail.value) == GREEN) {
        inputEmail.style.border = 'solid 3px lime'
    } else if (validarEmail(inputEmail.value) == YELLOW){
        inputEmail.style.border = 'solid 3px yellow'
    } else if (validarEmail(inputEmail.value) == RED){
        inputEmail.style.border = 'solid 3px red'
    } else if (validarEmail(inputEmail.value) == BLACK){
        inputEmail.style.border = 'solid 3px black'
    } else if (validarEmail(inputEmail.value) == NONE){
        inputEmail.style.border = 'solid 1px gray'
    }
}
