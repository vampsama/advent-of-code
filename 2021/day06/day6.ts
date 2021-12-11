import { Agent } from "http";
import { getInput, getTextFile } from "../util/getInput";
export const countLanternFishAfterNumberOfDays = (
  fishes: number[],
  days: number
): number => {
  fishes.sort((a, b) => a - b);
  let ages = fishes.reduce((p, c) => {
    p[c] += 1;
    return p;
  }, Array(9).fill(0));
  console.log(ages);
  for (let day = 0; day < days; day++) {
    const spawning = ages[0];
    ages = ages.map((v, i, a) => {
      if (i + 1 < ages.length) return a[i + 1];
      return 0;
    });
    ages[8] += spawning;
    ages[6] += spawning;
  }
  return ages.reduce((prev, cur) => prev + cur, 0);
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
