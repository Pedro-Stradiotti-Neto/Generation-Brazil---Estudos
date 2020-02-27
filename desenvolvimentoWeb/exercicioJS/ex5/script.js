document.getElementById('btnF').addEventListener('click', function (event) {
    let valorDigitado = parseFloat(document.querySelector('#numberC').value); //Captura o valor do input
    let temp = (valorDigitado * 9 / 5) + 32;
    document.write('Temperatura em Fahrenheit é: ' + temp.toPrecision(4) + 'ºF');
})

document.getElementById('btnC').addEventListener('click', function (event) {
    let valorDigitado = parseFloat(document.querySelector('#numberF').value); //Captura o valor do input
    let temp = (valorDigitado - 32) * (5 / 9);
    document.write('Temperatura em Celsius é: ' + temp.toPrecision(4) + 'ºC');
})