//function that accepts an array, the game board
//status, and returns whether a player won, which
//player won, and how they won.

export default function checkWin(array) {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let [t1, t2, t3] = winConditions[i];
    if (array[t1] && array[t1] === array[t2] && array[t1] === array[t3]) {
      return [true, array[t1], winConditions[i]];
    }
  }
  return null;
}
