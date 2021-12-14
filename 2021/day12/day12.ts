import { getInput, getTextFile } from "../util/getInput";
export const partOne = (pos: number[][]): number => {
  return 0;
};
export const partTwo = (pos: number[][]): number => {
  return 0;
};

export const getData = (filename: string): number[][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((e) => e.split("").map((elem) => Number(elem)));
