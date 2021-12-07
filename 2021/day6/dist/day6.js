"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.all = exports.getData = exports.countLanternFishAfterNumberOfDays = void 0;
var getInput_1 = require("../util/getInput");
exports.countLanternFishAfterNumberOfDays = function (fishes, days) {
    fishes.sort(function (a, b) { return a - b; });
    console.log(fishes);
    fishes = fishes.reduce(function (p, c) {
        p[c]++;
    }, []);
    console.log(fishes);
    return fishes.reduce(function (prev, cur) { return prev + cur[0] * cur[1]; }, 0);
};
var countDecendants = function (fishes, days) {
    var _loop_1 = function (i) {
        var newFishes = [];
        fishes = fishes.map(function (value) {
            if (value === 0) {
                newFishes.push(8);
                return 6;
            }
            return value - 1;
        });
        fishes = __spreadArrays(fishes, newFishes);
    };
    for (var i = 0; i < days; i++) {
        _loop_1(i);
    }
    return fishes.length;
};
exports.getData = function (filename) {
    return getInput_1.getTextFile(__dirname, filename)
        .split(",")
        .map(function (elem) { return Number(elem); });
};
// export const partOne = () =>;
// export const partTwo = () =>;
exports.all = function () {
    // partOne();
    // partTwo();
};
