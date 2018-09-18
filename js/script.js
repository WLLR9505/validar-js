const BLACK = -2;
const RED = -1;
const GREEN = 0;
const YELLOW = 1;
const NONE = 2;

function validarEmail(email) {
    var email_s = new String(email);
    var posArroba = email_s.search('@'); //marca posicao do @
    var posDot = email_s.search('\\.');    //marca posicao do '.'
    var tam = email_s.length;
    var symbols = /[!#$%+^&*()_\-=¨\[\]{};\':"\\|,<>\/? ]+/;

    if (symbols.test(email)) {
        console.log('caracter invalido');
        return BLACK;
    }

    if (email == '') {
        return NONE;
    } else if (posArroba > 2 && posDot > posArroba) {   //'@' em posicao valida
        if ((posDot != -1) && (posDot - posArroba > 2)) {   //'.' em posicao valida
                if (tam - posDot > 2) {
                    return GREEN;
                }
                    return YELLOW;
        } else {
            return YELLOW
        }
    } else {
        return RED
    }
}
