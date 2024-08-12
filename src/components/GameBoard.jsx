import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, currentPlayerSymbol }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard(prevGameBoard => {
    //         // Make a deep copy of the game board
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

    //         // Update the selected square with the current player's symbol
    //         if (!updatedBoard[rowIndex][colIndex]) { // Check if the square is empty
    //             updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
    //         }

    //         return updatedBoard;
    //     });

    //     // Call the function to toggle the active player
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            )}
        </ol>
    );
}
