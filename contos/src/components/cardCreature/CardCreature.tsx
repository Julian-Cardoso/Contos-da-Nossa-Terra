import { useState } from "react";
import arrowIcon from "../../assets/arrow-down.svg";
import { CreatureService } from "../../data/creatures-service";
import type { Creature } from "../../domain/creature";
import { Button } from "../button/Button";
import { Modal } from "../modalCreature/Modal";
import "./CardCreature.css";

// Tipos de chaves válidas para ordenação
type SortKey = "name" | "region" | "origin";

export const Creatures = () => {
  const creaturesService = new CreatureService();
  const [sortKey, setSortKey] = useState<SortKey>("name");

  const sortOptions: { value: SortKey; label: string }[] = [
    { value: "name", label: "Nome (A-Z)" },
    { value: "region", label: "Região" },
    { value: "origin", label: "Origem Cultural" },
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortKey(e.target.value as SortKey);
  };

  const sortedCreatures = creaturesService
    .getAllCreatures()
    .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState<
    Creature | undefined
  >();

  const openModal = (creature: Creature) => {
    setSelectedCreature(creature);
    setIsModalOpen(true);
  };

  return (
    <div className="creature-container">
      <div className="header-section">
        <h1 className="header-title">Nossos contos</h1>
        <div className="sort-select-wrapper">
          <label className="sort-label" htmlFor="sort">
            Ordenar por:
          </label>
          <select
            id="sort"
            className="creature-sort"
            value={sortKey}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <img src={arrowIcon} alt="seta" className="select-icon" />
        </div>
      </div>

      {sortedCreatures.map((creature) => (
        <div key={creature.name} className="creature-card">
          <img
            className="creature-img"
            src={creature.img || ""}
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
            <p>{creature.historyShort}</p>
            <div className="creature-button">
              <Button
                text="Conheça a história"
                onClick={() => openModal(creature)}
              />
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        creature={selectedCreature}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
