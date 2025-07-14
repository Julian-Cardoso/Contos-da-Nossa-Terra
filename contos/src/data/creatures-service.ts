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
      "Segundo as lendas, o Curupira engana invasores da mata com seus rastros invertidos. Desde os povos originários, sua história é contada como símbolo da proteção ambiental e respeito à natureza.",
      "Nas profundezas da floresta brasileira, onde a luz do sol se filtra tímida entre as copas das árvores, vive uma criatura tão antiga quanto a mata: o Curupira. Seu cabelo é feito de chamas vivas que dançam mesmo sem vento, e seus pés são voltados para trás — não por engano da natureza, mas como truque engenhoso para confundir os que tentam segui-lo. Diz-se que o Curupira nasceu do primeiro sussurro da floresta, quando as árvores ainda aprendiam a crescer e os rios cantavam sozinhos. Desde então, ele vela por cada folha, bicho e pedra como se fossem irmãos de sangue. Não há caçador que ele não veja, nem lenhador que ele não escute. Aqueles que entram na mata com ganância em seus corações são enganados por trilhas que se enroscam, cantos que enlouquecem, e visões que os fazem andar em círculos até se perderem para sempre. Mas há quem diga que, certa vez, um menino entrou na floresta com um coração puro. Trazia consigo apenas uma sacola com frutas e a vontade de achar um papagaio ferido. O Curupira, curioso, seguiu o garoto de longe. Quando viu que ele usava um lenço como curativo nas asas do animal, sorriu por trás de um tronco e soprou um vento leve. As árvores se abriram num corredor dourado, guiando o menino de volta para casa — e quando ele chegou, o papagaio já cantava de novo. Desde então, dizem que o Curupira não protege apenas a mata, mas também os que respeitam sua magia. E quando o vento sopra entre os galhos com um assobio estranho, é sinal de que ele está por perto, rindo baixinho, vigiando tudo com olhos brilhantes como vaga-lumes no escuro."
    ),
    new Creature(
      "https://i.pinimg.com/736x/60/5e/32/605e3230769b595d7bd5e8e2d93e943a.jpg",
      "Saci-Pererê",
      "O Travesso de uma Perna Só",
      "Sudeste",
      "Tradições africanas e indígenas",
      "Menino negro de uma perna só, com gorro vermelho e cachimbo, conhecido por suas travessuras e truques.",
      "O Saci surgiu da fusão entre mitos africanos e indígenas. Ele prega peças em pessoas, esconde objetos e sopra redemoinhos. Apesar das travessuras, é considerado um protetor das matas e conhecedor de ervas medicinais.",
      "Nas tardes abafadas do interior, quando o vento gira de repente e as folhas dançam em círculos no terreiro, cuidado... pode ser o Saci aprontando das suas. Com uma perna só, gorro vermelho e riso afiado, ele vem no redemoinho, levando tampas de panela, espantando galinhas e escondendo coisas que estavam bem ali, na sua frente. Mas o Saci não é mau. É moleque encantado, filho da mata e do mistério. Brinca com os medrosos, desafia os sabidos e protege quem sabe rir da vida. Onde há um caçador arrogante, ele aparece só pra embaralhar o caminho. Onde há criança triste, deixa uma risada no vento. Conta-se que um dia, uma menina muito doente pedia a Deus por alegria. O Saci, curioso, entrou pela janela em forma de redemoinho. Soprou seu cachimbo, e a doença fugiu espirrando como poeira. Ao partir, deixou seu próprio gorro escondido debaixo do travesseiro — e, desde então, a menina teve sonhos de aventura, vento e liberdade. Então, se vir um redemoinho vindo ligeiro, jogue uma peneira por cima — dizem que assim se pega um Saci. Mas atenção: se o capturar, trate com respeito e humor, ou ele nunca mais te deixa em paz."
    ),
    new Creature(
      "https://i.pinimg.com/736x/6f/49/72/6f4972848cda272867dc58fcd5f9523e.jpg",
      "Boitatá",
      "A Serpente de Fogo",
      "Sul",
      "Lendas indígenas",
      "Serpente de fogo que protege as matas e campos contra aqueles que os incendeiam.",
      "Conta a lenda que o Boitatá aparece como uma chama viva, espantando aqueles que colocam fogo na natureza. É símbolo da proteção das florestas e do castigo aos incendiários.",
      "Quando a noite se derrama sobre os campos como tinta escura e o silêncio cresce entre as árvores, uma serpente de fogo desperta. Ela é o Boitatá — o olhar flamejante da natureza, que dança nas sombras para proteger a vida. Nascido da fúria da terra contra os que queimavam suas matas, o Boitatá é feito de brasas e luz, com olhos como carvões acesos. Ele desliza pelas clareiras com um brilho que parece chamar, mas é aviso. A quem incendiar por maldade, ele envolve num abraço de fogo que não machuca a floresta, só o coração dos homens que esqueceram o respeito. Mas contam que uma noite, durante uma seca cruel, um velho homem acendeu uma fogueira não para destruir, mas para aquecer sua neta doente. O Boitatá chegou, envolto em chamas, mas não atacou. Em vez disso, se deitou em volta dos dois como um anel de luz, espantando as feras e o frio. Ao amanhecer, sumiu sem rastros, deixando apenas brasas que não queimavam, mas curavam. Dizem que, se você vê uma luz serpenteando ao longe e seu coração está em paz, pode dormir tranquilo. O Boitatá só queima o que ameaça a alma da mata — e protege com fogo quem ama com verdade."
    ),
    new Creature(
      "https://i.pinimg.com/736x/02/17/e5/0217e59ef90dcce70d30f8bfce08bafa.jpg",
      "Iara",
      "A Mãe-d'Água",
      "Norte",
      "Mitologia indígena",
      "Bela sereia de cabelos negros ou verdes que vive nos rios, atraindo homens com seu canto.",
      "Filha de um pajé, Iara foi transformada em sereia e vive nos rios da Amazônia. Seu canto hipnotiza pescadores, que são levados para as profundezas. Representa a força e o mistério das águas doces.",
      "Nos rios profundos da floresta, onde as águas brilham como espelhos encantados e o silêncio guarda segredos antigos, vive Iara — a senhora das águas doces. Seus cabelos são longos como os próprios rios, e sua voz, um canto que faz até os pássaros esquecerem de voar. Dizem que Iara nasceu do pranto de uma estrela que caiu na terra e se escondeu nas correntezas. Desde então, ela nada sozinha por entre as vitórias-régias, observando tudo com olhos de lua cheia. Quando vê pescadores com redes demais ou mãos gananciosas, emerge apenas o suficiente para cantar. E sua canção é tão bela, tão triste e suave, que os homens esquecem o mundo e seguem sua voz até desaparecerem nas águas fundas. Mas certa vez, uma menina perdida escorregou à beira de um igarapé. Iara a viu cair, engolida pelas correntezas. Em silêncio, mergulhou até encontrá-la entre as raízes e a trouxe de volta, sussurrando em seus ouvidos uma canção de ninar esquecida. A menina acordou na margem com flores nos cabelos e a certeza de que um anjo das águas a salvara. Dizem que, desde então, se você respeita os rios e escuta com o coração limpo, pode ouvir, ao entardecer, um canto suave vindo de longe. É Iara, lembrando o mundo de que a água tem alma e que beleza também sabe proteger."
    ),
    new Creature(
      "https://i.pinimg.com/736x/c2/aa/79/c2aa79a4e2d7563169860726d2fe743d.jpg",
      "Boto-cor-de-rosa",
      "O Encantador das Águas",
      "Norte",
      "Lendas amazônicas",
      "Golfinho que se transforma em um belo homem durante as festas para seduzir mulheres.",
      "Durante as festas ribeirinhas, o boto surge disfarçado de homem de branco, seduz mulheres e desaparece ao amanhecer. A lenda explica o surgimento de filhos de pais desconhecidos e exalta o mistério dos rios amazônicos.",
      "Nas noites de festa ribeirinha, quando a música flutua como perfume pelas águas, cuidado com o forasteiro elegante de chapéu branco. Dizem que ele dança como ninguém, seduz como brisa quente... e desaparece antes do amanhecer. É o Boto-Cor-de-Rosa — encanto dos rios e guardião de segredos profundos. Durante o dia, ele nada calado entre as margens, protegendo os peixes e afastando os perigos. Mas quando a lua cheia espelha no rio, ele se transforma: surge em terra como um rapaz bonito e misterioso, que encanta moças com um olhar profundo como igarapé sem fundo. Há quem diga que muitas crianças nasceram com olhos de rio e sorriso de peixe por sua causa. Mas também há quem jure que ele salvou uma menina que caíra no fundo do rio, guiando-a à tona com cantos que ninguém mais ouvia. E assim, o povo aprendeu: o amor pode ser doce como a água, mas também engana como reflexo na correnteza. E quando o chapéu branco some sem rastro, restam só as memórias — e o rio, que nunca revela seus mistérios."
    ),
    new Creature(
      "https://i.pinimg.com/736x/d9/7c/65/d97c653e59c4bf04253df30ab0dcee59.jpg",
      "Lobisomem",
      "A Maldição da Lua Cheia",
      "Centro-Oeste",
      "Lendas medievais trazidas por colonizadores",
      "Homem que se transforma em lobo nas noites de lua cheia, vagando pelas vilas e matas.",
      "A lenda do lobisomem foi trazida pelos portugueses e misturada com crenças locais. Diz-se que homens amaldiçoados ou filhos de relações incestuosas se transformam em lobisomens. Representa o medo do desconhecido e dos instintos reprimidos.",
      "À meia-noite, quando a lua cheia paira alta como um espelho de pratas partidas, o uivo corta a escuridão. É o Lobisomem — alma penada em forma de fera, castigada por antigos pecados ou heranças malditas. Nem bicho, nem homem, ele corre entre mundos, carregando a dor de não pertencer a nenhum. Dizem que era gente comum, um filho sétimo, um batizado esquecido, um amor que se perdeu. À luz do luar, os olhos brilham de tristeza e fúria, e as garras abrem caminho pela mata. Ninguém o vê duas vezes da mesma forma — às vezes lobo, às vezes sombra. Mas um monge velho, certa vez, sentou-se na encruzilhada com um lampião e uma oração. Quando a fera surgiu, ele não recuou. Disse apenas: “Você está cansado.” E o Lobisomem, em silêncio, deitou aos pés do homem, e chorou. Quando a lua sumiu, restou apenas um moço magro, dormindo em paz como se tivesse sonhado com sua infância. Por isso, se ouvir um uivo ao longe, não pense só em medo. Pense no peso de carregar uma alma partida. E reze — às vezes, até os monstros só querem voltar pra casa."
    ),
    new Creature(
      "https://i.pinimg.com/736x/4c/9f/23/4c9f239ba9301a41f87bbcb97f491c95.jpg",
      "Cuca",
      "A Bruxa do Sono das Crianças",
      "Sudeste",
      "Folclore português adaptado",
      "Velha bruxa com aparência de jacaré que rapta crianças desobedientes.",
      "Inspirada no 'Coco' português, a Cuca é conhecida por assombrar o sono das crianças que não obedecem os pais. Sua imagem foi popularizada em cantigas de ninar e livros infantis como símbolo do medo noturno.",
      "A Cuca não tem pressa. Ela vem quando os olhos teimam em ficar abertos, mesmo depois da terceira história. É velha como o tempo, e feia como o medo. Tem garras de bruxa, olhos que veem no escuro, e um cheiro de caverna esquecida. Dizem que vive numa casa feita de ossos e folhas secas, onde o tempo não entra e os sonhos se torcem. Mas não pense que ela corre. A Cuca espera. Sabe que criança que desobedece, mente ou machuca bicho pequeno acaba escutando sua canção torta, cantada baixinho pela fresta da janela. Mas nem sempre ela leva. Uma vez, encontrou um menino que chorava não por teimosia, mas por saudade. A Cuca parou. Escutou. Sentou-se ao lado do berço como uma avó esquecida. E, pela primeira vez, embalou a criança com uma canção tão triste que fez o pesadelo ir embora. Desde então, dizem que a Cuca castiga, sim. Mas também observa. E se a criança tem coração limpo, ela só passa, deixa um vento gelado e vai embora... voltando pra floresta onde dormem os medos antigos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/30/59/06/3059060937a3d0ba90951fd0f50e8b77.jpg",
      "Negrinho do Pastoreio",
      "O Protetor dos Perdidos",
      "Sul",
      "Tradições afro-brasileiras e católicas",
      "Menino escravizado que foi injustamente punido e ajudado por forças divinas.",
      "Segundo a lenda, o Negrinho perdeu um cavalo e foi cruelmente castigado. Rezou para Nossa Senhora, que o acolheu. Desde então, ajuda quem perde objetos, sendo símbolo de fé e justiça para os humildes.",
      "Há muito tempo, nos campos sem fim do sul, um menino negro, escravizado, foi mandado a cuidar dos cavalos de um senhor cruel. Perdeu um potro durante a noite, e como castigo... ah, o castigo foi tão cruel que nem o céu quis ver. Mas quando tudo parecia perdido, uma força brilhou no campo escuro. Era Nossa Senhora, descendo como estrela. Ela ergueu o menino com carinho e lhe deu uma missão: ajudar quem perdeu algo precioso. Desde então, o Negrinho do Pastoreio anda por aí, montado num cavalo branco, com uma vela acesa que nunca se apaga. Quem perde algo — um objeto, um caminho, uma esperança — acende uma vela e faz um pedido sincero. Se for de coração, o Negrinho ajuda. Traz de volta o que se perdeu. Às vezes em sonho, às vezes num sussurro, às vezes na primeira luz da manhã. E quando você encontrar algo que achava que estava perdido para sempre, não esqueça: agradeça ao Negrinho. E deixe uma vela acesa na beira da estrada — ele pode estar passando."
    ),
    new Creature(
      "https://i.pinimg.com/736x/0f/1e/e9/0f1ee9b1aa0a89f874de1eb1cc67f234.jpg",
      "Mapinguari",
      "O Gigante da Floresta",
      "Norte",
      "Lendas indígenas amazônicas",
      "Criatura peluda, com um olho só na testa e boca no estômago, que guarda os segredos da floresta.",
      "Alguns dizem que o Mapinguari seria um preguiçoso gigante ancestral. Ele protege a floresta com rugidos e força, sendo temido por caçadores e madeireiros. Representa o mistério e a preservação da natureza amazônica.",
      "Na parte mais fechada da floresta, onde nem o sol entra direito e a terra cheira a segredo, vive o Mapinguari. Enorme, peludo, com um só olho no meio da testa e uma boca na barriga, ele guarda os lugares onde homem nenhum deveria pisar. Dizem que já foi humano, um xamã poderoso que ousou demais, desafiou o sagrado e foi transformado. Agora, é fera. Grita como trovão, anda deixando marcas fundas, e onde passa, tudo silencia — até os grilos. Mas não é mal. É protetor. Se você entra na mata sem pedir licença, corta árvore sagrada, caça por vaidade... ele aparece. E aí, é correr ou rezar. Mas contam que um dia, uma menina que só queria encontrar uma erva pra curar a avó entrou onde não devia. O Mapinguari surgiu — mas não rugiu. Cheirou o medo dela, viu a verdade. Então, abriu o caminho com um gesto lento e desapareceu na neblina. Desde então, diz-se que quem respeita a floresta pode cruzar com ele e voltar vivo. Quem não respeita... nem volta."
    ),
    new Creature(
      "https://i.pinimg.com/736x/20/d1/07/20d107afe5c9ce3eef752cd7abd37a93.jpg",
      "Mula-sem-Cabeça",
      "A Maldição da Blasfêmia",
      "Centro-Oeste",
      "Lendas coloniais católicas",
      "Mulher amaldiçoada que vira uma mula que solta fogo pelo pescoço em lugar da cabeça.",
      "A Mula-sem-Cabeça surge de mulheres que mantinham relações proibidas com padres. Nas noites de quinta para sexta, galopa soltando fogo pelas ventas. A lenda alerta sobre transgressões morais e religiosas.",
      "Nas estradas esquecidas e igrejas abandonadas, quando o sino toca sozinho à meia-noite, dizem que o chão estremece sob patas flamejantes. É a Mula Sem Cabeça — maldição que corre solta entre o mundo dos vivos e o dos arrependidos. Foi outrora mulher, dizem alguns. Uma que amou onde o amor era proibido, e por isso foi transformada: em vez de cabeça, há fogo; em vez de lágrimas, relinchos que ecoam como gritos de desespero. Ela galopa sem rumo, faíscando centelhas no caminho, como se buscasse uma lembrança que não pode mais alcançar. Mas certa noite, uma senhora cega que morava perto da estrada ouviu o galope e, em vez de medo, sentiu pena. Colocou pão fresco na janela e rezou baixinho. A mula parou. O fogo diminuiu. E, por um instante, o relincho virou soluço. Quando a senhora acordou no dia seguinte, havia pegadas queimadas ao redor da casa e, sobre o pão, uma rosa vermelha sem espinhos. Desde então, dizem que, se você ouvir o galope e sentir o cheiro de enxofre, não corra. Reze. Perdoe. Porque até as maldições carregam histórias tristes que só o tempo e o amor lembram de curar."
    ),
    new Creature(
      "https://i.pinimg.com/736x/91/a7/78/91a7788a2510044f8d1f2b24ddcbfc33.jpg",
      "Caipora",
      "O Guardião da Caça",
      "Norte",
      "Mitologia indígena tupi-guarani",
      "Ser pequeno, peludo e ágil, que monta um porco-do-mato e protege os animais da floresta.",
      "A Caipora castiga caçadores que caçam por prazer ou em excesso. De temperamento brincalhão, pode enganar ou ajudar os humanos, dependendo de seu comportamento. Representa o equilíbrio da natureza e o respeito pelos animais.",
      "Antes mesmo de qualquer trilha ser aberta na mata, a Caipora já andava por ela. Pequeno como um menino, esperto como cem, coberto de folhas e fumaça de tabaco, ele é o espírito vivo da floresta — travesso, justo e implacável com quem desrespeita o mato. Sopra o cachimbo com calma no alto de uma árvore, enquanto observa caçadores e viajantes. Se vê alguém desperdiçando, maltratando ou tirando mais do que precisa, confunde os caminhos, faz as bússolas girarem, e os assobios da mata ficarem ensurdecedores. Muitos se perdem. Alguns enlouquecem. E todos aprendem que a mata não é lugar de ganância. Mas dizem que, certa vez, um jovem caçador deixou de atirar ao ver um filhote de anta brincar com a mãe. Guardou a arma e chorou de arrependimento. A Caipora, surpresa, desceu do galho e soprou seu cachimbo. Em segundos, o caminho de volta apareceu limpo, como se as árvores tivessem se afastado para abrir passagem. Desde então, quem entra na mata com respeito talvez escute um riso baixinho entre as folhas — ou veja pegadas pequenas ao lado das suas. É sinal de que a Caipora está por perto, testando seu coração."
    ),
    new Creature(
      "https://i.pinimg.com/736x/f6/15/c3/f615c3effc77d66ef5ba08bd829a02b2.jpg",
      "Mãe-de-Ouro",
      "A Guardiã dos Tesouros",
      "Sudeste",
      "Lendas do ciclo do ouro colonial",
      "Entidade luminosa em forma de bola de fogo ou mulher de vestes douradas que protege riquezas escondidas.",
      "A Mãe-de-Ouro aparece à noite, flutuando sobre locais onde há ouro enterrado. A lenda surgiu entre os mineradores, que acreditavam que ela guardava as riquezas naturais contra a ganância humana.",
      "Lá nos veios profundos das serras e rios, onde o ouro dorme sob pedras pesadas, mora um mistério com dedos reluzentes: a Mão de Ouro. Aparece como uma mão flutuante, dourada como o próprio metal, coberta de brilho, mas sem corpo. Onde ela toca, surge riqueza — mas também ruína. Muitos a seguiram, sonhando com fortuna. E alguns encontraram ouro, sim. Mas logo perderam a paz, os amigos, os dias tranquilos. Porque a Mão de Ouro não dá nada de graça: ela testa. Quem tem coração puro, ela protege. Quem tem olhos de cobiça, ela engole em silêncios de mina. Dizem que um velho garimpeiro, já cansado e cego, viu a Mão num sonho. Em vez de pedir riqueza, pediu descanso. Quando acordou, estava em casa, com a família ao redor e um cristal pequeno no bolso — não de ouro, mas de lembrança. E é por isso que, ao ver uma luz dourada piscando na escuridão, pense duas vezes antes de seguir. Às vezes é a Mão de Ouro. Às vezes, é só seu próprio desejo tentando te enganar."
    ),
    new Creature(
      "https://i.pinimg.com/736x/46/dc/30/46dc30cc207520d3aff3d6b549337e53.jpg",
      "Cabra-Cabriola",
      "A Sombra da Desobediência",
      "Nordeste",
      "Folclore popular oral",
      "Criatura assustadora em forma de cabra demoníaca que devora crianças desobedientes.",
      "A Cabra-Cabriola é usada para assustar crianças que não obedecem aos pais. Com olhos vermelhos e chifres afiados, surge das trevas para punir os malcriados. Uma lenda de cunho moral usado na educação tradicional.",
      "Quando a noite cai pesada e o vento geme entre as frestas das portas, é melhor obedecer. Dizem que, nas sombras mais fundas, a Cabra-Cabriola espreita, com olhos que brilham como brasas e cascos que não fazem barulho. Ela sente o cheiro da desobediência, fareja travessuras e mentiras. Ninguém sabe de onde vem, só que aparece quando menos se espera: atrás da cortina, debaixo da cama, ou no escuro do quintal. Conta-se que certa vez, um menino teimoso desafiou a mãe e saiu sozinho pela rua deserta. Sentiu um frio estranho e, ao olhar para trás, viu dois olhos vermelhos o seguindo. Correu, tropeçou, e jurou nunca mais desobedecer. Quando chegou em casa, encontrou um tufo de pelo preto na soleira da porta. Desde então, toda criança do Nordeste sabe: se ouvir um balido rouco no escuro, é melhor correr para a cama e fechar os olhos. A Cabra-Cabriola só leva quem esquece de ouvir o coração e respeitar os mais velhos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/af/1b/29/af1b294f9b8078cced98dcb7de129fd9.jpg",
      "Comadre Fulozinha",
      "A Feiticeira dos Ventos",
      "Nordeste",
      "Mistura de lendas indígenas, africanas e ibéricas",
      "Jovem de cabelos longos que vive na mata, protegendo animais e punindo quem a desrespeita.",
      "Comadre Fulozinha assovia pelos ventos e castiga aqueles que caçam por maldade ou entram em seu território sem permissão. Representa o sincretismo religioso e o respeito às forças femininas da natureza.",
      "No coração da mata fechada, onde o vento canta melodias que ninguém entende, vive Comadre Fulozinha. Seus cabelos são longos como cipós, e seus olhos brilham como gotas de orvalho ao sol. Dizem que ela aparece como um vulto leve, quase invisível, mas seu assovio é inconfundível — ora doce, ora assustador. Quem entra na floresta sem pedir licença sente logo um arrepio e escuta o vento sussurrar seu nome. Caçadores gananciosos perdem o caminho, e quem maltrata bicho sente os galhos se fecharem como braços protetores. Mas há quem diga que, certa vez, uma menina perdida chorou baixinho entre as árvores. O vento soprou suave, e a Comadre apareceu, penteando os cabelos com folhas verdes. Pegou a menina pela mão e, num piscar de olhos, a levou de volta para casa, deixando um fio de cabelo dourado preso na porta. Desde então, quem respeita a mata pode ouvir, ao entardecer, um assovio alegre — sinal de que a Comadre Fulozinha está por perto, cuidando de tudo e de todos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/9d/b4/99/9db499b2e230f6cfcae5ca5098928a2a.jpg",
      "Homem do Saco",
      "O Colecionador de Crianças",
      "Nordeste",
      "Folclore urbano popular",
      "Homem misterioso que anda com um saco nas costas, levando embora crianças desobedientes.",
      "Contado principalmente nas cidades, o Homem do Saco é uma figura assustadora usada por pais para manter os filhos obedientes. Suas origens são incertas, mas tornou-se símbolo do medo do desconhecido urbano.",
      "Quando a cidade adormece e as luzes se apagam nas janelas, o Homem do Saco começa a andar pelas ruas silenciosas. Ninguém sabe seu nome, nem de onde veio. Dizem que veste roupas velhas e carrega um saco enorme nas costas, onde guarda segredos e sonhos perdidos. Ele aparece de repente, nas esquinas escuras ou atrás dos muros, sempre à procura de crianças que desobedecem, fazem travessuras ou fogem de casa sem avisar. Mas há quem diga que, certa noite, uma menina curiosa resolveu segui-lo. Em vez de medo, sentiu pena daquele homem solitário. Quando ele percebeu, parou e tirou do saco um brinquedo antigo, devolvendo à menina um sorriso esquecido. Desde então, alguns acreditam que o Homem do Saco não leva apenas crianças, mas também tristezas e saudades. Mesmo assim, é melhor obedecer — pois nunca se sabe o que ele carrega em seu saco misterioso."
    ),
    new Creature(
      "https://i.pinimg.com/736x/05/8b/a3/058ba3b17929adc1143488d398fc57d0.jpg",
      "Matinta Pereira",
      "A Bruxa Assoviadora",
      "Norte",
      "Folclore amazônico",
      "Velha bruxa que se transforma em pássaro noturno e assovia nos telhados das casas.",
      "Matinta Pereira é uma figura lendária do Norte do Brasil. À noite, transforma-se em um pássaro agourento e assovia nos telhados. Os moradores devem prometer fumo ou comida para que ela vá embora. No dia seguinte, uma velha aparece para cobrar a promessa.",
      "Quando a noite cai e o silêncio toma conta das casas, um assovio fino corta o ar, vindo do telhado. É Matinta Pereira, a bruxa que se transforma em pássaro negro para visitar quem não respeita os mistérios da noite. Dizem que ela voa leve, quase invisível, mas seu assovio arrepia até os mais corajosos. Quem escuta deve logo prometer fumo ou comida, senão a visita se repete, cada vez mais assustadora. No dia seguinte, uma velha de olhos brilhantes aparece à porta, cobrando a promessa feita na escuridão. Mas há quem conte que, certa vez, uma criança deixou um pedaço de bolo na janela, junto com um bilhete de amizade. Matinta levou o presente e, em troca, nunca mais assoviou naquela casa. Desde então, quem respeita a noite e oferece gentileza pode dormir tranquilo — pois Matinta só assusta quem esquece de ser generoso."
    ),
    new Creature(
      "https://i.pinimg.com/736x/57/90/76/579076fdc7a84ae2c724011d0086e961.jpg",
      "Curacanga",
      "A Cabeça de Fogo",
      "Nordeste",
      "Lendas do Maranhão e Pará",
      "Mulher que, à noite, tem sua cabeça transformada em uma bola de fogo que vaga pelos céus.",
      "Segundo a lenda, quando uma mulher tem sete filhas, a última pode se transformar em Curacanga. À noite, sua cabeça se desprende do corpo e vaga como uma bola de fogo, assustando os viajantes noturnos.",
      "Nas noites mais escuras, quando o céu parece um manto sem estrelas, uma luz vermelha risca o horizonte. É a Curacanga, a cabeça de fogo que voa sobre vilarejos e rios, assombrando quem ousa sair tarde demais. Dizem que, ao longe, parece uma estrela cadente, mas quem chega perto sente o calor e ouve um lamento triste. A cabeça vaga em busca de paz, mas só encontra medo e espanto. Conta-se que, certa vez, um pescador perdido seguiu a luz da Curacanga e, em vez de se assustar, rezou por sua alma. A cabeça de fogo parou, iluminou o caminho de volta e desapareceu no céu. Desde então, quem vê a Curacanga deve respeitar seu sofrimento e não zombar de sua dor — pois toda luz errante carrega uma história de saudade e esperança."
    ),
    new Creature(
      "https://i.pinimg.com/736x/d6/71/2f/d6712f999fcea68530489d35b114fb13.jpg",
      "Capelobo",
      "O Monstro do Xingu",
      "Norte",
      "Lendas indígenas do Maranhão e Pará",
      "Criatura humanoide com cabeça de anta ou tamanduá, que se alimenta de crianças recém-nascidas.",
      "O Capelobo é uma criatura temida nas regiões do Rio Xingu. Com corpo coberto de pelos e cabeça de anta ou tamanduá, ataca aldeias para se alimentar de crianças, sendo uma das lendas mais assustadoras da região.",
      "No silêncio profundo das matas do Xingu, onde a lua mal toca o chão, o Capelobo caminha devagar, deixando pegadas fundas e um cheiro forte de terra molhada. Seu corpo é coberto de pelos grossos, e sua cabeça lembra uma anta ou tamanduá, com olhos pequenos e atentos. Dizem que ele aparece quando a aldeia esquece de proteger os recém-nascidos ou desrespeita os espíritos da floresta. Seu urro ecoa entre as árvores, assustando até os mais valentes. Mas há quem conte que, certa noite, uma mãe desesperada pediu proteção aos ancestrais. O Capelobo apareceu, mas em vez de atacar, ficou parado, observando. Sentiu o amor da mãe e, em silêncio, virou-se e sumiu na mata. Desde então, os mais antigos ensinam: respeito e cuidado afastam até os monstros mais temidos."
    ),
    new Creature(
      "https://i.pinimg.com/736x/15/4d/ed/154ded0d893a4cb71516c0e1733447b0.jpg",
      "Pé de Garrafa",
      "O Paralisador das Matas",
      "Centro-Oeste",
      "Folclore regional",
      "Homem com pés em forma de garrafa que paralisa suas vítimas com urros assustadores.",
      "Pé de Garrafa é uma criatura misteriosa que habita as matas do Centro-Oeste. Com pés redondos em forma de garrafa, emite urros que paralisam suas vítimas, capturando suas almas e causando terror entre os viajantes.",
      "Dizem que, nas trilhas esquecidas do Centro-Oeste, o chão guarda marcas redondas, como se garrafas tivessem caminhado sozinhas. São os rastros do Pé de Garrafa, criatura que aparece quando a noite está mais escura e o medo mais forte. Seu urro é tão poderoso que paralisa quem escuta, deixando o coração batendo forte e os olhos arregalados. Mas há quem diga que, certa vez, um velho viajante, ao ouvir o urro, não sentiu medo, mas compaixão. Rezou baixinho e deixou uma garrafa de cachaça na beira da trilha. O Pé de Garrafa apareceu, cheirou o presente e, satisfeito, deixou o homem seguir em paz. Desde então, quem respeita a mata e oferece presentes pode cruzar com o Pé de Garrafa e voltar para casa com histórias para contar."
    ),
    new Creature(
      "https://i.pinimg.com/736x/9f/3f/0a/9f3f0ab2a6efa4b1d61865f3945e67ed.jpg",
      "Chibamba",
      "O Bicho-Papão Mineiro",
      "Sudeste",
      "Folclore de Minas Gerais",
      "Criatura coberta por folhas de bananeira que assusta crianças desobedientes.",
      "Chibamba é o equivalente mineiro do bicho-papão. Coberto por folhas de bananeira, aparece à noite para assustar crianças que se recusam a dormir, sendo uma figura utilizada para disciplinar os pequenos.",
      "Quando a noite chega e o cheiro de café se mistura ao vento das montanhas, o Chibamba acorda. Coberto de folhas de bananeira, ele se esconde nos quintais e jardins, esperando o momento certo para assustar quem não quer dormir. Seu andar é leve, mas o farfalhar das folhas denuncia sua presença. Dizem que, certa vez, uma criança corajosa resolveu enfrentar o Chibamba e deixou um pedaço de bolo na janela. O bicho-papão apareceu, comeu o bolo e, em vez de assustar, deixou um bilhete: 'Durma cedo e sonhe bonito.' Desde então, quem respeita a hora do sono e não desafia o escuro pode dormir tranquilo — pois o Chibamba só assusta quem esquece de sonhar."
    ),
    new Creature(
      "https://i.pinimg.com/736x/24/12/a1/2412a1ef19d07a71412ae6129587c034.jpg",
      "Minhocão",
      "A Serpente Gigante dos Rios",
      "Nordeste",
      "Lendas do Rio São Francisco",
      "Serpente titânica que vive no fundo dos rios, afundando barcos e devorando ocupantes.",
      "O Minhocão é uma serpente gigantesca que habita as profundezas do Rio São Francisco. Quando perturbado, afunda embarcações e devora seus ocupantes, sendo responsabilizado pela erosão dos barrancos.",
      "No fundo escuro do Rio São Francisco, onde a luz não alcança e o silêncio é profundo, dorme o Minhocão. Seu corpo é tão grande que dizem ser capaz de abraçar o rio inteiro. Quando está calmo, o rio corre tranquilo, mas basta alguém desafiar a natureza ou desrespeitar as águas para o Minhocão despertar. Ele se move devagar, fazendo a terra tremer e as margens desmoronarem. Mas há quem conte que, certa vez, um pescador salvou um filhote de peixe preso nas raízes. O Minhocão apareceu, olhou com olhos antigos e, em vez de atacar, deixou o barco seguir ileso. Desde então, quem respeita o rio e seus mistérios pode navegar em paz — mas quem desafia o Minhocão, nunca mais é visto."
    ),
    new Creature(
      "https://i.pinimg.com/736x/ec/3a/3c/ec3a3c6a38fd847eaf566beea2d5e6f0.jpg",
      "Perna Cabeluda",
      "A Perna Assombrada",
      "Nordeste",
      "Folclore de Pernambuco",
      "Perna peluda e desmembrada que aparece para agredir pessoas próximas a cemitérios.",
      "A Perna Cabeluda é uma entidade assustadora que aparece nas proximidades de cemitérios em Pernambuco. Sem corpo, apenas uma perna peluda que surge do nada para agredir quem encontra em seu caminho.",
      "Em noites de lua cheia, perto dos cemitérios de Pernambuco, quem anda sozinho pode ouvir um som estranho — como se algo pulasse no escuro. É a Perna Cabeluda, que aparece do nada, saltando e correndo atrás dos desavisados. Ninguém sabe de onde veio, nem por que só uma perna vaga pelo mundo. Dizem que ela persegue quem faz travessuras perto dos túmulos ou desrespeita os mortos. Mas há quem conte que, certa vez, um menino deixou flores num túmulo esquecido. A Perna Cabeluda apareceu, mas em vez de assustar, pulou alegremente ao redor do menino e sumiu na noite. Desde então, quem respeita os cemitérios pode andar tranquilo — mas quem desafia o mistério, corre o risco de levar uma rasteira inesperada."
    ),
    new Creature(
      "https://i.pinimg.com/736x/53/9d/da/539dda0212a1613c84d8e64ae4b5c74f.jpg",
      "Corpo-Seco",
      "O Maldito Rejeitado",
      "Sudeste",
      "Lendas de São Paulo e Minas Gerais",
      "Cadáver ressequido de um homem tão mau que foi rejeitado pelo céu, inferno e terra.",
      "Corpo-Seco é o cadáver de um homem extremamente malvado que, após a morte, foi rejeitado pelo céu, inferno e até pela terra, que o vomitou. Agora, vaga pelo mundo assombrando os vivos.",
      "Quando a noite está mais escura e o vento sopra gelado, é sinal de que o Corpo-Seco pode estar por perto. Dizem que foi um homem tão mau que, ao morrer, nem o céu, nem o inferno, nem a terra quiseram seu corpo. Assim, ele vaga ressequido, com pele grudada nos ossos e olhos fundos, procurando alguém para assustar. Quem cruza seu caminho sente um frio na espinha e ouve passos secos atrás de si. Mas há quem diga que, certa vez, uma criança rezou por sua alma esquecida. O Corpo-Seco parou, olhou para o céu e, por um instante, uma lágrima escorreu de seus olhos secos. Desde então, quem reza pelos esquecidos pode andar sem medo — pois até as almas mais perdidas buscam um pouco de compaixão."
    ),
    new Creature(
      "https://i.pinimg.com/736x/1b/48/59/1b4859e9780858c9fb5b9cf1d2455878.jpg",
      "Sanguanel",
      "O Duende Vermelho",
      "Sul",
      "Folclore gaúcho",
      "Ser pequeno e vermelho que rouba crianças e só as devolve mediante oferendas.",
      "Sanguanel é um duende travesso que habita os pinheiros do Sul do Brasil. À noite, rouba crianças pequenas e só as devolve quando recebe oferendas de água e mel, sendo temido pelas famílias da região.",
      "Entre os pinheiros altos e o nevoeiro das serras gaúchas, vive o Sanguanel. Pequeno, vermelho como brasa, ele aparece quando a noite cai e as crianças não querem dormir. Dizem que adora pregar peças, esconder brinquedos e, às vezes, levar os pequenos para passear entre as árvores. Mas não é malvado — só gosta de travessuras. Para ter as crianças de volta, basta deixar água fresca e mel na janela. Certa vez, uma mãe esqueceu a oferenda, mas deixou um bilhete pedindo desculpas. O Sanguanel, tocado pelo gesto, devolveu a criança e ainda deixou um pinhão de presente. Desde então, quem respeita o Sanguanel e suas brincadeiras pode dormir tranquilo — pois ele só leva quem esquece de agradecer à natureza e aos duendes do mato."
    ),
  ];

  getAllCreatures(): Creature[] {
    return this.data;
  }
}
