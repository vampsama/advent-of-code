"use strict";
exports.__esModule = true;
exports.all = exports.partTwo = exports.partOne = exports.getData = exports.getDepthWithAim = exports.getHorizontal = exports.getDepth = void 0;
var getInput_1 = require("../util/getInput");
exports.getDepth = function (array) {
    return array
        .filter(function (value) { return value[0] !== "forward"; })
        .map(function (elem) { return (elem[0] === "down" ? Number(elem[1]) : -Number(elem[1])); })
        .reduce(function (depth, current) { return depth + current; });
};
exports.getHorizontal = function (array) {
    return array
        .filter(function (value) { return value[0] === "forward"; })
        .map(function (elem) { return Number(elem[1]); })
        .reduce(function (depth, current) { return depth + current; });
};
var formatInstructions = function (array) {
    return array.map(function (elem) {
        elem[1] = elem[0] === "up" ? -Number(elem[1]) : Number(elem[1]);
        return elem;
    });
};
exports.getDepthWithAim = function (array) {
    var instructionArray = formatInstructions(array);
    return instructionArray.reduce(function (position, instruction) {
        if (instruction[0] === "forward")
            return [
                position[0],
                position[1] + instruction[1],
                position[2] + position[0] * instruction[1],
            ];
        return [position[0] + instruction[1], position[1], position[2]];
    }, 
    // [ aim, horizontalPosition, depth]
    [0, 0, 0])[2];
};
exports.getData = function (filename) {
    return getInput_1.getTextFile(__dirname, filename)
        .split("\n")
        .map(function (elem) { return elem.split(" "); });
};
exports.partOne = function () {
    return console.log("Part 1: ", exports.getDepth(exports.getData("input.txt")) * exports.getHorizontal(exports.getData("input.txt")));
};
exports.partTwo = function () {
    return console.log("Part 2: ", exports.getDepthWithAim(exports.getData("input.txt")) * exports.getHorizontal(exports.getData("input.txt")));
};
exports.all = function () {
    exports.partOne();
    exports.partTwo();
};
