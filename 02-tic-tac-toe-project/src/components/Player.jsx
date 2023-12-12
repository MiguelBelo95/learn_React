import { useState } from "react";

export default function Player({ initialName, symbol, isActive, nameChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleChange(e) {
    setPlayerName(e.target.value);
    nameChange(symbol, e.target.value);
  }



  return (<li className={isActive ? 'active' : undefined}>
    <span className="player">
      {isEditing ? <input type="text" required defaultValue={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={() => { setIsEditing((editing) => !editing) }}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>);
}
