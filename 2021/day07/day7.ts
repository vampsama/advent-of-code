import { getInput, getTextFile } from "../util/getInput";
export const partOne = (pos: number[]): number => {
  // hitta medianen
  const median = pos[Math.round(pos.length / 2)];
  //console.log(median);

  return pos.reduce((prev, cur) => prev + Math.abs(cur - median), 0);
};
export const partTwo = (pos: number[]): number => {
  const mean = Math.round(pos.reduce((p, c) => p + c, 0) / pos.length);
  console.log(pos.reduce((p, c) => p + c, 0) / pos.length);
  return Math.min(
    pos.reduce((p, c) => {
      const distance = Math.abs(c - mean);
      costs[distance] = fuelCost(distance);
      //console.log(costs);
      return p + costs[distance];
    }, 0),
    pos.reduce((p, c) => {
      const distance = Math.abs(c - mean + 1);
      costs[distance] = fuelCost(distance);
      //console.log(costs);
      return p + costs[distance];
    }, 0),
    pos.reduce((p, c) => {
      const distance = Math.abs(c - mean - 1);
      costs[distance] = fuelCost(distance);
      //console.log(costs);
      return p + costs[distance];
    }, 0)
  );
};
const costs: any = [];
const fuelCost = (distance: number): number => {
  if (distance === 0) return 0;
  if (costs[distance]) return costs[distance];
  return fuelCost(distance - 1) + distance;
};
export const getData = (filename: string): number[] =>
  getTextFile(__dirname, filename)
    .split(",")
    .map((elem) => Number(elem))
    .sort((a, b) => a - b);
// export const partOne = () =>;
// export const partTwo = () =>;
export const all = () => {
  // partOne();
  // partTwo();
};
