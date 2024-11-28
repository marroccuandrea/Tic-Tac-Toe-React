import { useState } from "react";

export default function Player({ name, symbol }) {
  // Con questa espressione posso capire quando il nome del giocatore viene modificato, inizialmente sarà false, al click del pulsante diventerà true e il nome del pulsante cambierà, a seconda dello state.
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // Toggle salva - modifica
    setIsEditing((editing) => !editing); //Quando si usano valori vecchi (old) meglio usare una arrow function, React la userà senza problemi, al contrario della prima.
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Salva" : "Modifica"}
      </button>
    </li>
  );
}
