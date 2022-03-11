import Tile from "./Tile.js";
import "../ComponentStyles/game.css";

export default function Game({ status, handleMove, position, history }) {
  return (
    <div id="gameBoard" className="boardRow">
      <div id="row1">
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={0}
          text={status[0]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={1}
          text={status[1]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={2}
          text={status[2]}
        />
      </div>
      <div id="row2" className="boardRow">
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={3}
          text={status[3]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={4}
          text={status[4]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={5}
          text={status[5]}
        />
      </div>
      <div id="row3" className="boardRow">
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={6}
          text={status[6]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={7}
          text={status[7]}
        />
        <Tile
          position={position}
          history={history}
          handleMove={handleMove}
          value={8}
          text={status[8]}
        />
      </div>
    </div>
  );
}
