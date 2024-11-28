import { useState } from "react";

export default function Player({ name, symbol }) {
  // Con questa espressione posso capire quando il nome del giocatore viene modificato, inizialmente sarà false, al click del pulsante diventerà true e il nome del pulsante cambierà, a seconda dello state.
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonChange = "Modifica";

  if (isEditing) {
    playerName = <input type="text" required></input>;
    buttonChange = "Salva";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonChange}</button>
    </li>
  );
}
