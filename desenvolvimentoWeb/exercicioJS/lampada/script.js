let quebra = 0;

document.querySelector('#imgUm').addEventListener('mouseover', () => {
    if (quebra == 0) {
        document.querySelector('#imgUm').src = './img/lampada-acesa.jpg';
    }
})

document.querySelector('#imgUm').addEventListener('mouseout', () => {
    if (quebra == 0) {
        document.querySelector('#imgUm').src = './img/lampada-apagada.jpg';
    }
})

document.querySelector('#imgUm').addEventListener('click', () => {
    document.querySelector('#imgUm').src = './img/lampada-quebrada.jpg';
    quebra++;
})

document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('#imgUm').src = './img/lampada-apagada.jpg';
    quebra = 0;
})