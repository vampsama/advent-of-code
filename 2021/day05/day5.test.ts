import { getData, getOverlappingPoints } from "./day5";

const example = getData("example.txt");
const data = getData("input.txt");
// const data = getData("input.txt");

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
test("part two example overlapping points should equal 12", () => {
  // console.log(example);
  const answer = getOverlappingPoints(example);
  expect(answer).toBe(12);
  // console.log(getOverlappingPoints(data));
});
