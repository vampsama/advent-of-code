import { partOne, getData, partTwo } from "./day11";

const example = getData("example.txt");
const data = getData("input.txt");

test("part one example total flashes should equal 1656 ", () => {
  const answer = partOne(example);
  expect(answer).toBe(1656);
});
test("part one test total flashes should equal 1656 ", () => {
  const answer = partOne(data);
  expect(answer).toBe(1571);
});

// test("part two example points should equal 288957 ", () => {
//   const answer = partTwo(example);
//   expect(answer).toBe(288957);
//   console.log("partTwo", partTwo(data));
// });
