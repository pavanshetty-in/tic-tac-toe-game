import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="player 1" symbol="x" />
          <Player initalName="player 2" symbol="0" />
          
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
