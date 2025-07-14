import { CreatureService } from "../../data/creatures-service";
import { Button } from "../button/Button";

import "./FlashCard.css";

function getRandomCreatures<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const FlashCard = () => {
  const creaturesService = new CreatureService();
  const creatures = getRandomCreatures(creaturesService.getAllCreatures(), 5);

  return (
    <div className="flash-card-list">
      {creatures.map((creature) => (
        <div
          key={creature.name}
          className="flash-card"
          style={{
            backgroundImage: `url(${creature.img})`,
          }}
        >
          <div className="flash-card-region">{creature.region}</div>
          <div className="flash-card-name">
            {creature.name}
            <Button text="Ver mais" onClick={() => {}} />
          </div>
        </div>
      ))}
    </div>
  );
};
