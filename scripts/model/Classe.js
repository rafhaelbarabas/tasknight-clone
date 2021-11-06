
import Batalha from "./Batalha";
import Personagem from "./Personagem";
import Turno from "/Turno";
import LocalDeBatalha from "/LocalDeBatalha";
import Cidade from "/Cidade";
import Jogador from "/Jogador";

export default class Classe {
  constructor(id, tipo, forca, vitalidade, inteligencia, defesa){
    this.id = id;
    this.tipo = tipo;
    this.forca = forca;
    this.vitalidade = vitalidade;
    this.inteligencia = inteligencia;
    this.defesa = defesa;
  }

  atacar(){
    if(this.tipo == "Guerreiro"){
      return this.forca;
    }
    return this.forca;
  }

  defender(){
    return this.defesa;
  }
}