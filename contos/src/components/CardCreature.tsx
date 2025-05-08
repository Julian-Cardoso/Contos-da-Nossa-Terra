import { CreatureService } from "../data/creatures-service";
import "./CardCreature.css";

export const Creatures = () => {
  const creaturesService = new CreatureService();
  return (
    <div className="creatures">
      {creaturesService.getAllCreatures().map((creature) => (
        <div key={creature.name} className="creature-card">
          <img src={creature.img} alt={creature.name} />
          <h2>{creature.name}</h2>
          <p>{creature.title}</p>
          <p>{creature.region}</p>
          <p>{creature.origin}</p>
          <p>{creature.description}</p>
          <p>{creature.history}</p>
        </div>
      ))}
    </div>
  );
};
