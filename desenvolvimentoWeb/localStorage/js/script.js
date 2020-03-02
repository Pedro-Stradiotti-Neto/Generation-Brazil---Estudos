// document.onchange    -> Faz as ações programadas, quando ocorre qualquer mudança visual no site
// 'use strict';        -> Força as boas práticas da programação durante a criação;

if (localStorage.Estado) {
    document.getElementById("estado").value = localStorage.Estado;   // localStorage.getItem (Também pega o valor); 
}

if (localStorage.dataInicio) {
    document.getElementById("dataInicio").value = localStorage.dataInicio;
}

if (localStorage.dataFinal) {
    document.getElementById("dataFinal").value = localStorage.dataFinal;
}

document.querySelector("#add").addEventListener('click', () => {
    localStorage.setItem("Estado", document.getElementById("estado").value);
    localStorage.setItem("dataInicio", document.getElementById("dataInicio").value);
    localStorage.setItem("dataFinal", document.getElementById("dataFinal").value);
});

document.querySelector("#delete").addEventListener('click', () => {
    localStorage.removeItem("Estado");
    localStorage.removeItem("dataInicio");
    localStorage.removeItem("dataFinal");
});
