import { useState } from "react";

const initalBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initalBoard);

    const HandleBoardClick = (rowIndex, colIndex) =>{
        setGameBoard( (previousBoard) => {
            const updatedBoard = [...previousBoard.map( innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
    } );
       
    }

return(
    <ol id='game-board'>
       {gameBoard.map( (row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, index) => (
                    <li key={index}><button onClick={ () => HandleBoardClick(rowIndex, index)}>{playerSymbol}</button> </li>
                ))}
            </ol>
        </li>
       ) )}
    </ol>
);
};

export default GameBoard