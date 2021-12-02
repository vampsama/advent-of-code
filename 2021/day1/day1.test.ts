import { getTextFile } from "../util/getInput";
import { countIncreases, createTriplets } from "./day1";
const example = getTextFile(__dirname, "example.txt")
  .split("\n")
  .map((elem) => Number(elem));

test("part one should equal 7", () => {
  const answer = countIncreases(example);
  expect(answer).toBe(7);
});
test("part one should equal 5", () => {
  const answer = countIncreases(createTriplets(example));
  expect(answer).toBe(5);
});
