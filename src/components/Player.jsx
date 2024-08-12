import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(name); 
    const [isEditing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing(editing => !editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value); 
    }

    let playerContent = <span className="player-name">{playerName}</span>;
    
    if (isEditing) {
        playerContent = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleNameChange} 
            />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
