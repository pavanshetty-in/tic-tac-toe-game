import { useState } from "react";

const Player = ({ initalName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initalName);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onChangeName(symbol,playerName);
    }
  };

  const handleChange = (event) => {
    console.log(event);
    setPlayerName(event.target.value);
  }


  let NameFeild = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    NameFeild = <input className="playerNameIp" type="text" required value={playerName} onChange={handleChange} />;
  }
  return (
    <li className={isActive ? 'active' : '' }>
      <span id="player">
        {NameFeild}
        
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
