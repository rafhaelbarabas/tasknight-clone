export class Cidade {
    constructor(id, nome, nivelMinimo, nivelMaximo){
        this.id = id;
        this.nome = nome;
        this.nivelMinimo = nivelMinimo;
        this.nivelMaximo = nivelMaximo;
        this.personagens = [];
    }

    adicionarPersonagem(personagem) {
      this.personagens.push(personagem);
    }

    removerPersonagem(personagem) {
      this.personagens.find(p => p.id = personagem.id).slice(0, 1);
    }
}