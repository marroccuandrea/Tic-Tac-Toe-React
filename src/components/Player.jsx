import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // Questo state mi servirà per modificare effettivamente il value dell'input
  const [playerName, setPlayerName] = useState(initialName);
  // Con questa espressione posso capire quando il nome del giocatore viene modificato, inizialmente sarà false, al click del pulsante diventerà true e il nome del pulsante cambierà, a seconda dello state.
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // Toggle salva - modifica
    setIsEditing((editing) => !editing); //Quando si usano valori vecchi (old state) meglio usare una arrow function, React la aggiornerà lo state senza problemi, al contrario della prima.
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    // Questa funzione serve per prendere i valori all'interno del campo input e salvarli poi nella variabile
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Salva" : "Modifica"}
      </button>
    </li>
  );
}
