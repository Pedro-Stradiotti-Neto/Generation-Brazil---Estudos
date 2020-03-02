// ---------------  Exercício 1 - Lista ------------------ OK
// Calcular Maior numero de uma lista

// let numeros = [];
// let num = 0;

//    Sorteia os numeros para o array.

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

//    Verifica qual o maior numero na sequencia sorteada

// for(i=0; i<numeros.length; i++){
//     if(numeros[i]>num){
//         num = numeros[i];
//     }
// }

// console.log(num);
// document.write(num);

// ---------------  Exercício 2 - Lista ------------------ OK
// Calcular o tamanho de um array

// let numeros = [];
// let num = 0;

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

//     Utilizado a função lenght, porém o código puro necessita somente de um for() e uma variável contadora.

// num = numeros.length;

// console.log(num);

// ---------------  Exercício 3 - Lista ------------------ OK
// Calcular todas as operações entre dois numeros

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

// ---------------  Exercício 4 - Lista ------------------ OK
// Ajustar a ordem dos numeros, em ordem crescente

// let numeros = [];
// let num = 0;

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }
// console.log(numeros);

//     Vai fazendo a comparação dos numeros dentro do array para realizar o posicionamento deles.
//     [3, 2, 8, 1, 5]
//     [2, 3, 1, 5, 8]
//     [2, 1, 3, 5, 8]
//     [1, 2, 3, 5, 8]

// for(j=0; j<numeros.length-1; j++){
//     for(i=0; i<numeros.length-1; i++){
//         if(numeros[i+1]<numeros[i]){
//             num = numeros[i];
//             numeros[i] = numeros[i+1];
//             numeros[i+1] = num        
//         }

//     }
// }
// console.log(numeros);
// document.write(numeros);

// ---------------  Exercício 5 - Lista ------------------ OK
// Contar o numero de vezes que um numero aparece

// let numeros = [];
// let contador = 0;
// let num = 4;

// for(i=0; i<=20; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

//     Compara o numeros de vezes que o numero apareceu na sequencia

// for(i=0; i<numeros.length; i++){
//     if(num == numeros[i]){
//         contador++;
//     }
// }

// console.log(numeros);
// console.log("O numero " + num + " apareceu na sequencia " + contador + " vezes.");

// ---------------  Exercício 6 - Lista ------------------ OK
// Inverter palavras

// let palavras = ["Maçã","Abacaxi","Manga"];
// let aux;

//       O primeiro for() faz a varredura das palavras presentes dentro do array (palavras[j]).
//       No segundo for() é realizado a varredura das letras de cada palavra, exemplo:
//       palavra[0] -> Lapis
//       palavra[0][0] -> L
//       palavra[0][1] -> A
//       palavra[0][2] -> P
//       palavra[0][3] -> I
//       palavra[0][4] -> S
//       Obs.: No código, é pego a ultima letra fazendo a subtração do tamanho da palavra para com o indice i

// for(j=0; j<palavras.length; j++){
//     aux = "";
//     for(i=1; i<=palavras[j].length; i++) {
//         aux = aux + palavras[j][(palavras[j].length-i)]
//     }
//     palavras[j] = aux;
// }

// console.log(palavras);

// ---------------  Exercício 7 - Lista ------------------ OK
// Substituir um caracter da palavra

// let palavras = ["Maçã","Abacaxi","Manga"];
// let aux, letra, letraTroca;
// let contador = 0;

// letra = prompt("Qual letra você deseja trocar? (" + palavras + ")")
// letraTroca = prompt("Para qual?");
// letraTroca = letraTroca.charAt(0);   ->  Quando o  usuario digitar uma frase, somente é pega a primeira letra

// for(j=0; j<palavras.length; j++){
//     aux = "";
//     for(i=0; i<palavras[j].length; i++) {
//         if(palavras[j][i] == letra){
//                 aux = aux + letraTroca;
//         } 
//         else 
//         {
//             aux = aux + palavras[j][i];
//         }
//     }
//     palavras[j] = aux;
// }

// console.log(palavras);

// ---------------  Exercício 8 - Lista ------------------ OK
// Encontra os numeros pares

// let numeros = [];
// let numerosPares = [];
// let contador = 0;
// let aux = 0;

// for(i=0; i<20; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

//      Para verificar se é um numero par, divide o numero por 2 e caso o mesmo dê um numero inteiro, ele é par

// for(i=0; i<numeros.length; i++){
//     aux = (numeros[i]/2);
//     if(Number.isInteger(aux)){       -> Função que verifica se o numero é inteiro.
//         contador++;
//         numerosPares.push(numeros[i]);
//     }
// }

// console.log(numeros);
// console.log("Foram localizados " + contador + " numeros pares, sendo eles: " + numerosPares);

// ---------------  Exercício 9 - Lista ------------------ OK
// Calcular valor médio

// let numeros = [];
// let contador = 0;
// let media = 0;

// for(i=0; i<20; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

// for(i=0; i<numeros.length; i++){
//     contador = contador + numeros[i];
// }

// media = (contador/numeros.length);

// console.log(numeros);
// console.log(media);

// ---------------  Exercício 10 - Lista ------------------ OK
// Localizar numero de vezes que aparece a palavra

// let arrayPalavras = ["Maçã","Abacaxi","Manga","Goiaba","Abacate","Melancia","Banana","Limão","Uva","Laranja"];
// let comparacao = [];
// let palavras = [];
// let num;
// let aux = 0;

//      Sorteia as palavras do arrayPalavras randomicamente, colocando-os no palavras, nota-se que 
//      deve subtrair 1 do arrayPalavras para que não se tenha um indice maior que o array.

// for(i=0; i<39; i++){
//     aux = Math.round(Math.random()*(arrayPalavras.length-1))
//     palavras.push(arrayPalavras[aux]);
// }

//      Adiciona ao array comparacao, as palavras "base" que aparecem somente 1 vez, para se fazer a contagem.

// for(j=0; j<palavras.length; j++){
//     aux = 0;
//     for(i=0; i<comparacao.length; i++){
//         if(palavras[j] == comparacao[i][0]){
//             aux++;
//         }
//     }
//     if(aux == 0){
//         comparacao.push([palavras[j],0]);
//     }
// }

//      Compara as palavras e adiciona o numero de vezes que ela aparece dentro do array comparacao, no segundo
//      indice do array interno (comparacao[0][0] -> comparacao = [["Abacaxi",0],...].

// for(j=0; j<comparacao.length; j++){
//     for(i=0; i<palavras.length; i++){
//         if(comparacao[j][0] == palavras[i]){
//             comparacao[j][1]++;
//         }
//     }
// }

//      Coloca-os em ordem crescente/decrescente a sequencia de palavras que aparece.

// for(j=0; j<comparacao.length-1; j++){
//     for(i=0; i<comparacao.length-1; i++){
//         if(comparacao[i+1][1] > comparacao[i][1]){
//             num = comparacao[i];
//             comparacao[i] = comparacao[i+1];
//             comparacao[i+1] = num        
//         }

//     }
// }

//      Imprimi todas as palavras.

// for(i=0; i<comparacao.length; i++){
//     console.log("Você possui " + comparacao[i][1] + " " + comparacao[i][0]);
// }

// ---------------  Exercício 11 - Lista ------------------ OK
// Ajustar Numeros na forma decrescente

// let numeros = [];
// let num = 0;

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }
// console.log(numeros);

// for(j=0; j<numeros.length-1; j++){
//     for(i=0; i<numeros.length-1; i++){
//         if(numeros[i+1]>numeros[i]){
//             num = numeros[i];
//             numeros[i] = numeros[i+1];
//             numeros[i+1] = num        
//         }

//     }
// }
// console.log(numeros);
// document.write(numeros);

// ---------------  Exercício 12 - Lista ------------------ OK
// Inverter a ordem de uma lista

// let numeros = [];
// let numerosInv = [];
// let num = 0;

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }
// console.log(numeros);

//      Faz a inversão do array, utilizando um array auxiliar

// for(i=0; i<numeros.length; i++){
//     numerosInv[i] = numeros[(numeros.length-i-1)];
// }

// // numeros.reverse();        -> Função que faz a inversão automaticamente do array

// console.log(numerosInv);
// document.write(numerosInv);

// ---------------  Exercício 13 - Lista ------------------ OK
// Descobrir se o elemento existe na sequencia

// let numeros = [];
// let contador = 0;
// let num = 4;

// for(i=0; i<=4; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

// for(i=0; i<numeros.length; i++){
//     if(num == numeros[i]){
//         contador++;
//     }
// }

// if(contador>0){
//     console.log(numeros);
//     console.log("O numero " + num + " apareceu na sequencia " + contador + " vezes.");
// } else {
//     console.log("Numero não localizado!")