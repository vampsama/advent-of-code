import { Agent } from "http";
import { getInput, getTextFile } from "../util/getInput";
export const countLanternFishAfterNumberOfDays = (
  fishes: number[],
  days: number
): number => {
  fishes.sort((a, b) => a - b);
  console.log(fishes);
  fishes = fishes.reduce((p, c) => {
    p[c]++;
  }, []);

  console.log(fishes);
  return fishes.reduce((prev, cur) => prev + cur[0] * cur[1], 0);
};

const countDecendants = (fishes: number[], days: number): number => {
  for (let i = 0; i < days; i++) {
    const newFishes: number[] = [];
    fishes = fishes.map((value) => {
      if (value === 0) {
        newFishes.push(8);
        return 6;
      }
      return value - 1;
    });
    fishes = [...fishes, ...newFishes];
  }
  return fishes.length;
};
export const getData = (filename: string): number[] =>
  getTextFile(__dirname, filename)
    .split(",")
    .map((elem) => Number(elem));
// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
