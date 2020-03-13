class Disciplina {
    // Atributos da Classe
    static media: number = 7;       // |-> Define o caminho onde fica guardada a informação
    nome: string;
    conteudo: string;

    constructor(nome: string, conteudo: string) {
        this.nome = nome;
        this.conteudo = conteudo;
    }

    // Métodos
    adicionado() {
        console.log(" ");
        console.log(this.nome + " adicionada com sucesso! Conteúdo: " + this.conteudo);
    }

    aprovacao(nota: number) {
        console.log(" ");
        console.log(`Você tirou a nota ${nota}`);

        if (nota >= Disciplina.media) {
            console.log("Parabéns você está aprovado!");
        } else {
            console.log("Você foi reprovado!");
        }
    }

    calcularAprovacao(nomeAluno: string, notaAluno: number) {
        if (notaAluno >= Disciplina.media) {
            return `${nomeAluno} aprovado(a) em ${this.nome}`
        } else {
            return `${nomeAluno} reprovado(a) em ${this.nome}`
        }
    }

}

// Criação de um objeto com uma Class
let materia: Disciplina = new Disciplina("Matematica", "Equações Diferenciais");

materia.adicionado();

// materia.aprovacao(7.1);

console.log(materia.calcularAprovacao("Pedro", 9));