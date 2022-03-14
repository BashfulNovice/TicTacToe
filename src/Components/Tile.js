import { useState } from "react";
import "../ComponentStyles/tile.css";

export default function Tile({ text, value, handleMove, history }) {
  //Callback for click events on the game tiles
  const handleClick = (e) => {
    if (text === null) {
      handleMove(e);
    }
  };

  return (
    <button
      id={value}
      className="boardBttn"
      value={value}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
