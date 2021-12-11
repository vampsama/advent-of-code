import { partOne, getData, partTwo } from "./day10";

const example = getData("example.txt");
const data = getData("input.txt");

test("part one example risk sum should equal 15 ", () => {
  const answer = partOne(example);
  expect(answer).toBe(15);
  // console.log(partOne(data));
});

test("part two example 3 biggest basins should equal 1134 ", () => {
  const answer = partTwo(example);
  expect(answer).toBe(1134);
  console.log("partTwo", partTwo(data));
});
