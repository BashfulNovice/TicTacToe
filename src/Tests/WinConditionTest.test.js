import checkWin from "../Components/checkWin.js";

let winTests = [
  [null, null, null, null, null, null, null, null, null],
  ["X", "X", "X", null, null, null, null, null, null],
  ["O", "O", "O", null, null, null, null, null, null],
  ["X", null, null, "X", null, null, "X", null, null],
  ["O", null, null, "O", null, null, "O", null, null],
  ["X", null, null, null, "X", null, null, null, "X"],
  ["O", null, null, null, "O", null, null, null, "O"],
  ["O", "X", "O", "O", "X", "O", "X", "O", "X"]
];

test("Returns Null for an input of empty board", () => {
  expect(checkWin(winTests[0])).toBe(null);
});

test("return correct win contion for first Row X win", () => {
  expect(checkWin(winTests[1])).toStrictEqual([true, "X", [0, 1, 2]]);
});

test("return correct win contion for first Row O win", () => {
  expect(checkWin(winTests[2])).toStrictEqual([true, "O", [0, 1, 2]]);
});

test("return correct win contion for first Column X win", () => {
  expect(checkWin(winTests[3])).toStrictEqual([true, "X", [0, 3, 6]]);
});

test("return correct win contion for first Column O win", () => {
  expect(checkWin(winTests[4])).toStrictEqual([true, "O", [0, 3, 6]]);
});

test("return correct win contion for diagonal X win", () => {
  expect(checkWin(winTests[5])).toStrictEqual([true, "X", [0, 4, 8]]);
});

test("return correct win contion for diagonal O win", () => {
  expect(checkWin(winTests[6])).toStrictEqual([true, "O", [0, 4, 8]]);
});

test("Returns correct for full board stalemate", () => {
  expect(checkWin(winTests[winTests.length - 1])).toBe(null);
});
