"use strict";
exports.__esModule = true;
var day7_1 = require("./day7");
var example = day7_1.getData("example.txt");
var data = day7_1.getData("input.txt");
test("part one example fueal cost should equal 37 ", function () {
    var answer = day7_1.partOne(example);
    expect(answer).toBe(37);
    console.log(day7_1.partOne(data));
});
test("part two example fuel cost should equal 168 ", function () {
    var answer = day7_1.partTwo(example);
    console.log("partTwo", day7_1.partTwo(data));
    expect(answer).toBe(168);
});
