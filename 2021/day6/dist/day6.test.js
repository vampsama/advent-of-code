"use strict";
exports.__esModule = true;
var day6_1 = require("./day6");
var example = day6_1.getData("example.txt");
var data = day6_1.getData("input.txt");
test("part one example number of lantern fish after 18 days should equal 26", function () {
    // console.log(example);
    var answer = day6_1.countLanternFishAfterNumberOfDays(example, 18);
    expect(answer).toBe(26);
    // console.log(getOverlappingPoints(data));
});
test("part one example number of lantern fish after 80 days should equal 5934", function () {
    // console.log(example);
    var answer = day6_1.countLanternFishAfterNumberOfDays(example, 80);
    expect(answer).toBe(5934);
    // console.log(countLanternFishAfterNumberOfDays(data, 80));
});
// test("part one data number of lantern fish after 80 days should equal 362666", () => {
//   // console.log(example);
//   const answer = countLanternFishAfterNumberOfDays(data, 80);
//   expect(answer).toBe(362666);
//   // console.log(countLanternFishAfterNumberOfDays(data, 80));
// });
// test("part two example number of lantern fish after 256 days should equal 26984457539", () => {
//   // console.log(example);
//   const answer = countLanternFishAfterNumberOfDays(example, 256);
//   expect(answer).toBe(26984457539);
//   // console.log(getOverlappingPoints(data));
// });
