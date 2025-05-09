import { Creature } from "../domain/creature";

export class CreatureService {
  data: Creature[] = [
    new Creature(
      "https://i.pinimg.com/736x/cf/32/c1/cf32c11bbdbaed35effa2a95eeea369e.jpg",
      "Curupira",
      "Guardião das Florestas",
      "Norte",
      "Lendas amazônicas e indígenas",
      "Ser de cabelos vermelhos e pés virados para trás, conhecido por proteger a floresta de caçadores e desmatadores.",
      "Segundo as lendas, o Curupira engana invasores da mata com seus rastros invertidos. Desde os povos originários, sua história é contada como símbolo da proteção ambiental e respeito à natureza."
    ),
    new Creature(
      "https://i.pinimg.com/736x/60/5e/32/605e3230769b595d7bd5e8e2d93e943a.jpg",
      "Saci-Pererê",
      "O Travesso de uma Perna Só",
      "Sudeste",
      "Tradições africanas e indígenas",
      "Menino negro de uma perna só, com gorro vermelho e cachimbo, conhecido por suas travessuras e truques.",
      "O Saci surgiu da fusão entre mitos africanos e indígenas. Ele prega peças em pessoas, esconde objetos e sopra redemoinhos. Apesar das travessuras, é considerado um protetor das matas e conhecedor de ervas medicinais."
    ),
  ];

  getAllCreatures(): Creature[] {
    return this.data;
  }
}
