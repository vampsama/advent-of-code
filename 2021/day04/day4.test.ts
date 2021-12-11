import { getData, playBingo, playLosingBingo } from "./day4";

const example = getData("example.txt");
const data = getData("input.txt");

// test("flipboard flips the board", () => {
//   const board = [
//     [22, 13, 17, 11, 0],
//     [8, 2, 23, 4, 24],
//     [21, 9, 14, 16, 7],
//     [6, 10, 3, 18, 5],
//     [1, 12, 20, 15, 19],
//   ];
//   const flippedBoard = [
//     [22, 8, 21, 6, 1],
//     [13, 2, 9, 10, 12],
//     [17, 23, 14, 3, 20],
//     [11, 4, 16, 18, 15],
//     [0, 24, 7, 5, 19],
//   ];
//   // const board = [
//   //   [1, 2, 3],
//   //   [4, 5, 6],
//   //   [7, 8, 9],
//   // ];
//   // const flippedBoard = [
//   //   [1, 4, 7],
//   //   [2, 5, 8],
//   //   [3, 6, 9],
//   // ];
//   // const answer = flipBoard(board);
//   const answer = board[0].map((_, colIndex) =>
//     board.map((row) => row[colIndex])
//   );
//   console.log(board);
//   console.log(answer);
//   console.log(flippedBoard);
//   expect(answer).toBe(flippedBoard);
// });
test("part one example winning number should equal 24", () => {
  const answer = playBingo(example)[0];
  expect(answer).toBe(24);
});
test("part one example winning score should equal 188", () => {
  const answer = playBingo(example)[1];
  expect(answer).toBe(188);
});
test("part one winning number should be 77", () =>
  expect(playBingo(data)[0]).toBe(77));
test("part one winning score should be 539", () =>
  expect(playBingo(data)[1]).toBe(539));
test("part two example winning number should equal 13", () => {
  const answer = playLosingBingo(example)[0];
  expect(answer).toBe(13);
});
test("part two example winning score should equal 148", () => {
  const answer = playLosingBingo(example)[1];
  expect(answer).toBe(148);
});
console.log(playLosingBingo(data)[1]);
console.log(playLosingBingo(data)[0]);
