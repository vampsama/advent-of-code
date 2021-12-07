import { getCo2, getData, getEpsilon, getGamma, getOxygen } from "./day3";

const example = getData("example.txt");
const data = getData("input.txt");
const jocke = getData("jocke.txt");

test("part one gamma rate should equal 22", () => {
  const answer = getGamma(example);
  expect(answer).toBe(22);
});
test("part one epsilon rate should equal 9", () => {
  const answer = getEpsilon(example);
  expect(answer).toBe(9);
  console.log("Part one power consumption ", getGamma(data) * getEpsilon(data));
});
test("part two oxygen rating should equal 23", () => {
  const answer = getOxygen(example);
  expect(answer).toBe(23);
});
test("part two CO2 scrubber rating should equal 10", () => {
  const answer = getCo2(example);
  expect(answer).toBe(10);
  console.log("Part two air consumption ", getOxygen(data) * getCo2(data));
});

test("Jockes input should equal ", () => {
  const co = getCo2(jocke);
  const ox = getOxygen(jocke);
  expect(co * ox).toBe(2784375);
});
