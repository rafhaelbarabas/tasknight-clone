const MULTIPLICADOR = 25;
export class Personagem {
  constructor(id, Jogador, Classe, nivel, xp, nome, hp){
    this.id = id;
    this.Jogador = Jogador;
    this.Classe = Classe;
    this.nivel = nivel;
    this.xp = xp;
    this.nome = nome;
    this.hp = hp;
    this.vivo = true;
  }

  diminuirVida(fator){
    this.hp = this.hp - (fator * MULTIPLICADOR);
    if(this.hp <= 0){ 
      this.matarPersonagem();
    }
  }

  matarPersonagem(){
    this.vivo = false;
  }
}