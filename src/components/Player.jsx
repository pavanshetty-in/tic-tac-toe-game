import { useState } from "react";


const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing]= useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    let NameFeild = <span className="player-name">{name}</span>
 if (!isEditing){
  NameFeild = <input type="text" value={name} />
 }
  return (
    <li>
      <span id="player">
        {NameFeild}
        {/* <span className="player-name">{name}</span> */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Player;
