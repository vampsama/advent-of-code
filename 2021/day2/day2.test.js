"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day2_1 = require("./day2");
test("example input should be a array", () => {
    const example = (0, day2_1.getData)("example.txt");
    const answer = Array.isArray(example);
    expect(answer).toBe(true);
});
test("example input should be a array of arrays", () => {
    const example = (0, day2_1.getData)("example.txt");
    const answer = Array.isArray(example[0]);
    expect(answer).toBe(true);
});
test("example input should be the correct array", () => {
    const example = (0, day2_1.getData)("example.txt");
    const expected = [
        ["forward", "5"],
        ["down", "5"],
        ["forward", "8"],
        ["up", "3"],
        ["down", "8"],
        ["forward", "2"],
    ];
    expect(example).toEqual(expect.arrayContaining(expected));
});
const example = (0, day2_1.getData)("example.txt");
test("part one horizontal position should equal 15", () => {
    const answer = (0, day2_1.getHorizontal)(example);
    expect(answer).toBe(15);
});
test("part one depth should equal 5", () => {
    const answer = (0, day2_1.getDepth)(example);
    expect(answer).toBe(10);
});
test("part 2 depth should equal 60", () => {
    const answer = (0, day2_1.getDepthWithAim)(example);
    expect(answer).toBe(60);
});
