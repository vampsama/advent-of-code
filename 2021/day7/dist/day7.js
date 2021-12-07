"use strict";
exports.__esModule = true;
exports.all = exports.getData = exports.partTwo = exports.partOne = void 0;
var getInput_1 = require("../util/getInput");
exports.partOne = function (pos) {
    // hitta medianen
    var median = pos[Math.round(pos.length / 2)];
    //console.log(median);
    return pos.reduce(function (prev, cur) { return prev + Math.abs(cur - median); }, 0);
};
exports.partTwo = function (pos) {
    var mean = Math.round(pos.reduce(function (p, c) { return p + c; }, 0) / pos.length);
    console.log(pos.reduce(function (p, c) { return p + c; }, 0) / pos.length);
    return Math.min(pos.reduce(function (p, c) {
        var distance = Math.abs(c - mean);
        costs[distance] = fuelCost(distance);
        //console.log(costs);
        return p + costs[distance];
    }, 0), pos.reduce(function (p, c) {
        var distance = Math.abs(c - mean + 1);
        costs[distance] = fuelCost(distance);
        //console.log(costs);
        return p + costs[distance];
    }, 0), pos.reduce(function (p, c) {
        var distance = Math.abs(c - mean - 1);
        costs[distance] = fuelCost(distance);
        //console.log(costs);
        return p + costs[distance];
    }, 0));
};
var costs = [];
var fuelCost = function (distance) {
    if (distance === 0)
        return 0;
    if (costs[distance])
        return costs[distance];
    return fuelCost(distance - 1) + distance;
};
exports.getData = function (filename) {
    return getInput_1.getTextFile(__dirname, filename)
        .split(",")
        .map(function (elem) { return Number(elem); })
        .sort(function (a, b) { return a - b; });
};
// export const partOne = () =>;
// export const partTwo = () =>;
exports.all = function () {
    // partOne();
    // partTwo();
};
