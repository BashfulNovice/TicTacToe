import "../ComponentStyles/action_bar.css";

export default function ActionBar({
  resetGame,
  handleBack,
  handleForward,
  history
}) {
  return (
    <div className="actionBar">
      <button
        className="undo"
        disabled={history === 1 ? true : false}
        onClick={handleBack}
      >
        ⬅ Undo
      </button>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
      {/* <button onClick = {testBar}>test button</button> */}
    </div>
  );
}
