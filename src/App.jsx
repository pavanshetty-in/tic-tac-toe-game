import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBO} from "./winning-combo.js"

const getCurrPlayer = (gameTurns) => {

  let localCurrPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X')  { 
    localCurrPlayer = 'O'}

return localCurrPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // const [currPlayer,setCurrPlayer] = useState('X');
  const currPlayer = getCurrPlayer(gameTurns);

  const handleCurrPlayer =(rowIndex,colIndex) => {
    // setCurrPlayer( (prevVal) => (prevVal == 'X' ? 'O' : 'X') );

    setGameTurns( preTurns =>{

      const localCurrPlayer = getCurrPlayer(preTurns);
      // let localCurrPlayer = 'X';
      // if(preTurns.length > 0 && preTurns[0].player === 'X')  { 
      //   localCurrPlayer = 'O'}

      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex}, player: localCurrPlayer
      }, ...preTurns];

      return updatedTurns;
    } )

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName="player 1" symbol="x" isActive={currPlayer === 'X'} />
          <Player initalName="player 2" symbol="0" isActive={currPlayer === 'O'}/>
          
        </ol>
        <GameBoard  onSelectSquare={handleCurrPlayer} 
        turns ={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
