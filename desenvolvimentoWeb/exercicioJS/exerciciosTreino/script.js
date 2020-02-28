// --------------------------------------------------------------
// Exercício 1

// document.querySelector('#btn').addEventListener('click', () => {
//     let number = document.querySelector('#number').value;
//     let numberInv;
//     numberInv = number.split("").reverse().join("")     //-> Função para reverter
//     document.write('Numero Informado: ' + number + '<br> Numero Invertido: ' + numberInv);

// })

// --------------------------------------------------------------
// Exercício 2

// document.querySelector('#btn').addEventListener('click', () => {
//     let palavra = document.querySelector('#number').value;
//     let palavraInv;
//     palavra = palavra.split(" ").join("")
//     palavraInv = palavra.split("").reverse().join("")     //-> Função para reverter

//     if (palavra === palavraInv) {
//         document.write("Isso é um palíndromo <br>");
//     } else {
//         document.write("Isso não é um palíndromo <br>");
//     }

//     document.write('Palavra Informado: ' + palavra + '<br> Palavra Invertida: ' + palavraInv);

// })

// --------------------------------------------------------------
// Exercício 3

// document.querySelector('#btn').addEventListener('click', () => {
//     let palavra = document.querySelector('#number').value;
//     let arrayPalavra = palavra.split("");
//     let arrayAux = arrayPalavra;
//     let arrayCombi = [];
//     let aux = '';

//     for (i = 0; i < arrayAux.length; i++) {
//         aux = arrayAux[i];
//         for (j = 1; j < arrayAux.length; j++) {
//             if (aux != arrayCombi[j]) {
//                 arrayCombi.push(aux)
//             }
//             aux = aux + arrayAux[j];
//         }
//         arrayAux.shift();        // -> Retira a primeira palavra
//         arrayCombi.push(aux);
//         i--;
//     }

//     document.write('Palavra Informada: ' + palavra + '<br> Combinações: ' + arrayCombi);
// })

// --------------------------------------------------------------
// Exercício 4

// document.querySelector('#btn').addEventListener('click', () => {
//     let palavra = document.querySelector('#number').value;
//     let arrayPalavra = palavra.split('');

//     document.write('Palavra Informada: ' + palavra + '<br> Ordem Alfabética: ' + (arrayPalavra.sort().join('')));
// })

// --------------------------------------------------------------
// Exercício 5

// document.querySelector('#btn').addEventListener('click', () => {
//     let palavra = document.querySelector('#number').value;
//     let arrayPalavra = palavra.split(' ');
//     let aux;

//     for (i = 0; i < arrayPalavra.length; i++) {
//         aux = arrayPalavra[i].charAt(0).toUpperCase()   //-> Coloca a letra para maiúscula.
//         arrayPalavra[i] = arrayPalavra[i].replace(arrayPalavra[i].charAt(0), aux)
//     }
//     document.write('Palavra Informada: ' + palavra + '<br> Palavras com Letra Maiúscula: ' + (arrayPalavra.join(' ')));
// })

// --------------------------------------------------------------
// Exercício 6

// document.querySelector('#btn').addEventListener('click', () => {

//     let palavra = document.querySelector('#number').value;
//     let arrayPalavra = palavra.split(' ');
//     let compara = arrayPalavra[0];
//     for (i = 0; i < arrayPalavra.length; i++) {
//         console.log(arrayPalavra[i]);
//         console.log(arrayPalavra[i].length);
//         if (arrayPalavra[i].length > compara.length) {
//             compara = arrayPalavra[i];
//         }
//     }

//     document.write('Palavra Informada: ' + palavra + '<br> Maior Palavra: ' + compara);
// })

// --------------------------------------------------------------
// Exercício 7

// document.querySelector('#btn').addEventListener('click', () => {

//     let palavra = document.querySelector('#number').value;
//     let arrayPalavra = palavra.split('');
//     let compara = ['a', 'e', 'i', 'o', 'u'];
//     let cont = 0;

//     for (i = 0; i < arrayPalavra.length; i++) {
//         for (j = 0; j < compara.length; j++) {
//             if (arrayPalavra[i] == compara[j]) {
//                 cont++;
//             }
//         }
//     }

//     document.write('Palavra Informada: ' + palavra + '<br> Possui ' + cont + ' vogais.');
// })

// --------------------------------------------------------------
// Exercício 8

document.querySelector('#btn').addEventListener('click', () => {

    let palavra = parseInt(document.querySelector('#number').value);
    let primo = 0;
    let j = palavra;
    let atual = 0;

    // Calcular se Número é Primo
})
