import { getInput, getTextFile } from "../util/getInput";
export const playBingo = (input: string[]): number[] => {
  const [drawLine, ...boardLines] = input;
  const draw: number[] = drawLine.split(",").map((elem) => Number(elem));
  const boards: any[] = boardLines.reduce((prev, current, index, array) => {
    if (!current.length) {
      const board = [];
      for (let i = 0; i < array[index + 1].trim().split(/\s+/).length; i++) {
        board.push(
          array[index + 1 + i]
            .trim()
            .split(/\s+/)
            .map((elem) => Number(elem))
        );
      }
      return [...prev, board];
    }
    return prev;
  }, Array(boardLines[0].length));
  for (let i = 4; i < draw.length; i++) {
    const winningBoard = boards.reduce((prev, current) => {
      if (checkBoardRows(draw.slice(0, i), current)) {
        return current;
      }
      if (
        checkBoardRows(
          draw.slice(0, i),
          current.map((_: any, colIndex: string | number) =>
            current.map((row: { [x: string]: any }) => row[colIndex])
          )
        )
      ) {
        return current;
      }
      return prev;
    }, null);
    if (winningBoard) {
      // console.log(winningBoard);
      const score = getScore(draw.slice(0, i), winningBoard);
      return [draw[i - 1], score];
    }
  }
  return [0, 0];
};
const getScore = (draw: number[], board: number[][]): number => {
  return board
    .map((elem) => elem.map((num) => (draw.includes(num) ? 0 : num)))
    .map((row) => row.reduce((p, c) => p + c))
    .reduce((p, c) => p + c);
};
export const playLosingBingo = (input: string[]): number[] => {
  let lastWinningBoard: number[][] = [[0]];
  let lastWinningDraw: number = 0;
  const [drawLine, ...boardLines] = input;
  const draw: number[] = drawLine.split(",").map((elem) => Number(elem));
  const boards: any[] = boardLines.reduce((prev, current, index, array) => {
    if (!current.length) {
      const board = [];
      for (let i = 0; i < array[index + 1].trim().split(/\s+/).length; i++) {
        board.push(
          array[index + 1 + i]
            .trim()
            .split(/\s+/)
            .map((elem) => Number(elem))
        );
      }
      return [...prev, board];
    }
    return prev;
  }, Array(boardLines[0].length));
  for (let i = 4; i < draw.length; i++) {
    const winningBoard = boards.reduce((prev, current, index) => {
      if (checkBoardRows(draw.slice(0, i), current)) {
        // console.log("row");
        lastWinningBoard = current;
        lastWinningDraw = i;
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
      if (
        checkBoardRows(
          draw.slice(0, i),
          current.map((_: any, colIndex: string | number) =>
            current.map((row: { [x: string]: any }) => row[colIndex])
          )
        )
      ) {
        lastWinningBoard = current;
        lastWinningDraw = i;
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
      return prev;
    }, boards);
    if (winningBoard.length === 1) {
      console.log(winningBoard, draw.slice(0, i));
      const score = getScore(draw.slice(0, i), winningBoard[0]);
      return [draw[i - 1], score];
    }
  }
  console.log(draw.slice(0, lastWinningDraw), lastWinningBoard);
  const score = getScore(draw.slice(0, lastWinningDraw), lastWinningBoard);
  return [draw[lastWinningDraw], score];
};
const checkBoardRows = (drawnNumbers: number[], board: number[][]): boolean => {
  // console.log("drawnNumbers", drawnNumbers);
  // console.log("board", board);
  if (drawnNumbers.length && drawnNumbers.length < board[0].length) {
    return false;
  }
  for (let i = 0; i < board.length; i++) {
    //console.log("check row:", board[i], "against draw: ", drawnNumbers);
    if (
      board[i].every((num) => {
        //console.log(drawnNumbers.includes(num));
        return drawnNumbers.includes(num);
      })
    )
      return true;
  }
  return false;
};
export const getData = (filename: string): string[] =>
  getTextFile(__dirname, filename).split("\n");
// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
