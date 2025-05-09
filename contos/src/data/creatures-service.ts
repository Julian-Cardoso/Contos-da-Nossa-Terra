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
    new Creature(
      "https://i.pinimg.com/736x/6f/49/72/6f4972848cda272867dc58fcd5f9523e.jpg",
      "Boitatá",
      "A Serpente de Fogo",
      "Sul",
      "Lendas indígenas",
      "Serpente de fogo que protege as matas e campos contra aqueles que os incendeiam.",
      "Conta a lenda que o Boitatá aparece como uma chama viva, espantando aqueles que colocam fogo na natureza. É símbolo da proteção das florestas e do castigo aos incendiários."
    ),
    new Creature(
      "https://i.pinimg.com/736x/02/17/e5/0217e59ef90dcce70d30f8bfce08bafa.jpg",
      "Iara",
      "A Mãe-d'Água",
      "Norte",
      "Mitologia indígena",
      "Bela sereia de cabelos negros ou verdes que vive nos rios, atraindo homens com seu canto.",
      "Filha de um pajé, Iara foi transformada em sereia e vive nos rios da Amazônia. Seu canto hipnotiza pescadores, que são levados para as profundezas. Representa a força e o mistério das águas doces."
    ),
    new Creature(
      "https://i.pinimg.com/736x/c2/aa/79/c2aa79a4e2d7563169860726d2fe743d.jpg",
      "Boto-cor-de-rosa",
      "O Encantador das Águas",
      "Norte",
      "Lendas amazônicas",
      "Golfinho que se transforma em um belo homem durante as festas para seduzir mulheres.",
      "Durante as festas ribeirinhas, o boto surge disfarçado de homem de branco, seduz mulheres e desaparece ao amanhecer. A lenda explica o surgimento de filhos de pais desconhecidos e exalta o mistério dos rios amazônicos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/d9/7c/65/d97c653e59c4bf04253df30ab0dcee59.jpg",
      "Lobisomem",
      "A Maldição da Lua Cheia",
      "Centro-Oeste",
      "Lendas medievais trazidas por colonizadores",
      "Homem que se transforma em lobo nas noites de lua cheia, vagando pelas vilas e matas.",
      "A lenda do lobisomem foi trazida pelos portugueses e misturada com crenças locais. Diz-se que homens amaldiçoados ou filhos de relações incestuosas se transformam em lobisomens. Representa o medo do desconhecido e dos instintos reprimidos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/4c/9f/23/4c9f239ba9301a41f87bbcb97f491c95.jpg",
      "Cuca",
      "A Bruxa do Sono das Crianças",
      "Sudeste",
      "Folclore português adaptado",
      "Velha bruxa com aparência de jacaré que rapta crianças desobedientes.",
      "Inspirada no 'Coco' português, a Cuca é conhecida por assombrar o sono das crianças que não obedecem os pais. Sua imagem foi popularizada em cantigas de ninar e livros infantis como símbolo do medo noturno."
    ),
    new Creature(
      "https://i.pinimg.com/736x/30/59/06/3059060937a3d0ba90951fd0f50e8b77.jpg",
      "Negrinho do Pastoreio",
      "O Protetor dos Perdidos",
      "Sul",
      "Tradições afro-brasileiras e católicas",
      "Menino escravizado que foi injustamente punido e ajudado por forças divinas.",
      "Segundo a lenda, o Negrinho perdeu um cavalo e foi cruelmente castigado. Rezou para Nossa Senhora, que o acolheu. Desde então, ajuda quem perde objetos, sendo símbolo de fé e justiça para os humildes."
    ),
    new Creature(
      "https://i.pinimg.com/736x/0f/1e/e9/0f1ee9b1aa0a89f874de1eb1cc67f234.jpg",
      "Mapinguari",
      "O Gigante da Floresta",
      "Norte",
      "Lendas indígenas amazônicas",
      "Criatura peluda, com um olho só na testa e boca no estômago, que guarda os segredos da floresta.",
      "Alguns dizem que o Mapinguari seria um preguiçoso gigante ancestral. Ele protege a floresta com rugidos e força, sendo temido por caçadores e madeireiros. Representa o mistério e a preservação da natureza amazônica."
    ),
    new Creature(
      "https://i.pinimg.com/736x/20/d1/07/20d107afe5c9ce3eef752cd7abd37a93.jpg",
      "Mula-sem-Cabeça",
      "A Maldição da Blasfêmia",
      "Centro-Oeste",
      "Lendas coloniais católicas",
      "Mulher amaldiçoada que vira uma mula que solta fogo pelo pescoço em lugar da cabeça.",
      "A Mula-sem-Cabeça surge de mulheres que mantinham relações proibidas com padres. Nas noites de quinta para sexta, galopa soltando fogo pelas ventas. A lenda alerta sobre transgressões morais e religiosas."
    ),
  ];

  getAllCreatures(): Creature[] {
    return this.data;
  }
}
