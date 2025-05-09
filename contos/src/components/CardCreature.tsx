import { CreatureService } from "../data/creatures-service";
import { Button } from "./Button";
import "./CardCreature.css";

export const Creatures = () => {
  const creaturesService = new CreatureService();

  return (
    <div className="creature-container">
      <div className="header-section">
        <h1 className="header-title">Nossos contos</h1>
      </div>
      {creaturesService.getAllCreatures().map((creature) => (
        <div className="creature-card">
          <img
            className="creature-img"
            src={creature.img}
            alt={creature.name}
          />
          <div className="creature-content">
            <div className="creature-header">
              <h2 className="creature-name">{creature.name}</h2>
              <p className="creature-title">{creature.title}</p>
            </div>
            <div className="creature-info">
              <p>
                <strong>Região:</strong> {creature.region}
              </p>
              <p>
                <strong>Origem:</strong> {creature.origin}
              </p>
              <p>
                <strong>Caracteristicas:</strong> {creature.description}
              </p>
            </div>
          </div>
          <div className="creature-divider"></div>
          <div className="creature-history">
            <p>{creature.history}</p>
            <div className="creature-button">
              <Button
                text="Conheça a história"
                onClick={() => console.log("Abrir modal")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
