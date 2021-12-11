import { partOne, getData, partTwo } from "./day8";

const example = getData("example.txt");
const data = getData("input.txt");

test("part one example unique digits should equal 26 ", () => {
  const answer = partOne(example);
  expect(answer).toBe(26);
  console.log(partOne(data));
});

test("part two example output value should equal 61229 ", () => {
  const answer = partTwo(example);
  expect(answer).toBe(61229);
  console.log("partTwo", partTwo(data));
});
