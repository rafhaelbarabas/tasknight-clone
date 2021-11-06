const MULTIPLICADOR = 25;

import Batalha from "./Batalha";
import Classe from "./Classe";
import Turno from "/Turno";
import LocalDeBatalha from "/LocalDeBatalha";
import Cidade from "/Cidade";
import Jogador from "/Jogador";


exports.module = class Personagem {
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
    this.hp = fator * MULTIPLICADOR - this.hp;
    if(this.hp <= 0){ 
      matarPersonagem();
    }
  }

  matarPersonagem(){
    this.vivo = false;
  }
}