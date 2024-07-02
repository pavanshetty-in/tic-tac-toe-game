import { useState } from "react";

const Player = ({ initalName, symbol }) => {
  const [playerName, setPlayerName] = useState(initalName);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
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
    <li>
      <span id="player">
        {NameFeild}
        
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
