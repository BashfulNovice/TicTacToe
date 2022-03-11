import { useState } from "react";
import "../ComponentStyles/tile.css";

export default function Tile({ text, value, handleMove, position, history }) {
  //Callback for click events on the game tiles
  const handleClick = (e) => {
    if (text === null) {
      handleMove(e);
    }
  };

  return (
    <button
      disabled={position === history.length - 1 ? false : true}
      className="boardBttn"
      value={value}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
