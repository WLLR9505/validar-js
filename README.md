### Validador

Um simples validador de e-mail por JavaScript, onde a caixa de texto muda de cor conforme o conteúdo é inserido.  

> [Preview](https://wllr9505.github.io/validar-js/)  

Um simples validador de e-mail por JavaScript, onde a caixa de texto muda de cor conforme o conteúdo é inserido.

| sinal     | motivo                                                                        |
|   -       |     -                                                                         |
|PRETO      | caracter inválido : ! % $ ;                                                   |
|VERMELHO   | necessário no mínimo 3 caracteres antes do '@' e este não estar depois do '.' |
|AMARELO    | possui '@', porém necessário '.' com 2 caracteres antes e depois              |
|VERDE      | válido, mínimo 3 caracteres antes do '@' e 2 antes e depois do '.'            |

 ## Exemplos de teste

|   sinal    |                                              Exemplo               |
| -          |                                     -                              |
| PRETO      | !                    | wllr$                | wllr&#64;#mail.com   |
| VERMELHO   | w                    | wl                   | wllr                 |
| AMARELO    | wllr@                | wllr&#64;mail        | wllr@mailcom         |
| VERDE      | jnr&#64;ml.co        | wllr&#64;ml.com      | wllr&#64;ml.com      |
