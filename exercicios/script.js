// ---------------  Exercício 1 - Lista ------------------ OK
// Calcular Maior numero de uma lista

// let numeros = [];
// let num = 0;

// for(i=0; i<=7; i++){
//     numeros.push(Math.round(Math.random()*10));
// }

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

// num = numeros.length;

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
// letraTroca = letraTroca.charAt(0);   

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

// for(i=0; i<numeros.length; i++){
//     aux = (numeros[i]/2);
//     if(Number.isInteger(aux)){
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

// ---------------  Exercício 10 - Lista ------------------
// Localizar numero de vezes que aparece a palavra

// let palavras = ["Maçã","Abacaxi","Manga","Maçã","Goiaba","Abacate","Maçã","Abacaxi","Melancia"];

// for(j=0; j<palavras.length; j++){
//     for(i=0; i<palavras.length; i++){

//     }
// }

// console.log();


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

// for(i=0; i<numeros.length; i++){
//     numerosInv[i] = numeros[(numeros.length-i-1)];
// }

// // numeros.reverse();

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