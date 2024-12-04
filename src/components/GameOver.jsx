export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} Ha vinto!</p>}
      {!winner && <p>Pareggio !</p>}
      <p>
        <button onClick={onRestart}>Rigioca !</button>
      </p>
    </div>
  );
}
