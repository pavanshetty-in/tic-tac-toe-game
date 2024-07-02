import { useState } from "react";

const initalBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = ({ onSelectSquare , currPlayerSymbol }) => {
    const [gameBoard, setGameBoard] = useState(initalBoard);

    const HandleBoardClick = (rowIndex, colIndex) =>{
        setGameBoard( (previousBoard) => {
            const updatedBoard = [...previousBoard.map( (innerArray) => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = currPlayerSymbol;
            return updatedBoard;
    } );
       

    onSelectSquare();
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