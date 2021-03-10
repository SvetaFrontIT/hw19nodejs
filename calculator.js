let currentNum = 10;
const sum = require('./add');
const sub = require('./sub');
const mult = require('./mult');
const div = require('./div');
module.exports = {
    sum: (newNum) => {
        return currentNum = sum(currentNum, newNum);
    },
    sub: (newNum) => {
        return currentNum = sub(currentNum, newNum);
    },
    mult: (newNum) => {
        return currentNum = mult(currentNum, newNum);
    },
    div: (newNum) => {
        return currentNum = div(currentNum, newNum);
    },
}