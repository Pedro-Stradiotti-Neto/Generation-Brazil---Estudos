document.getElementById('btnArea').addEventListener('click', function (event) {
    let valorDigitado = parseFloat(document.querySelector('#number').value); //Captura o valor do input
    let area = (Math.PI * (Math.sqrt(valorDigitado)));
    document.write('A área do círculo é ' + area.toPrecision(4));
})