import LogoutIcon from "../../assets/logout.svg"; // ajuste para o caminho correto
import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
      <img className="icon-button" src={LogoutIcon} alt="Seta" />
    </button>
  );
};
