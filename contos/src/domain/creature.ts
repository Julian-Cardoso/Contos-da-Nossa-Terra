type CreatureRegion = "Norte" | "Sul" | "Centro-Oeste" | "Sudeste" | "Nordeste";

export class Creature {
  public img: string;
  public name: string;
  public title: string;
  public region: CreatureRegion;
  public origin: string;
  public description: string;
  public historyShort: string;
  public historyLong: string;

  constructor(
    img: string,
    name: string,
    title: string,
    region: CreatureRegion,
    origin: string,
    description: string,
    historyShort: string,
    historyLong: string
  ) {
    this.img = img;
    this.name = name;
    this.title = title;
    this.region = region;
    this.origin = origin;
    this.description = description;
    this.historyShort = historyShort;
    this.historyLong = historyLong;
  }
}
