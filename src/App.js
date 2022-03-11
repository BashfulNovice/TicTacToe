import "./styles.css";
import Header from "./Components/Header.js";
import Game from "./Components/Game.js";
import ActionBar from "./Components/ActionBar.js";
import { useState } from "react";
import checkWin from "./Components/checkWin.js";

export default function App() {
  //State is kept here
  const [p1Turn, setP1Turn] = useState(true);
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
  const [history, setHistory] = useState([
    [null, null, null, null, null, null, null, null, null]
  ]);
  const [winner, setWinner] = useState(null);
  const [position, setPosition] = useState(0);

  //Functions Below
  //helper function to assist in testing and debug
  const test = () => {
    console.log(position);
    console.log(history);
  };

  //Function to reset the game board.
  const resetGame = () => {
    setPosition(0);
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
    setPosition(position + 1);
    let win = checkWin(newStatus);
    if (win) {
      setWinner(win);
    }
  };

  const handleBack = () => {
    let newStatus = history[position - 1];
    setStatus(newStatus);
    setPosition(position - 1);
  };

  const handleForward = () => {
    let newStatus = history[position + 1];
    setStatus(newStatus);
    setPosition(position + 1);
  };

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Header p1Turn={p1Turn} />
      {!winner ? (
        <h2>It is player {p1Turn ? "one's" : "two's"} turn</h2>
      ) : (
        <h2 className="win-screen">
          Player {winner[1] === "X" ? "One(X)" : "Two(O)"} Wins!
        </h2>
      )}
      <Game
        position={position}
        history={history}
        handleMove={handleMove}
        status={status}
        setStatus={setStatus}
      />
      <ActionBar
        handleForward={handleForward}
        position={position}
        history={history.length}
        handleBack={handleBack}
        resetGame={resetGame}
      />
      <button onClick={test}>test test</button>
    </div>
  );
}
