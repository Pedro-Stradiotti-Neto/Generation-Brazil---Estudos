//  Programação para Eventos
//  DOM -> Document Object Model (Basicamente é a arvore de comandos do código!)
//  document.getElementById("ID do Objeto") -> Pega o elemento do HTML para o JS
//  btn.addEventListener('__',___);     -> Percebe-se um evento que o objeto irá realizar
//                            |->  Método / Função a ser realizado quando ocorrer o evento.
//                        |-> Evento que irá ocorrer no objeto
//                            click     -> Clique no botão
//                            mouseover -> Passar o mouse por cima
//                            mouseout  -> Desloca o cursor para fora do botão
//  window.location.href = 'URL'        -> Faz a movimentação para outro site

//  Criar funções normais           -> Function name () {}
//  Arrow Function                  -> let a = () => {}
//  Anonymous function - Lambda     -> let a = function () {}

// function mensagem() {
//     alert("Olá Mundo!");
// }

let btn = document.getElementById("btn");
let btn1 = document.getElementById('btn1');

//      Redireciona a página para outra
btn.addEventListener('click', () => {
    window.location.href = 'https://www.google.com.br';
});

//      Abre uma nova aba com o link informado
// btn1.addEventListener('click', () => {
//     window.open('https://www.google.com.br', '_blank')
// });

btn1.addEventListener('click', () => {
    document.getElementsByTagName('div')[1].style.background = "red";
});
