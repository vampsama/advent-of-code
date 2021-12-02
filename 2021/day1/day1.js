"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.partTwo = exports.partOne = exports.createTriplets = exports.countIncreases = void 0;
const getInput_1 = require("../util/getInput");
const countIncreases = (array) => {
    let count = 0;
    array.reduce((previous, current, currentIndex, array) => {
        if (current > previous)
            count++;
        return current;
    });
    return count;
};
exports.countIncreases = countIncreases;
const createTriplets = (array) => {
    array.reduce((previous, current, currentIndex, array) => {
        const next = currentIndex + 1 < array.length ? array[currentIndex + 1] : 0;
        array[currentIndex - 1] = previous + current + next;
        return current;
    });
    return array;
};
exports.createTriplets = createTriplets;
const getData = () => (0, getInput_1.getInput)("input.txt")
    .split("\n")
    .map((elem) => Number(elem));
const partOne = () => console.log("Part 1: ", (0, exports.countIncreases)(getData()));
exports.partOne = partOne;
const partTwo = () => console.log("Part 2: ", (0, exports.countIncreases)((0, exports.createTriplets)(getData())));
exports.partTwo = partTwo;
const all = () => {
    (0, exports.partOne)();
    (0, exports.partTwo)();
};
exports.all = all;
