import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBard.jsx";
import { useState } from "react";

function App() {
  const [currPlayer,setCurrPlayer] = useState('X');

  const handleCurrPlayer =() => {
    setCurrPlayer( (prevVal) => prevVal == 'X' ? 'O' : 'X' );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName="player 1" symbol="x" isActive={currPlayer === 'X'} />
          <Player initalName="player 2" symbol="0" isActive={currPlayer === 'O'}/>
          
        </ol>
        <GameBoard  onSelectSquare={handleCurrPlayer} currPlayerSymbol={currPlayer} />
      </div>
    </main>
  );
}

export default App;
