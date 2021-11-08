import { Jogador } from "./model/Jogador.js";
import { Batalha } from "./model/Batalha.js";
import { Cidade } from "./model/Cidade.js";
import { Classe } from "./model/Classe.js";
import { LocalDeBatalha } from "./model/LocalDeBatalha.js";
import { Personagem } from "./model/Personagem.js";
import { Turno } from "./model/Turno.js";

console.log("comecouuu o teste");
var jogador = new Jogador(1, "abc", 123);
console.log("222", jogador);
var guerreiro = new Classe(1, "Guerreiro", 5, 4, 1, 3);

var personagem = new Personagem(
  1,
  jogador,
  guerreiro,
  1,
  0,
  "Jorge Mogi das Cruzes",
  guerreiro.vitalidade * 25
);

var ratao = new Classe(2, "Rato de esgoto", 2, 10, 0, 10);

var npc = new Personagem(2, null, ratao, 1, 0, "Ratao", ratao.vitalidade * 25);

var batalha = new Batalha(1, "Inicio", personagem, npc);

batalha.iniciaBatalha();
