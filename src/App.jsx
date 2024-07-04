import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBO} from "./winning-combo.js"
import GameOver from "./components/GameOver.jsx";

const getCurrPlayer = (gameTurns) => {

  let localCurrPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X')  { 
    localCurrPlayer = 'O'}

return localCurrPlayer;
}


const initalBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winner = null;

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // const [currPlayer,setCurrPlayer] = useState('X');
  const currPlayer = getCurrPlayer(gameTurns);
  
  let gameBoard = [...initalBoard.map( (innerArray) => [...innerArray])];

  for(const turn of gameTurns){
      const {square,player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  for (const Combo of WINNING_COMBO){
    const firstSquareSymbol = gameBoard[Combo[0].row][Combo[0].column]
    const secondSquareSymbol = gameBoard[Combo[1].row][Combo[1].column]
    const thirdSquareSymbol =  gameBoard[Combo[2].row][Combo[2].column]

    if(firstSquareSymbol &&  firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol
    }
  }

  let hasDraw = gameTurns.length === 9 && !winner;

  const handleRestart = () =>{
    setGameTurns([]);
    hasDraw = null;
    winner=null;
  }

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
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard  onSelectSquare={handleCurrPlayer} 
        board ={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
