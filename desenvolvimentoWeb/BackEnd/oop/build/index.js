"use strict";
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, conteudo) {
        this.nome = nome;
        this.conteudo = conteudo;
    }
    Disciplina.prototype.adicionado = function () {
        console.log(this.nome + " adicionada com sucesso! Conteúdo: " + this.conteudo);
    };
    return Disciplina;
}());
var materia = new Disciplina("Matematica", "Equações Diferenciais");
materia.adicionado();
