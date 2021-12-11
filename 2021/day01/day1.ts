import { getInput } from "../util/getInput";

export const countIncreases = (array: number[]): number => {
  let count: number = 0;
  array.reduce((previous, current, currentIndex, array) => {
    if (current > previous) count++;
    return current;
  });
  return count;
};
export const createTriplets = (array: number[]): number[] => {
  array.reduce((previous, current, currentIndex, array) => {
    const next: number =
      currentIndex + 1 < array.length ? array[currentIndex + 1] : 0;
    array[currentIndex - 1] = previous + current + next;
    return current;
  });
  return array;
};
const getData = (): number[] =>
  getInput("input.txt")
    .split("\n")
    .map((elem) => Number(elem));
export const partOne = () => console.log("Part 1: ", countIncreases(getData()));
export const partTwo = () =>
  console.log("Part 2: ", countIncreases(createTriplets(getData())));
export const all = () => {
  partOne();
  partTwo();
};
