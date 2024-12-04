export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} Ha vinto!</p>}
      {!winner && <p>Pareggio !</p>}
      <p>
        <button>Rigioca !</button>
      </p>
    </div>
  );
}
