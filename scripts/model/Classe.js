export class Classe {
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