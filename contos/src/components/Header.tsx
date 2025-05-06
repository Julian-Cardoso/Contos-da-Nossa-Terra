import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-bar">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo contos" />
        </div>
        <nav className="header-nav">
          <a href="#criaturas">Criaturas</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contatos</a>
        </nav>
      </div>
    </header>
  );
}
