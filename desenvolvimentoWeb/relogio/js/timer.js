// innerHTML    -> Escreve/adiciona no mundo HTML
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML

let currentTime = document.getElementById('currtime');

function ajustaValor(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function updateTime() {
    let timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds()

    currentTime.innerHTML = ajustaValor(hh) + '<span>:</span>' + ajustaValor(mm) + '<span>:</span>' + ajustaValor(ss);

    setTimeout(updateTime, 1000);

}

updateTime();