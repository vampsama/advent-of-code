import { getInput, getTextFile } from "../util/getInput";
export const getOverlappingPoints = (input: number[][][]): number => {
  const vents = markVents(input);

  return vents
    .map((row) => row.reduce((p, c) => (c > 1 ? p + 1 : p), 0))
    .reduce((p, c) => p + c, 0);
};
const markVents = (ventData: number[][][]): number[][] => {
  // för varje rad
  const max: number = ventData.reduce((prev, cur) => {
    // console.log(cur);
    // console.log(Math.max(cur[0][0], cur[0][1], cur[1][0], cur[1][1]));
    return Math.max(prev, cur[0][0], cur[0][1], cur[1][0], cur[1][1]);
  }, 0);
  // console.log(max);
  //const chart: number[][] = Array(max + 1).fill(new Array(max + 1).fill(0));
  var chart: number[][] = [];
  for (var i = 0; i < max + 1; i++) {
    chart[i] = new Array(max + 1).fill(0);
  }
  // console.log(chart);
  ventData.forEach((value) => {
    // kolla om det är en kollumn eller rad
    const colCells = [value[0][1], value[1][1]].sort((a, b) => a - b);
    const rowCells = [value[0][0], value[1][0]].sort((a, b) => a - b);
    // console.log("radc", rowCells);
    // console.log("colc", colCells);
    if (
      rowCells[0] - colCells[0] ===
      rowCells[1] - colCells[1]
      // ||
      // value[0][0] === value[1][0] ||
      // value[0][1] === value[1][1] ||
      // (value[0][0] === value[0][1] && value[1][0] === value[1][1])
      //||value[0][0] - value[1][1] === value[0][1] - value[1][0]
    ) {
      //markera rad
      console.log("rad", value);
      for (let i = rowCells[0]; i <= rowCells[1]; i++) {
        for (let j = colCells[0]; j <= colCells[1]; j++) {
          chart[i][j] += 1;
        }
      }
      console.log(chart.map((row) => row.join("")).join("\n"));
    }
    // if (value[0][1] === value[1][1]) {
    //   // console.log("kollumn", value);
    //   // markera kolumn
    //   //markera rad
    //   const colCells = [value[0][0], value[1][0]].sort((a, b) => a - b);
    //   // console.log(colCells);
    //   for (i = colCells[0]; i <= colCells[1]; i++) {
    //     chart[value[1][1]][i] += 1;
    //   }
    // }
    // if (value[0][0] === value[0][1] && value[1][0] === value[1][1]) {
    //   console.log("diag", value);
    //   const diagCells = [value[0][0], value[1][0]].sort((a, b) => a - b);
    //   for (i = diagCells[0]; i <= diagCells[1]; i++) {
    //     chart[i][i] += 1;
    //     // console.log("chart[" + i + "][" + i + "]");
    //   }
    // }
    // if (value[0][0] === value[1][1] && value[0][1] === value[1][0]) {
    //   // diagonal
    //   // console.log("diag", value);
    //   const diagCells = [value[0][0], value[0][1]].sort((a, b) => a - b);
    //   // console.log(diagCells);
    //   let j = diagCells[1];
    //   for (i = diagCells[0]; i <= diagCells[1]; i++, j--) {
    //     chart[i][j] += 1;
    //     for (j = diagCells[0]; i <= diagCells[1]; i++, j--) {
    //       chart[i][j] += 1;
    //       // console.log("chart[" + i + "][" + j + "]");
    //     }
    //     // console.log("chart[" + i + "][" + j + "]");
    //   }
    // }
  });
  return chart;
};
export const getData = (filename: string): number[][][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((elem) =>
      elem
        .split(" -> ")
        .map((elem) => elem.split(",").map((elem) => Number(elem)))
    );
// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
