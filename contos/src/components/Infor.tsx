import guarana from "../assets/guarana.png";
import "./Infor.css";

export default function Infor() {
  return (
    <div className="infor">
      <img className="infor-img" src={guarana} alt="Imagem ilustrativa" />
      <div className="infor-text-container">
        <h1>Somos só lendas?</h1>
        <p className="infor-text">
          O Contos da Nossa Terra surgiu para resgatar e valorizar lendas
          contadas por nossos avós, vindas das margens dos rios e do coração das
          matas.
        </p>
        <p className="infor-text">
          Curupira, Iara, Saci e outros seres encantados fazem parte da nossa
          identidade cultural. Mais que histórias, são memórias vivas que
          queremos manter acesas para as novas gerações.
        </p>
        <p className="infor-text">
          Cada criatura aqui é um elo com o passado e um convite a imaginar o
          futuro, unindo tradição e fantasia.
        </p>
      </div>
    </div>
  );
}
