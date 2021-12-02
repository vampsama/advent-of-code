import { getInput, getTextFile } from "../util/getInput";

export const getDepth = (array: [any, any][]): number => {
  return array
    .filter((value) => value[0] !== "forward")
    .map((elem) => (elem[0] === "down" ? Number(elem[1]) : -Number(elem[1])))
    .reduce((depth, current) => depth + current);
};
export const getHorizontal = (array: [any, any][]): number => {
  return array
    .filter((value) => value[0] === "forward")
    .map((elem) => Number(elem[1]))
    .reduce((depth, current) => depth + current);
};
const formatInstructions = (array: [any, any][]): [any, any][] => {
  return array.map((elem) => {
    elem[1] = elem[0] === "up" ? -Number(elem[1]) : Number(elem[1]);
    return elem;
  });
};
export const getDepthWithAim = (array: [any, any][]): number => {
  const instructionArray = formatInstructions(array);

  return instructionArray.reduce(
    (position, instruction) => {
      if (instruction[0] === "forward")
        return [
          position[0],
          position[1] + instruction[1],
          position[2] + position[0] * instruction[1],
        ];

      return [position[0] + instruction[1], position[1], position[2]];
    },
    // [ aim, horizontalPosition, depth]
    [0, 0, 0]
  )[2];
};
export const getData = (filename: string): [any, any][] =>
  getTextFile(__dirname, filename)
    .split("\n")
    .map((elem) => elem.split(" "));
export const partOne = () =>
  console.log(
    "Part 1: ",
    getDepth(getData("input.txt")) * getHorizontal(getData("input.txt"))
  );
export const partTwo = () =>
  console.log(
    "Part 2: ",
    getDepthWithAim(getData("input.txt")) * getHorizontal(getData("input.txt"))
  );
export const all = () => {
  partOne();
  partTwo();
};
