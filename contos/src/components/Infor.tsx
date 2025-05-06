import logo from "../assets/logo.png";

export default function Infor() {
  return (
    <div className="infor">
      <img className="infor-img" src={logo} alt="Imagem ilustrativa" />
      <h1>Somos só lendas?</h1>
      <p className="infor-text">
        O Contos da Nossa Terra nasceu do desejo de resgatar e valorizar as
        histórias que fazem parte da alma do nosso povo. Lendas que nos foram
        contadas pelos nossos avós, que viviam no interior, nas beiras dos rios
        ou no coração das matas.
      </p>
      <p className="infor-text">
        Histórias do Curupira, da Iara, do Saci e tantos outros seres mágicos
        que habitam o folclore brasileiro. Acreditamos que essas narrativas são
        parte fundamental da nossa identidade. Mais do que contos, são memórias
        vivas da nossa cultura, passadas de geração em geração. Nosso objetivo é
        manter essa chama acesa, trazendo essas criaturas à vida em um formato
        acessível, visual e encantador para todos — principalmente para as novas
        gerações.
      </p>
      <p className="infor-text">
        Aqui,cada criatura é uma porta para o nosso passado e um convite para
        imaginar novos futuros, onde tradição e imaginação andam de mãos dadas.
      </p>
    </div>
  );
}
