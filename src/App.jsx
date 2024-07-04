import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBO} from "./winning-combo.js"
import GameOver from "./components/GameOver.jsx";

const PLAYER = {
  X: 'Player 1',
  O: 'Player 2',
}

const initalBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getCurrPlayer = (gameTurns) => {

  let localCurrPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X')  { 
    localCurrPlayer = 'O'}

return localCurrPlayer;
}

const getGameBoard = (gameTurns)  => {
  let gameBoard = [...initalBoard.map( (innerArray) => [...innerArray])];

  for(const turn of gameTurns){
      const {square,player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;

}

const getWinner = (gameBoard, players) => {
  let winner = null;
  for (const Combo of WINNING_COMBO){
    const firstSquareSymbol = gameBoard[Combo[0].row][Combo[0].column]
    const secondSquareSymbol = gameBoard[Combo[1].row][Combo[1].column]
    const thirdSquareSymbol =  gameBoard[Combo[2].row][Combo[2].column]

    if(firstSquareSymbol &&  firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol]
    }
  }
  return winner;

}

function App() {
  const [players, setPlayers] = useState(PLAYER)
  const [gameTurns, setGameTurns] = useState([]);

  // const [currPlayer,setCurrPlayer] = useState('X');
  const currPlayer = getCurrPlayer(gameTurns);
  
  const  gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);

  let hasDraw = gameTurns.length === 9 && !winner;

  const handleRestart = () =>{
    setGameTurns([]);
    // hasDraw = null;
    // winner=null;
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

  const handlePlayerSave = (symbol, newName) => {
    setPlayers( previousPlayer =>{
      return {...previousPlayer, [symbol]: newName };
    }
    )
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName={PLAYER.X} symbol="X" isActive={currPlayer === 'X'}  onChangeName={handlePlayerSave}
          />
          <Player initalName={PLAYER.O} symbol="O" isActive={currPlayer === 'O'}  onChangeName={handlePlayerSave}/>
          
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
