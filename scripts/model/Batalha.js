import {Turno} from "./Turno.js"
export class Batalha {
  constructor(id, status, Personagem, Npc) {
    this.id = id;
    this.status = status;
    this.Personagem = Personagem;
    this.Npc = Npc;
    this.turnos = [];
    this.idTurno = 1;
    this.ultimoAtacante = this.atacaPrimeiro();
  }

  atacaPrimeiro() {
    return this.Personagem.nivel >= this.Npc.nivel ? this.Personagem : this.Npc;
  }

  novoTurno(id) {
    return new Turno(id, this, "Inicio");
  }

  adicionaTurno(turno) {
    this.turnos.push(turno);
  }

  iniciaBatalha() {
    var turno = this.novoTurno(this.idTurno);

    console.log("Iniciou a batalha no turno ", turno);

    this.adicionarTurno(turno);
    var atacante = this.atacaPrimeiro();
    var defensor = atacante == this.Personagem ? this.Npc : this.Personagem;

    console.log("primeiro atacante", atacante);
    console.log("primeiro defensor", defensor);

    turno.batalhar(atacante, defensor);

    this.ultimoAtacante = atacante;
    this.adicionaTurno(turno);

    console.log("Status atual do turno", turno.status);
    if (turno.status != "Fim") {
      this.finalizaBatalha(turno);
    }

    if (turno.status == "Fim") {

      console.log("Gerando um novo turno")
      var novoTurno = this.novoTurno(this.idTurno++);
      var novoAtacante =
        this.ultimoAtacante == this.Personagem ? this.Npc : this.Personagem;
      var novoDefensor =
        this.ultimoAtacante == this.Npc ? this.Personagem : this.Npc;
      novoTurno.batalhar(novoAtacante, novoDefensor);
      this.adicionaTurno(novoTurno);
      while (novoTurno.status == "Fim") {
        novoTurno = this.novoTurno(this.idTurno++);
        var novoAtacante =
          this.ultimoAtacante == this.Personagem ? this.Npc : this.Personagem;
        var novoDefensor =
          this.ultimoAtacante == this.Personagem ? this.Npc : this.Personagem;
        novoTurno.batalhar(novoAtacante, novoDefensor);
        this.ultimoAtacante = novoAtacante;
        this.adicionaTurno(novoTurno);
      }
    }
  }

  finalizaBatalha(turno) {
    console.log("batalha finalizada");
    this.status = "Finalizado";
    console.log("...", turno)
    turno.status = "Finalizado";
  }

  adicionarTurno(Turno) {
    this.turnos.push(Turno);
  }
}
