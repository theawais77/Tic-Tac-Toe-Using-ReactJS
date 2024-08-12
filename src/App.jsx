import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
    const[gameTurns , setGumTurns]=useState([]);
    const [activatePlayer, setPlayer] = useState('X');

    function handleSelectSquare() {
        setPlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
        setGumTurns();
        
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player1" symbol="X" isActive={activatePlayer === 'X'} />
                    <Player name="Player2" symbol="O" isActive={activatePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} currentPlayerSymbol={activatePlayer} />
            </div>
            <Log/>
        </main>
    );
}

export default App;
