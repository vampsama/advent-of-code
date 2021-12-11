import { getInput, getTextFile } from "../util/getInput";
export const partOne = (lines: string[][]): number => {
  const openingChars = "[({<";
  lines.map((v) =>
    v.reduce((p, c) => {
      if (openingChars.includes(c)) {
        return p.push(c);
      }
      return p;
    }, [])
  );
  return 0;
};
export const partTwo = (lines: string[]): number => {
  return 0;
};

export const getData = (filename: string): number[][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((e) => e.split("").map((elem) => Number(elem)));
