// ---------------  Primeiro Programa - Ex1  ------------------
// Programando as quatro operações (dois numeros)

// function mostra(operacao,resultado){
//     console.log("O resultado da " + operacao + " é: " + resultado)
//     document.write("O resultado da " + operacao + " é: " + resultado + "<br>");
// }

// let numeroUm, numeroDois, soma, subtracao, multiplicacao, divisao;

// numeroUm = parseInt(prompt("Digite o primeiro numero:"));
// numeroDois = parseInt(prompt("Digite o segundo numero:"));

// soma = numeroUm + numeroDois;
// subtracao = numeroUm - numeroDois;
// multiplicacao = numeroUm * numeroDois;
// divisao = numeroUm / numeroDois;

// mostra("soma",soma);
// mostra("subtração",subtracao);
// mostra("multiplicação",multiplicacao);
// mostra("divisão",divisao);

// ---------------  Segundo Programa - Ex2  ------------------
// Verificação dos valores, em relação a uma numero definido

// Declaração de variáveis
// let n1 = 5, n2 = 5, n3 = 10, n4 = 8, media, notaPassar, notaRecUm;

// // Atribuição de valores as variaveis
// n1 = 3;
// n2 = 5;
// n3 = 6;
// n4 = 8;
// notaPassar = 7;
// notaRecUm = 5;

// // Operação Matemática
// media = (n1+n2+n3+n4)/4;
// document.write("A média é: " + media + "<br>");

// if(media >= notaPassar){
//     document.write("Você foi aprovado, Parabéns!");
// } 
// else if(media >= notaRecUm && media < notaPassar){
//     document.write("Você está de recuperação.");
// }
// else {
//     document.write("Você foi reprovado. :(");
// }

// ---------------  Terceiro Programa - Ex3  ------------------
// Seleção de dados (Switch-Case)

// let mes;

// mes = prompt("Escolha o mês!")

// switch (mes) {
//     case "Janeiro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Fevereiro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Marco":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Abril":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Maio":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Junho":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Julho":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Agosto":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Setembro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Outubro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Novembro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     case "Dezembro":
//         document.write("Você escolheu o mês de " + mes + ".");
//         break;
//     default:
//         alert("Mês não encontrado!");
//         break;                    
// }

// ---------------  Quarto Programa - Ex4  ------------------
// Aprimoramento de criação de uma tabela

// let linha, coluna;

// linha = parseInt(prompt("Digite o numero de linhas da matriz."));
// coluna = parseInt(prompt("Digite o numero de colunas da matriz."));

// for (let i = 0; i < linha; i++) {
//     for(let j = 0; j < coluna; j++){
//         document.write("*");
//     }
//     document.write("<br>")
// }

// ---------------  Quinto Programa - Ex5  ------------------
// Seleção do mês através do numero passado

// let meses = [];

// meses.push(["Janeiro",01]);
// meses.push(["Fevereiro",02]);
// meses.push(["Março",03]);
// meses.push(["Abril",04]);
// meses.push(["Maio",05]);
// meses.push(["Junho",06]);
// meses.push(["Julho",07]);
// meses.push(["Agosto",08]);
// meses.push(["Setembro",09]);
// meses.push(["Outubro",10]);
// meses.push(["Novembro",11]);
// meses.push(["Dezembro",12]);

// let mes = parseInt(prompt("Informe o numéro do mês."));

//         x -      0                1                     11
//         y -      0     1         0      1            0      1
//            [["Janeiro",01],["Fevereiro",02],...,["Dezembro",12]]
// meses[x][y] - o indice X navega entre os dados do vetor, e o indice
//               y navega entre os dados do vetor interno.

// for(i=0; i<meses.length; i++){
//     if (meses[i][1] == mes) {
//         console.log("O mês correspondente é: " + meses[i][0]);        
//     }
// }

// let myObject = [
// {
//     nome: "Pedro",
//     idade: 25
// },
// {
//     nome: "Emily",
//     idade: 29
// }
// ];

// console.log(myObject[0].nome);
// console.log(myObject[0].idade);
// console.log(myObject[1].nome);
// console.log(myObject[1].idade);

// ---------------  Sexto Programa - Ex6  ------------------
// Criação de Array, de outro modo, mais usado

// let contato = { 
//     'nome': 'Patrick',
//     'idade': 25,
//     'telefones': ['(11) 9 333333', '(11) 2323-9232']
// };

// let listContatos = [];
// listContatos.push({ 
//     'nome': 'Patrick',
//     'idade': 25,
//     'telefones': ['(11) 9 333333', '(11) 2323-9232']
// });

// listContatos.push({ 
//     'nome': 'Wheslley',
//     'idade': 28,
//     'telefones': ['(11) 9 333333']
// });
