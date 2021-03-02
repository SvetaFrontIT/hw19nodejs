function createCalculator(currentNum) {
    return {
        add: (num) => {
            module.exports.currentNum = currentNum;
            const sum = require('./add');
            currentNum = sum(num);
            return currentNum;
        },
        sub: (num) => {
            module.exports.currentNum = currentNum;
            const sub = require('./sub');
            currentNum = sub(num);
            return currentNum;
        },
        mult: (num) => {
            module.exports.currentNum = currentNum;
            const mult = require('./mult');
            currentNum = mult(num);
            return currentNum;
        },
        div: (num) => {
            module.exports.currentNum = currentNum;
            const div = require('./div');
            currentNum = div(num);
            return currentNum;
        },
        set: (num) => currentNum = num,
    }
};

module.exports = createCalculator(1);