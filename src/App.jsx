import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// Hello WOrld

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [activatePlayer, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null); 

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
let winner1;
    // Check 
        for (const combination of WINNING_COMBINATIONS) {
            const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
            const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
            const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

            if (
                firstSquareSymbol && 
                firstSquareSymbol === secondSquareSymbol && 
                firstSquareSymbol === thirdSquareSymbol
            ) {
                setWinner(firstSquareSymbol); // Set the winner
                break;
            }
        }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        if (winner1) return; // Stop the game if there's a winner

        setPlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: activatePlayer },
                ...prevTurns
            ];
            return updatedTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player1" symbol="X" isActive={activatePlayer === 'X'} />
                    <Player name="Player2" symbol="O" isActive={activatePlayer === 'O'} />
                </ol>
                {winner1 &&  <GameOver winner1={winner}/>}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );


export default App;
