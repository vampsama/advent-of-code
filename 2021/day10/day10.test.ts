import { partOne, getData, partTwo } from "./day10";

const example = getData("example.txt");
const data = getData("input.txt");

test("part one example points should equal 26397 ", () => {
  const answer = partOne(example);
  expect(answer).toBe(26397);
  console.log(partOne(data));
});

test("part two example points should equal 288957 ", () => {
  const answer = partTwo(example);
  expect(answer).toBe(288957);
  console.log("partTwo", partTwo(data));
});
