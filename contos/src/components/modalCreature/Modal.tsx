import ReactDOM from "react-dom";
import "./Modal.css";
import type { Creature } from "../../domain/creature";
import { Button } from "../button/Button";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  creature: Creature | undefined;
};

export const Modal = ({ isOpen, onClose, creature }: Props) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // trava scroll se abrir o Modal
    } else {
      document.body.style.overflow = ""; // destrava scroll se isOpen for falso
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null; // se isOpen for falso não retorna nada

  //isOpen === true
  return ReactDOM.createPortal(

    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal-creature-img"
          src={creature?.img}
          alt={creature?.name}
        />
        <div className="modal-header-content">
          <div className="modal-creature-header">
            <h2 className="modal-creature-name">{creature?.name}</h2>
            <p className="modal-creature-title">{creature?.title}</p>
          </div>
          <div className="modal-creature-info">
            <p>
              <strong>Região:</strong> {creature?.region}
            </p>
            <p>
              <strong>Origem:</strong> {creature?.origin}
            </p>
          </div>
        </div>
        <div className="modal-creature-divider"></div>
        <div className="modal-creature-history">
          <p>{creature?.historyLong}</p>
          <div className="modal-creature-button">
            <Button
              text="Fechar história"
              onClick={() => onClose()}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};