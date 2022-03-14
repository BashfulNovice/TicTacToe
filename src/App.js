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

  //Functions Below
  //helper function to assist in testing and debug
  const test = () => {
    //console.log(position);
    console.log(history);
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

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Header p1Turn={p1Turn} />
      <h2 className="turn">It is player {p1Turn ? "one's" : "two's"} turn</h2>
      {!winner ? null : (
        <div className="win-blur">
          <div className="win-screen">
            <h3 className="win-anouncement">
              Player {winner[1] === "X" ? "One(X)" : "Two(O)"} Wins!
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
      {/* <button onClick={test}>test test</button> */}
    </div>
  );
}
