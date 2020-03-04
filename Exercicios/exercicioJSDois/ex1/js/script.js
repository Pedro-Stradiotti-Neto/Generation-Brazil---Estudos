// keycode.infor    -> Verifica as propriedades das teclas

document.getElementById('number').addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let valorDigitado = document.querySelector('input').value; //Captura o valor do input
        document.write('O valor digitado pelo usuário foi: ' + valorDigitado);
    }
    else if (event.code == 'Space') {
        alert('Tecla Inválida! Apague o espaço, digite um número e, em seguida, digite Enter')
    }
})