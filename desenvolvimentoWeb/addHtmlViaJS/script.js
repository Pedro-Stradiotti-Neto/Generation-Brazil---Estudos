let nomes = ['Wheslley', 'Aline', 'João'];
let listElement = document.querySelector('ul');
let inputElement = document.querySelector('input');

function addItem(element) {
    let liElement = document.createElement('li');
    let textElement = document.createTextNode(element);        /* -> Pesquisar */
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
}

document.getElementById('btn').addEventListener('click', () => {
    addItem(inputElement.value);
    inputElement.value = '';

})

for (nome of nomes) {
    addItem(nome);
}