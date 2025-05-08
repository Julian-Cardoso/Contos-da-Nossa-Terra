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
  ];

  getAllCreatures(): Creature[] {
    return this.data;
  }
}
