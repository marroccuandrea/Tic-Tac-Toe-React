import { useState } from "react";

export default function Player({ name, symbol }) {
  // Con questa espressione posso capire quando il nome del giocatore viene modificato, inizialmente sarà false, al click del pulsante diventerà true e il nome del pulsante cambierà, a seconda dello state.
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Modifica</button>
    </li>
  );
}