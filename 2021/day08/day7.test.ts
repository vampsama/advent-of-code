import { partOne, getData, partTwo } from "./day7";

const example = getData("example.txt");
const data = getData("input.txt");

test("part one example fueal cost should equal 37 ", () => {
  const answer = partOne(example);
  expect(answer).toBe(37);
  console.log(partOne(data));
});

test("part two example fuel cost should equal 168 ", () => {
  const answer = partTwo(example);
  console.log("partTwo", partTwo(data));
  expect(answer).toBe(168);
});
