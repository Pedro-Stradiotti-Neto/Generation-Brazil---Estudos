document.getElementById('btn').addEventListener('click', function (event) {
    let valorDigitado = document.querySelector('input').value; //Captura o valor do input
    document.write('O valor digitado é ' + valorDigitado + 'm' + ', ou ' + (valorDigitado * 100) + 'cm');

})