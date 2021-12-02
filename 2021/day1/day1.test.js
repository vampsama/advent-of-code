"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getInput_1 = require("../util/getInput");
const day1_1 = require("./day1");
const example = (0, getInput_1.getTextFile)(__dirname, "example.txt")
    .split("\n")
    .map((elem) => Number(elem));
test("part one should equal 7", () => {
    const answer = (0, day1_1.countIncreases)(example);
    expect(answer).toBe(7);
});
test("part one should equal 5", () => {
    const answer = (0, day1_1.countIncreases)((0, day1_1.createTriplets)(example));
    expect(answer).toBe(5);
});
