import guarana from "../../assets/guarana.png";
import "./infor.css";

export default function Infor() {
  return (
    <div className="infor">
      <img className="infor-img" src={guarana} alt="Fruta guaraná" />
      <div className="infor-text-container">
        <h1>Somos só lendas?</h1>
        <p className="infor-text">
          <strong>Contos da Nossa Terra</strong> nasceu do desejo de reacender a
          imaginação popular e preservar o encantamento das histórias que
          atravessam gerações. Em um mundo cada vez mais digital, criamos este
          espaço como um portal para o passado — onde o sussurro do vento pode
          ser o Curupira, e uma trilha de fumaça, a Cuca espreitando. <br />
          Nosso objetivo é celebrar o rico folclore brasileiro, reunindo lendas,
          mitos e criaturas que fazem parte da alma do nosso povo. Cada conto
          aqui carrega fragmentos de magia e sabedoria ancestral, ecos de vozes
          que vêm dos sertões, florestas e comunidades tradicionais. Mais do que
          um site, queremos ser um espelho encantado da nossa cultura — um
          convite a imaginar, sentir e lembrar que, às vezes, a verdade mora nas
          lendas.
        </p>
      </div>
    </div>
  );
}
