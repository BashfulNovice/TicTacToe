import "./styles.css";
import Header from "./Components/Header.js";
import Game from "./Components/Game.js";
import ActionBar from "./Components/ActionBar.js";
import { useState } from "react";
import checkWin from "./Components/checkWin.js";

export default function App() {
  //State is kept here
  //to controll who's turn it is
  const [p1Turn, setP1Turn] = useState(true);
  //to controll the status of the board.
  const [status, setStatus] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  //keep track of game moves.
  const [history, setHistory] = useState([
    [null, null, null, null, null, null, null, null, null]
  ]);
  //to toggle win screen
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [names, setNames] = useState({ X: "X", O: "O" });
  const [editNames, setEditNames] = useState(false);

  //Functions Below
  //helper function to assist in testing and debug
  const test = () => {
    //console.log(position);
    console.log(checkWin(status));
  };

  //Function to reset the game board.
  const resetGame = () => {
    setStatus([null, null, null, null, null, null, null, null, null]);
    setHistory([[null, null, null, null, null, null, null, null, null]]);
    setP1Turn(true);
    setWinner(null);
  };

  //function passed down to each tile to handle a change in
  const handleMove = (e) => {
    let newStatus = [...status];
    newStatus[e.target.value] = p1Turn ? "X" : "O";
    setStatus(newStatus);
    setP1Turn(!p1Turn);
    let newHistory = history;
    newHistory.push(newStatus);
    setHistory(newHistory);
    let win = checkWin(newStatus);
    if (win) {
      let newScore = { ...score };
      newScore[win[1]] = newScore[win[1]] + 1;
      setScore(newScore);
      setWinner(win);
    }
  };

  const handleBack = () => {
    let newStatus = history[history.length - 2];
    setStatus(newStatus);
    let newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setP1Turn(!p1Turn);
    setWinner(null);
  };

  const handleClose = () => {
    setWinner(null);
  };

  const toggleNameEdit = () => {
    setEditNames(!editNames);
  };

  const handleNameChange = (e) => {
    setNames({ ...names, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Header p1Turn={p1Turn} />
      <h2 className="turn">
        It is {p1Turn ? `${names.X}'s` : `${names.O}'s`} turn
      </h2>
      {/* conditional render to show win screen below */}
      {!winner ? null : (
        <div className="win-blur">
          <div className="win-screen">
            <h3 className="win-anouncement">
              {winner[1] === "X" ? `${names.X}` : `${names.O}`} Wins!
            </h3>
            <Game status={status} />
            <button className="play-again" onClick={resetGame}>
              Play Again
            </button>
            <button className="close" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}
      {/* conditional render to show score, or inputs to edit names */}
      {editNames ? (
        <div className="name-edit">
          <input
            className="nameInput"
            type="text"
            onChange={(e) => handleNameChange(e)}
            name="X"
            placeholder="player1"
            value={names.X}
          ></input>
          <input
            className="nameInput"
            type="text"
            onChange={(e) => handleNameChange(e)}
            name="O"
            value={names.O}
          ></input>
          <button onClick={toggleNameEdit}>Save</button>
        </div>
      ) : (
        <div className="score">
          <p className="playerScore" onClick={toggleNameEdit}>
            {names["X"]}:{score.X}
          </p>
          <p className="playerScore" onClick={toggleNameEdit}>
            {names["O"]}:{score.O}
          </p>
        </div>
      )}

      <Game
        history={history}
        handleMove={handleMove}
        status={status}
        setStatus={setStatus}
      />
      <ActionBar
        history={history.length}
        handleBack={handleBack}
        resetGame={resetGame}
      />
      {/* button used to assist in test and debugging */}
      {/* <button onClick={test}>test test</button> */}
    </div>
  );
}
