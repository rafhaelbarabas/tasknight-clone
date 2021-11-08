const MULTIPLICADOR_2 = 25;
export class Turno {
  constructor(id, Batalha, status) {
    this.id = id;
    this.Batalha = Batalha;
    this.status = status;
  }

  batalhar(atacante, defensor) {
    console.log("Batalhando");
    console.log("Atacante", atacante);
    console.log("Defensor", defensor);
    var fatorAtq = atacante.Classe.atacar();
    var fatorDef = defensor.Classe.defender();
    var fatorVida = fatorAtq - fatorDef;

    if (fatorVida == 0) {
      fatorVida = -1;
    }

    var valorDiminuirVida = fatorVida * MULTIPLICADOR_2;

    defensor.diminuirVida(valorDiminuirVida);

    if (fatorVida == -1) {
      atacante.diminuirVida(valorDiminuirVida);
    }

    console.log("Pau quebrando");
    console.log("Vida atual do atacante", atacante.hp);
    console.log("Vida atual do defensor", defensor.hp);

    if (!defensor.vivo) {
      this.status = "Venceu";
    } else if (!atacante.vivo) {
      this.status = "Perdeu";
    } else {
      this.status = "Fim";
    }
  }
}
