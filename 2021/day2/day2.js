"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.partTwo = exports.partOne = exports.getData = exports.getDepthWithAim = exports.getHorizontal = exports.getDepth = void 0;
const getInput_1 = require("../util/getInput");
const getDepth = (array) => {
    return array
        .filter((value) => value[0] !== "forward")
        .map((elem) => (elem[0] === "down" ? Number(elem[1]) : -Number(elem[1])))
        .reduce((depth, current) => depth + current);
};
exports.getDepth = getDepth;
const getHorizontal = (array) => {
    return array
        .filter((value) => value[0] === "forward")
        .map((elem) => Number(elem[1]))
        .reduce((depth, current) => depth + current);
};
exports.getHorizontal = getHorizontal;
const formatInstructions = (array) => {
    return array.map((elem) => {
        elem[1] = elem[0] === "up" ? -Number(elem[1]) : Number(elem[1]);
        return elem;
    });
};
const getDepthWithAim = (array) => {
    const instructionArray = formatInstructions(array);
    return instructionArray.reduce((position, instruction) => {
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
exports.getDepthWithAim = getDepthWithAim;
const getData = (filename) => (0, getInput_1.getTextFile)(__dirname, filename)
    .split("\n")
    .map((elem) => elem.split(" "));
exports.getData = getData;
const partOne = () => console.log("Part 1: ", (0, exports.getDepth)((0, exports.getData)("input.txt")) * (0, exports.getHorizontal)((0, exports.getData)("input.txt")));
exports.partOne = partOne;
const partTwo = () => console.log("Part 2: ", (0, exports.getDepthWithAim)((0, exports.getData)("input.txt")) * (0, exports.getHorizontal)((0, exports.getData)("input.txt")));
exports.partTwo = partTwo;
const all = () => {
    (0, exports.partOne)();
    (0, exports.partTwo)();
};
exports.all = all;
