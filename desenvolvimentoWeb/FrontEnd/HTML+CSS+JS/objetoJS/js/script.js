/* Orientação ao Objeto (INICIAÇÃO)
    Objetos         -> Objeto a ser criado
        Atributos   -> Propriedades referentes ao objeto
        Métodos     -> Ação que se realiza para "modificar" os atributos do objeto

    MyObject.prototype.Nome = function(){}  -> Criação de função, onde quando criado
                                               deve-se usar o "prototype" quando se
                                               referenciar à objeto.
    
    ...
*/

let teste = new String("teste");
let teste2 = "teste";

// Criação padrão de um "objeto"
function MyCar(cor, velMax) {
    this.Cor = cor;
    this.VelMax = velMax;
    this.VelAtual = 0;
}

MyCar.prototype.Acelerar = function () {
    if (this.VelAtual < this.VelMax) {
        this.VelAtual++;
    }
}

MyCar.prototype.Frear = function () {
    if (this.VelAtual > 0) {
        this.VelAtual--;
    }
}

let meuCarro = new MyCar('Vermelho', 180);
let meuFusca = new MyCar('Vermelho', 10);

console.log(meuCarro);

document.getElementById('acelerar').addEventListener('click', () => {
    meuCarro.Acelerar();
    meuFusca.Acelerar();
    minhaFerrari.Acelerar();
    console.log('Velocidade Atual (Carro): ' + meuCarro.VelAtual);
    console.log('Velocidade Atual (Fusca): ' + meuFusca.VelAtual);
    console.log('Velocidade Atual (Ferrari): ' + minhaFerrari.VelAtual);
})

document.getElementById('frear').addEventListener('click', () => {
    meuCarro.Frear();
    meuFusca.Frear();
    minhaFerrari.Frear();
    console.log('Velocidade Atual (Carro): ' + meuCarro.VelAtual);
    console.log('Velocidade Atual (Fusca): ' + meuFusca.VelAtual);
    console.log('Velocidade Atual (Ferrari): ' + minhaFerrari.VelAtual);
})

// Outra forma de criar um "objeto"
var minhaFerrari = {
    Cor: "Amarela",
    VelMax: 300,
    VelAtual: 0,

    Acelerar: function () {
        if (this.VelAtual < this.VelMax) {
            this.VelAtual++;
        }
    },

    Frear: function () {
        if (this.VelAtual > 0) {
            this.VelAtual--;
        }
    }
}
