document.getElementById('btnConversor').addEventListener('click', function (event) {
    let valorDigitado = parseFloat(document.querySelector('#number').value); //Captura o valor do input
    document.write('O valor digitado é ' + valorDigitado + 'cm' + ', ou ' + (valorDigitado * 0.393701) + '"');

})