import "../ComponentStyles/action_bar.css";

export default function ActionBar({
  resetGame,
  handleBack,
  handleForward,
  //position,
  history
}) {
  // const handleReset = () => {
  //   resetGame();
  // };

  // const testBar = () => {
  //   console.log(position);
  //   console.log(history);
  // };

  return (
    <div>
      <button disabled={history === 1 ? true : false} onClick={handleBack}>
        ⬅ Undo
      </button>
      {/* <button
        disabled={position === history - 1 ? true : false}
        onClick={handleForward}
      >
        Redo ➡
      </button> */}
      <button onClick={resetGame}>Reset</button>
      {/* <button onClick = {testBar}>test</button> */}
    </div>
  );
}
