// import { useState } from "react";


const GameBoard = ({ onSelectSquare ,board }) => {

    //Lifting this state up to App Component to share the Data with Log Component
    // const [gameBoard, setGameBoard] = useState(initalBoard);

    // const HandleBoardClick = (rowIndex, colIndex) =>{
    //     setGameBoard( (previousBoard) => {
    //         const updatedBoard = [...previousBoard.map( (innerArray) => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = currPlayerSymbol;
    //         return updatedBoard;
    // } );
       

    // onSelectSquare();
    // }

return(
    <ol id='game-board'>
       {board.map( (row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, index) => (
                    <li key={index}><button onClick={() => onSelectSquare(rowIndex,index)} disabled={ playerSymbol !== null}>{playerSymbol}</button> </li>
                ))}
            </ol>
        </li>
       ) )}
    </ol>
);
};

export default GameBoard