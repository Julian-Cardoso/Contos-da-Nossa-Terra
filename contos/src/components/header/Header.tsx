import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-bar">
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#contos">Contos</a>
        </nav>

        <div className="logo-wrapper">
          <img src={logo} alt="Logo contos" />
        </div>

        <nav className="header-nav">
          <a href="#mapa">Mapa</a>
          <a href="#sobre">Sobre nós</a>
        </nav>
      </div>
    </header>
  );
}
